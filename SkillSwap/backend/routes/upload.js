const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = file.originalname.replace(/\s/g, "_").replace(ext, "");
    cb(null, name + "-" + Date.now() + ext);
  },
});

const upload = multer({ storage });

router.post("/file", upload.single("file"), (req, res) => {
  console.log("UPLOAD RECEIVED ✅", req.file);
  if (!req.file) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  res.json({ fileUrl: `/uploads/${req.file.filename}` });
});


module.exports = router;
