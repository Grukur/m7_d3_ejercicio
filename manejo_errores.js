import pg from 'pg'
import returnError from './errorPostgres.js'
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
const client = await pool.connect();

const consulta = async (query) => {
    try {
        let respuesta = await client.query(query);
        console.log('Ultimo comando: ',respuesta.command);
        console.log('Cantidad de rows: ',respuesta.rowCount)
        console.log('Registros:')
        console.table(respuesta.rows);

    }catch(error){
        if(error.code){
            let messageError = returnError(error);
            console.log(messageError)
        }
    }
}

let query = {
    text: 'select * from usuarios where edad between $1 and $2',
    values: [20, 30]
}

consulta(query)