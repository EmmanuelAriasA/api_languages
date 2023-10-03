import mysql from "promise-mysql";
import config from "../config";

//Obtiene los datos de la base de datos desde el archivo config.js
const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});

//retorna un objeto de conexión
const getConnection = () => {
  return connection;
};

//exporta la función getConnection
module.exports = {
  getConnection,
};
