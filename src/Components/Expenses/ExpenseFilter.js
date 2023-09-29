import "./ExpenseFilter.css";

const ExpenseFilter = () => {
  return (
    <div className="expenses-filter">
    <div className="expenses-filter__control">
    <label>Filter by year</label>
      <select>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
