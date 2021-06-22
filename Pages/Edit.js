import TransactionEditForm from "../Components/TransactionEditForm";

function Edit({ updateTransaction, transactions }) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <TransactionEditForm updateTransaction={updateTransaction} transactions={transactions} />
    </div>
  );
}

export default Edit;
