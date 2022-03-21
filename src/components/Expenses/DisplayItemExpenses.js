import React, { useState } from 'react';
import './DisplayItemExpenses.css';
import Card from '../UI/Card.js';
import ExpensesFilter from '../AddNewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const DisplayItemExpenses = (props) => {
  const [year, setYear] = useState('2020');

  const addFilterYearHandler = (filterYear) => {
    console.log(filterYear);
    setYear(filterYear);
  };
  const filter = props.items.filter((date) => {
    return date.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={addFilterYearHandler} />
        <ExpensesChart expenses={filter} />
        <ExpensesList items={filter} />
      </Card>
    </div>
  );
};
export default DisplayItemExpenses;

// function DisplayItemExpenses(props) {
//   const [year, setYear] = useState('2022');

//   const addFilterYearHandler = (filterYear) => {
//     setYear(filterYear);
//   };

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selectedYear={year}
//           onShowYearHandler={addFilterYearHandler}
//         />

//         {props.items.map((expense) => (
//           <ItemExpense
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}
//       </Card>
//     </div>
//   );
// }

/* {props.items.map(({ id, title, amount, date }) => {
          return <ItemExpense id ={id} title={title} amount={amount} date={date} />; */
/* })} */
