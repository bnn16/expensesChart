import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [input, setInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const [style, setStyle] = useState('hide');

  const titleChangeHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: input.title,
      amount: input.amount,
      date: new Date(input.date),
    };
    props.onSaveData(expenseData);

    setInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  const styleHandler = () => {
    setStyle(style === 'show' ? 'hide' : 'show');
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={
          style === 'show' ? 'new-expense__controls' : 'new-expense__hide'
        }
      >
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            value={input.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            value={input.amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            value={input.date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          id="test"
          className={style === 'show' ? '' : 'new-expense__hide'}
          onClick={styleHandler}
        >
          Cancel
        </button>

        <button
          id="add"
          className={style === 'show' ? '' : 'new-expense__hide'}
          onChange={styleHandler}
          type="submit"
        >
          Add Expense
        </button>
        <button
          id="test"
          className={style === 'show' ? 'new-expense__hide' : ''}
          onClick={styleHandler}
        >
          Add New Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
