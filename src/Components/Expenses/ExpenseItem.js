import "./ExpenseItem.css";
import "./ExpenseDate.js";
import "./ExpenseDetails.js";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
const ExpenseItem = (props) => {
  const deleteExpense=()=>{
      console.log("Delete Expense")
  }
  return (
    <Card className="expense-item" id={props.title}>
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
        <ExpenseDetails title={props.title} location={props.location} amount={props.amount} />
        </div>
        <button onClick={deleteExpense}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
