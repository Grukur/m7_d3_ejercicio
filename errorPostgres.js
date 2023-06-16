const returnError = (error) => {
    let errores = {
        "42P01": "Tabla seleccionada no existe",
        "42703": "Columna no encontrada",
        "42704": "Tipo de dato inexistente para esta operación",
        "58P03": "Procedimiento almacenado no existente",
        "42S02": "Ingreso/actualización duplicados en las claves primarias",
        "42601": "No se puede crear la tabla porque ya existe una con el mismo nombre",
        "42601": "La columna de llave primaria debe ser única",
        "28P01": "Credenciales de acceso a la BD incorrectas",
        "ECONNREFUSED": "error de conexion, revise la configuracion de su conexion",
        "ENOTFOUND": "Ha fallado la conexion al host",
        "08003": "connection_does_not_exist",
        "08006": "connection_failure",
        "2F002": "modifying_sql_data_not_permitted",
        "57P03": "cannot_connect_now",
        "42601": "syntax_error",
        "42501": "insufficient_privilege",
        "42602": "invalid_name",
        "42622": "name_too_long",
        "42939": "reserved_name",
        "42703": "undefined_column",
        "42000": "syntax_error_or_access_rule_violation",
        "42P01": "undefined_table",
        "42P02": "undefined_parameter"
    }

    let objError = {
        code: error.code,
        error: errores[ error.code ],
        message: error.message,
    }
    return objError
}

export default returnError;