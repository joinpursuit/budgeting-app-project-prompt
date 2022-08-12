import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <h1>
        <Link className="link" to="/">AddyBudget</Link>
      </h1>
      <h1>
        <Link className="link" to="/budgets">Transactions</Link>
      </h1>
      <h1>
        <Link className="link" to="/budgets/new">New Transaction</Link>
      </h1>
    </nav>
  )
}

export default Navbar;