import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

function TransactionDetails({ deleteTransaction }) {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  let history = useHistory();

  return (
    <div>
      <p>Name: {transaction.name}</p>
      <p>Amount: ${transaction.amount}</p>
      <p>From: {transaction.from}</p>
      <p>Date: {transaction.date}</p>
    </div>
  );
}

export default withRouter(Transactions);
