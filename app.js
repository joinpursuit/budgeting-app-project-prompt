const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const transactionsController = require("./controllers/transactions.controller.js");
const categoriesController = require("./controllers/categories.controller.js");

app.get("/", (req, res) => {
  res.send("Welcome to my Budgeting App!");
});

app.use("/transactions", transactionsController);
app.use("/categories", categoriesController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

module.exports = app;