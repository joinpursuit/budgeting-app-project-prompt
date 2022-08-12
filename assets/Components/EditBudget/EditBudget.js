import React,{ useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./EditBudget.css";

const API = process.env.REACT_APP_API_URL;

const EditBudget = () => {
  let { index } = useParams();

  const navigate = useNavigate();

  const [budget, setBudget] = useState({
    date: "",
    item_name: "",
    amount: 0, 
    from: "",
    category: ""
  });

  const handleChange = (e) => {
    e.preventDefault()
    setBudget(e.target.value )
  };

  const handleSelect = (e) => {
    setBudget({...budget, [e.target.id] : e.target.value})
  }

  useEffect(() => {
    axios.get(`${API}/budgets/${index}`)
    .then((res) => {
      setBudget(res.data)
    })
    .catch((err) => console.log(err))
  },[index])

  const updateBudget = () => {
    axios.put(`${API}/budgets/${index}`, budget)
    .then((res) => {
      setBudget(res.data);
      navigate(`/budgets/${index}`)
    })
    .catch((err) => console.log(err))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBudget();
  };


  return (
    <div className='Edit-Budget'>
      <form onSubmit={handleSubmit}>
        <label >
          Date 
          <br/>
          <input 
          id='date' 
          type="text" 
          placeholder="Date" 
          value={budget.date}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label >
          Name
          <br/>
          <input 
          id='item_name' 
          type="text" 
          placeholder="Name" 
          value={budget.item_name}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label >
          Amount
          <br/>
          <input 
          id='amount' 
          type="number" 
          placeholder="Enter Amount" 
          value={budget.amount}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label >
          From 
          <br/>
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
        <input type="submit" value="UPDATE TRANSACTION" />

      </form>
      {/* <Link to={`budgets/new${index}`}>
        <button>CREATE NEW ITEM</button>
      </Link> */}

    </div>
  )
}

export default EditBudget;