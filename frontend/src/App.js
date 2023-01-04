import Navbar from './components/NavBar/Navbar';
import Home from "./components/Home/Home";
import Budgets from './components/Budgets/Budgets';
import EditBudget from "./components/EditBudget/EditBudget"
import BudgetDetails from './components/BudgetDetails/BudgetDetails';
import NewBudget from './components/NewBudget/NewBudget';
import Footer from './components/Footer/Footer';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/budgets/new" element={<NewBudget />} />
            <Route path="/budgets/:index" element={<BudgetDetails />} />
            <Route path="/budgets/:index/edit" element={<EditBudget />} />

          </Routes>
        </main>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;