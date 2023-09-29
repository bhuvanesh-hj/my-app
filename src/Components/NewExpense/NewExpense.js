import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false)
  const saveExpenseDataHandler = (onEnteredExpenseData) => {
    const expenseData = {
      ...onEnteredExpenseData,
      id: Math.random().toString(),
    };
   props.onAddExpense(expenseData);
   setisEditing(false);
  };
  const startEditing=()=>{
    setisEditing(true)
  }
  const stopEditing=()=>{
    setisEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && (<button onClick={startEditing}>Add new exense</button>)}
      {isEditing &&(
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancle={stopEditing} />)}
    </div>
  );
};

export default NewExpense;