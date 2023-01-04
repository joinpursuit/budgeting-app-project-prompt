import React, { useState, useEffect } from "react";
import "./BudgetDetails.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const BudgetDetails = () => {
  const [budget, setBudget] = useState({});
  let { index } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/budgets/${index}`)
      .then((res) => {
        setBudget(res.data);
      })
      .catch((error) => {
        console.log(error)
        // navigate(`404`);
      });
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${API}/budgets/${index}`)
      .then((res) => navigate(`/budgets`))
      .catch((err) => console.log(err));
  };
  const handleGoBack = () => {
    navigate(`/budgets`);
  };

  return (
    <div>
      <article className="details">
        <h3>TRANSACTION DATE</h3>
        <h3>{budget.date}</h3>
        <h3>TRANSACTION NAME</h3>
        <h3>{budget.item_name}</h3>
        <h3>TRANSACTION AMOUNT</h3>
        <h3>{budget.amount}</h3>
        <h3>TRANSACTION DETAIL</h3>
        <h3>{budget.from}</h3>
        <h3>TRANSACTION CATEGORY</h3>
        <h3>{budget.category}</h3>
        <br />
      </article>
      <div className="div-btn">
        <div>
          <button className="btn1" onClick={handleGoBack}>GO BACK</button>
        </div>
        <div>
          <button className="btn2" onClick={handleDelete}>DELETE</button>
        </div>

        <div>
          <Link to={`/budgets/${index}/edit`}>
            <button className="btn3">EDIT</button>
          </Link>
        </div>
        <div>
          <Link to={`/budgets/new`}>
            <button className="btn4"> CREATE NEW TRANSACTION </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BudgetDetails;