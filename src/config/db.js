const knex = require("knex");

require("dotenv").config();

const db = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

module.exports = db;
