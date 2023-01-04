// DEPENDENCIES 
const express = require("express");

// CONFIGURATION
const app = express();

const cors = require("cors");

// USE OF MIDDLEWARES
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log("we are working")
    next();
})
// IMPORTING THE CONTROLLERS
const budgetsController = require("./controllers/budgetsController.js")


// ROUTES
app.get("/", (req, res) => {
    res.send("Successful")
})


// USING THE CONTROLLERS 
app.use("/budgets", budgetsController)


// CREATING A CATCH ALL ROUTE
app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})


// EXPORT
module.exports = app;