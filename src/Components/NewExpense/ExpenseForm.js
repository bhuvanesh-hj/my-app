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
  // adding the useStaet to get the user input of the location
  const [enteredLocation, setEnteredLocation] = useState("");
  // function on changing the titte as per the user enters the value

  // we can also use single state approach for updating values
  // By using this type of menthod we can implemen the single state approach foe changing the multiple values
  // const [userInput, setUserInput] = useState({
  //   enteredTittle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  // for single state approach the function menthod is also been changed
  const changeTittle = (event) => {
    // this syntax is used for multi state approach
    setEnteredTittle(event.target.value);
    // this are the syntax we have to use while implementing then singleState
    // There are two ways to describe the single state approach
    // i---> By passing an object inside the setUserInput method
    // setUserInput({
    // here we have t use the spread operator for where we don't lose the other value while updating a value ,!So we have to use spread operator and changing the particular value
    // while using this syantax some time we can get prefered ouput
    //   ...userInput,
    //   enteredTittle:event.target.value;
    // })
    // ii---> By using the function inside the setUserInput method
    // setUserInput((prevState)=>{
    //   return {
    //   ...prevState,enteredTittle:event.target.value;
    //   }
    // })
  };
  // function on changing the amount as per the user enters the value
  const changeAmount = (event) => {
    setEnteredAmount(event.target.value);
  };
  // function on changing the date as per the user enters the value
  const changeDate = (event) => {
    setEntereddDate(event.target.value);
  };
  // function on changing the location as per the user enters the value
  const changeLocation=(event)=>{
    setEnteredLocation(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      tittle: enteredTittle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      location:enteredLocation
    };
    console.log(ExpenseData);
    event.target.reset();
  };
  return (
    // returning the form
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Tittle</label>
            <input type="text" onChange={changeTittle} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="1" step="0.01" onChange={changeAmount} />
          </div>
          <div className="new-expense__control">
            <label>Location</label>
            <input type="text" onChange={changeLocation} />
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
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
