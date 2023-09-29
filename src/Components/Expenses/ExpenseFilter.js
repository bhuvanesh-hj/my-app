import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {

    const filterExpenseYear=(event)=>{
        props.onFilterExpenseHandler(event.target.value);
    }
  return (
    <div className="expenses-filter">
    <div className="expenses-filter__control">
    <label>Filter by year</label>
      <select value={props.selected} onChange={filterExpenseYear}>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
      </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
