const db = require("../../config/db");

const table = () => db("contact");

module.exports = {
  async count() {
    const result = await table().count(`id`);
    return parseInt(result[0].count, 10);
  },
  async index({ page, itemsPerPage }) {
    return await table()
      .select("*")
      .offset((page - 1) * itemsPerPage)
      .limit(itemsPerPage);
  },
  async show(id) {
    return await table().where({ id: id }).first();
  },
  async create(contact) {
    return await table().insert(contact);
  },
  async update(contact) {
    const contactId = await table().where({ id: contact.id }).first();
    await table().update(contact).where({ id: contact.id });
    return contactId;
  },
  async destroy(id) {
    const contact = await table().where({ id: id }).first();
    await table().where({ id: id }).del();
    return contact;
  },
};
