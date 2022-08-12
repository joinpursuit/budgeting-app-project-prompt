import React from 'react';
import { Link } from "react-router-dom";
import "./Budget.css";

const Budget = ({ budget, index }) => {
  return (
    
      <tr>
        <td>
          {budget.date} 
        </td>
        <td>
          <Link to={`/budgets/${index}`}>{budget.item_name}</Link>
        </td>
        <td>
          <Link to={`/budgets/${index}`}>$ {budget.amount}</Link>
        </td>
        <td>
          <Link to={`/budgets/${index}`}>{budget.category}</Link>
        </td>
        <td>
          <Link to={`/budgets/${index}`}>{budget.from}</Link>
        </td>
      </tr>
  
  )
}

export default Budget;