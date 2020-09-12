const Contacts = require("../models/Contact");
const { deleteFile } = require("../../lib/utils");

module.exports = {
  async index(req, res) {
    try {
      const page = parseInt(req.query.page || "1", 10);
      const config = { page, itemsPerPage: 5 };
      const contacts = await Contacts.index(config);
      const count = await Contacts.count();

      return res.render("homepage", {
        ...config,
        count,
        pages: Math.ceil(count / config.itemsPerPage),
        contacts,
      });
    } catch (error) {
      return res.status(500).json({
        error: "Unexpected error when show contacts.",
      });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const findContact = await Contacts.show(id);

      if (!findContact)
        return res.status(404).send({ Error: "Contact not found." });

      return res.render("showcontact", { findContact });
    } catch (error) {
      return res.status(500).send("Unexpected error while showing contact.");
    }
  },

  async create(req, res) {
    try {
      const contact = {
        ...req.body,
        image: req.file.filename,
      };

      await Contacts.create(contact);
      return res.status(201).send();
    } catch (error) {
      return res.status(500).json({
        error: "Unexpected error when creating new contact.",
      });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;

      const contact = {
        ...req.body,
        image: req.file.filename,
        id,
      };

      const updateContact = await Contacts.update(contact);

      deleteFile(updateContact.image);

      return res.status(201).send();
    } catch (error) {
      return res.status(500).json({
        error: "Unexpected error while editing contact",
      });
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const deletedContact = await Contacts.destroy(id);

      if (!deletedContact) return res.json({ error: "Contact not found" });

      deleteFile(deletedContact.image);

      return res.redirect("/contacts");
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Unexpected error when deleting contact" });
    }
  },
};
