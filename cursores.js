import pg from 'pg'
const { Pool } = pg;
import Cursor from 'pg-cursor';

const config = {
    host: "localhost",
    database: "m7_usuarios",
    user: "postgres",
    password: "123456",
    port: 5432
}

const pool = new Pool(config)
const client = await pool.connect()

const consultar = async (nombre) => {
    let query = "select * from usuarios";

    const cursor = client.query(new Cursor(query))

    let flag = true;
    while (flag) {
        let rows = await cursor.read(2);
        let usuarioBuscado = rows.find(usuario => usuario.nombre == nombre);
        if (usuarioBuscado) {
            console.log('usuario encontraod: ', usuarioBuscado)
            flag = false;
            cursor.close(() => {
                client.release()
            })

        }
        if (rows.length == 0) {
            flag = false;
            cursor.close(() => {
                client.release()
            })
        }
    }
}


consultar('Usuario 3')