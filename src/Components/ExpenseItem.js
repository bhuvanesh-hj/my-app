import "./ExpenseItem.css";
import "./ExpenseDate.js";
import "./ExpenseDetails.js";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
        <div className="expense-item__description">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} location={props.location} amount={props.amount} />
        </div>
    </div>
  );
}

export default ExpenseItem;
