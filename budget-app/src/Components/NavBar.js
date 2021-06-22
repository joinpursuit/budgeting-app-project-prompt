import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="nav-header">
        <NavLink to="/transactions">Budget App</NavLink>
      </h1>
      <button className="nav-button">
        <NavLink to="/transactions/new">New Transaction</NavLink>
      </button>
    </nav>
  );
}