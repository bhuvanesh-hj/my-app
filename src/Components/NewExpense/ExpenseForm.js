// Always make sure that the useState is imported from the rect
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // adding the useState to get the user input of the tittle
    // through the array destructuring methodS
  const [enteredTittle, setEnteredTittle] = useState("");
    // adding the useState to get the user input of the amount
  const [enteredAmount, setEnteredAmount] = useState("");
    // adding the useState to get the user input of the date
  const [enteredDate, setEntereddDate] = useState("");
// function on changing the titte as per the user enters the value
  const changeTittle = (event) => {
    setEnteredTittle(event.target.value);
  };
// function on changing the amount as per the user enters the value
  const changeAmount = (event) => {
    setEnteredAmount(event.target.value);
  };
// function on changing the date as per the user enters the value
  const changeDate = (event) => {
    setEntereddDate(event.target.value);
  };
  return (
    // returning the form 
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Tittle</label>
            <input type="text" onChange={changeTittle} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.1"
              onChange={changeAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2021-01-01"
              max="2022-01-01"
              onChange={changeDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
