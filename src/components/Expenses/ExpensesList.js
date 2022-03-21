import React from 'react';
import './ExpensesList.css';
import ItemExpense from './ItemExpense';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ItemExpense
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
