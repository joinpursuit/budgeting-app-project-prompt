const express = require("express");

const budgets = express.Router();


const budgetsData = require("../models/budgets.js");
const { validateURL } = require("../models/validations.js");
// console.log(budgetsData)

// const { validateURL } = require("../models/validations.js")

// INDEX ROUTE --->
budgets.get("/", (req, res) => {
    res.json(budgetsData)
})


// SHOW ROUTE ----> 
budgets.get("/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    if (budgetsData[id]) {
        res.json(budgetsData[id])
    } else {
        res.status(404).send("nothing here for you")
    }
})

// CREATE ROUTE -----> 
budgets.post("/", validateURL, (req, res) => {
    budgetsData.push(req.body);
    res.json(budgetsData[budgetsData.length - 1])
})


// DELETE ROUTE ------>
budgets.delete("/:id", (req, res) => {
    const { id } = req.params
    const deleteBudget = budgetsData.splice(id, 1)
    res.status(200).json(deleteBudget)
})

// UPDATE ROUTE ----->
budgets.put("/:id", (req, res) => {
    const { id } = req.params
    budgetsData[id] = req.body
    res.status(200).json(budgetsData[id])
})

module.exports = budgets