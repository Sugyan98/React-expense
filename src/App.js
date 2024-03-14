import React, { useState } from 'react';

// import ExpenseItem from './Components/Expenses/ExpenseItem'
import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from './Components/Expenses/Expenses'; 
// import './Components/Expenses/Expenses.css'

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Hyderabad'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: 'Bangalore' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Delhi'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Mumbai'
    },
  ];

  const [exp, setExp] = useState(expenses);
  const addExpenseHandler = (expense) => {

    // setExp((prevState)=>[...prevState, expense]);

    setExp([...exp, expense]);

  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={exp}/>
    </div>
  );
}

export default App;
