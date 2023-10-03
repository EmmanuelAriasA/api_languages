import { getConnection } from "../db/database";

//Async significa que la función es asincrona, es decir, que puede tardar en ejecutarse
//Await significa que la función debe esperar a que se ejecute la función que se le indica

const getlenguage = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("SELECT * FROM language");
  console.log(result);
  res.json(result);
};

export const methods = {
  getlenguage,
};
