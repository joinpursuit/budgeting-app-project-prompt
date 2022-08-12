import React, { useState, useEffect } from "react";
import Budget from "../Budget/Budget";
import "./Budgets.css";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Budgets = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/budgets`)
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const calculateBalance = budgets.map((budget) => Number(budget.amount))
  let sum = 0;
  calculateBalance.forEach((amount) => {
    sum += amount;
    return sum;
  });
  let figColor = "";
  if (sum < 0) {
    figColor = "red";
  } else {
    figColor = "green";
  }

  return (
    <div className="Budgets">
      <h2> Bank Account Total: <span className={figColor}>${sum}</span></h2>
      <section>
        <table>
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Date</th>
              <th>Transactions</th>
              <th>Amount</th>
              <th>Category</th>
              <th>From</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => {
              return <Budget key={index} budget={budget} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default Budgets;