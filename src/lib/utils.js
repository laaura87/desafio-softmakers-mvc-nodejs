const fs = require("fs");
const path = require("path");

module.exports = {
  deleteFile(image) {
    try {
      fs.unlinkSync(
        path.resolve(__dirname, "..", "..", "public", "uploads", image)
      );
    } catch (error) {
      throw new Error("Cannot delete file");
    }
  },
};
