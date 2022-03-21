import React from 'react';

import Card from '../UI/Card';
import './ItemExpense.css';
import ItemExpensesDate from './ItemExpensesDate.js';

const ItemExpense = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ItemExpensesDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ItemExpense;
