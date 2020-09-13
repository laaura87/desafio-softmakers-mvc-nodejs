const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "public", "uploads"),
    filename: (req, file, callback) => {
      const hash = crypto.randomBytes(6).toString("hex");

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(new Error("Only images are allowed"));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
};
