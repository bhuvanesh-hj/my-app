import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import "./Expenses.css";

const Expenses = (props) => {
    const item = props.items;
  return (
    <Card className="expenses">
      {item.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
