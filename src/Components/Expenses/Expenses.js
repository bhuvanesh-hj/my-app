import React, { useState } from "react";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [FilteredYearDefault, setFilteredYearDefault] = useState("2020");
  const onFilterExpense = (slectedYear) => {
    setFilteredYearDefault(slectedYear);
  };
  // adding the filter list to view on the screen
  const filterExpensesList = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYearDefault;
  });

  //
  return (
    <div>
    <Card className="expenses">
      <ExpenseFilter
        selected={FilteredYearDefault}
        onFilterExpenseHandler={onFilterExpense}
      />
      <ExpenseList items={filterExpensesList}/>
    </Card>
    </div>
  );
};

export default Expenses;
