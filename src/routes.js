const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");
const contact = require("./app/controllers/ContactController");

const routes = express.Router();

const upload = multer(multerConfig);

routes.get("/contacts", contact.index); //feito
routes.get("/contacts/:id", contact.show); //feito
routes.post("/contacts", upload.single("image"), contact.create); //feito
routes.put("/contacts/:id", upload.single("image"), contact.update); //feito
routes.delete("/contacts/:id", contact.destroy); //feito

module.exports = routes;
