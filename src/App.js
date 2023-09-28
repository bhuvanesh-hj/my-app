import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Food",
      location: "Market",
      amount: 20,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Petrol",
      amount: 200,
      location: "Kr circle",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Movie",
      location: "Foram mall",
      amount: 500,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Cab",
      location: "Temple",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      {expenses.map(expense => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      ></ExpenseItem>
      ))};
    </div>
  );
}

export default App;
