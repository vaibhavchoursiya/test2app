const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.post("/send", (req, res) => {
  res.json({
    status: "Success",
  });
});

module.exports = router;
