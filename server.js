const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3600;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require(path.join(__dirname, "routes", "routes_api.js")));

app.listen(PORT, () => {
  console.log(`Sever is Running at ${PORT}`);
});
