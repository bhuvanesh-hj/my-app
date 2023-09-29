import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">"Found no expenses!"</h2>;
  } else if (props.items.length === 1) {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
        {
          <h4 className="expenses-list__fallback">
            "Only single Expense here. Please add more..."
          </h4>
        }
      </ul>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
