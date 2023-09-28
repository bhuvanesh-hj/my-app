import "./ExpenseDetails.css"
function ExpenseDetails(props) {
  return (
    <div className="expense-items">
      <h2>{props.title}</h2>
      <div className="expense_location">Location: {props.location}</div>
      <div className="expense-item__price">Rs {props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
