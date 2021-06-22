import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function TransactionEditForm(props) {
  let { index } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({});

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateTransaction(transaction, index);
    history.push(`/transactions/${index}`);
  };

  return(
      <div></div>
  )
}
