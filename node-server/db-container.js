const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "postgresdb",
  database: "postgres",
  password: "INSERT-PASSWORD",
  port: 5432,
});

module.exports = pool;
