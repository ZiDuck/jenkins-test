// Import essential libraries
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use("/", router);

app.listen(process.env.port || 3000);
console.log("Running at Port a 3000");
