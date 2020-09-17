exports.up = function (knex) {
  return knex.schema.createTable("contact", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.string("surname").notNullable();
    table.string("email").notNullable().unique();
    table.string("phone").notNullable();
    table.string("cep");
    table.string("state").notNullable();
    table.string("city").notNullable();
    table.string("street").notNullable();
    table.string("neighborhood").notNullable();
    table.string("number");
  });
};

exports.down = function (knex) {
  return knex.schema.dropSchema("contact");
};
