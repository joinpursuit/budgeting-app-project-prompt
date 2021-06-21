const budgets = require("express").Router();
const budgetsArray = require("../models/budget");

budgets.get("/", (req,res) => {
    res.json(budgetsArray)
})

budgets.get("/arrayIndex", (req,res) => {
    const {arrayIndex} =req.params
    res.json(budgetsArray[arrayIndex])
})

budgets.post("/", (req, res) => {
    const { body } = req;
    budgetsArray.push(body);
    const newIndx = budgetsArray.length - 1;
    res.json(bookmarksArray[newIndx]);
  });

budgets.put("/:arrayIndex", (req, res) => {
    const { arrayIndx } = req.params;
    const { body } = req;
    budgetsArray[arrayIndx] = body;
    res.json(budgetsArray[arrayIndx]);
  }); 

  budgets.delete("/:arrayIndex", (req, res) => {
    const { arrayIndx } = req.params; 
    const deletedBudget = budgetsArray.splice(arrayIndx, 1);
    res.json(deletedBudget[0]);
  });

  module.exports = budgets;