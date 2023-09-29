import "./ExpenseItem.css";
import "./ExpenseDate.js";
import "./ExpenseDetails.js";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
import { useState } from "react";
const ExpenseItem = (props) => {
 
    //this return the array
    // this array cotaines in the first the state inital vlaue and updateing function
    

  return (
    <Card className="expense-item" >
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          {/* for paricular state we have initialize with the state returning initial value to the element */}
        <ExpenseDetails title={props.title} location={props.location} amount={props.amount} />
        </div>

    </Card>
  );
}

export default ExpenseItem;
