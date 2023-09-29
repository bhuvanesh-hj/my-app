import "./ExpenseForm.css";

const ExpenseForm = () => {
    const changeTittle=(event)=>{
        console.log(event.target.value);
    }
  return (
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Tittle</label>
            <input type="text" onChange={changeTittle} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01"  step="0.1"/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2021-01-01" max="2022-01-01" />
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
