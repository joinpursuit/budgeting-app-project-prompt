import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./NewBudget.css";


const API = process.env.REACT_APP_API_URL;

const NewBudget = () => {

  const [budget, setBudget] = useState({
    date: "",
    item_name: "",
    amount: 0, 
    from: "",
    category: ""
  })

  const navigate = useNavigate();

  const addNewBudget = () => {
    axios.post(`${API}/budgets`, budget)
    .then((res) => navigate(`/budgets`))
    .catch((err) => console.log(err))
  }

  const handleChange = (e) => {
    setBudget({ ...budget, [e.target.id] : e.target.value })
  };

  const handleSelect = (e) => {
    setBudget({...budget, [e.target.id] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewBudget();
  }


  return (
     <div className='New-Budget'>
      <form onSubmit={handleSubmit}>
        <label >
          Date 
          <br />
          <input 
          id='date' 
          type="date" 
          placeholder="Date" 
          value={budget.date}
          onChange={handleChange}
          className="date"
          />
        </label>
        <br />
        <label >
          Name
          <br />
          <input 
          id='item_name' 
          type="text" 
          placeholder="Name" 
          value={budget.item_name}
          onChange={handleChange}
          />
        </label>
        <br />
        <label >
          Amount
          <br />
          <input 
          id='amount' 
          type="number" 
          placeholder="Enter Amount" 
          value={budget.amount}
          onChange={handleChange}
          />
        </label>
        <br />
        <label >
          From 
          <br />
          <input 
          id='from' 
          type="text" 
          placeholder="Sender's Name" 
          value={budget.from}
          onChange={handleChange}
          />
        </label>
        <br />

        <select id="category" value={budget.category} onChange={handleSelect}>
          <option>Select Category</option>
          <option id="category" value="Income">Income</option>
          <option id="category" value="Expenditure">Expenditure</option>
          {/* <option>Savings</option> */}
          {/* <option></option> */}
        </select>
        <br />
        <div>
        <input type="submit" value="CREATE NEW ITEM" />
        </div>

      </form>
      {/* <Link to={`budgets/${index}`}></Link> */}

    </div>
  )
}

export default NewBudget;