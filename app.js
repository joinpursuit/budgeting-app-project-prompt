const express = require("express");
const budgetsController = require("./controllers/budgets");
const cors = require('cors');
const app = express();
app.use(express.json()); 
app.use(cors());



app.use("/budgets", budgetsController);

app.get("/", (req,res) => {
    res.send("Welcome to my server!!")
})

app.get("/", (req, res) => {
  req.body;
  res.send("Bookmarks App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

module.exports = app;