import React, { useState } from 'react';

import DisplayItemExpenses from './components/Expenses/DisplayItemExpenses.js';
import NewExpense from './components/AddNewExpense/NewExpense.js';

const DUMMY_EXPENSES = [
  { id: 'el1', title: 'Car gas', amount: 75, date: new Date(2022, 3, 1) },
  { id: 'el2', title: 'food', amount: 225, date: new Date(2022, 3, 10) },
  { id: 'el3', title: 'gym', amount: 25, date: new Date(2021, 3, 1) },
  { id: 'el4', title: 'games', amount: 200, date: new Date(2020, 3, 10) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddedExpense={addExpenseHandler} />
      <DisplayItemExpenses items={expenses} />
    </div>
  );
}

export default App;
