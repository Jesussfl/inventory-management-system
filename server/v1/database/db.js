const mysql = require("mysql2/promise");
const { host, user, password, database } = require("../../configs/config");

async function query(sql, params) {
  const connection = await mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
  });
  const [results] = await connection.execute(sql, params);

  return results;
}

module.exports = { query };
