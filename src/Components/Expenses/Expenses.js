import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [FilteredYearDefault, setFilteredYearDefault] = useState("2020");
  const onFilterExpense = (slectedYear) => {
    setFilteredYearDefault(slectedYear);
  };

  const filterExpensesList = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYearDefault;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={FilteredYearDefault}
        onFilterExpenseHandler={onFilterExpense}
      />
      {filterExpensesList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </Card>
  );
};

export default Expenses;
