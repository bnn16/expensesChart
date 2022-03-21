import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

const NewExpense = (props) => {
  const saveDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddedExpense(expenseData);
  };

  
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;
