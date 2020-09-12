const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "public", "uploads"),
    filename: (req, file, callback) => {
      const hash = crypto.randomBytes(6).toString("hex");

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
