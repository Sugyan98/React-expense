import React from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails 
                id={props.id}
                amount={props.amount} 
                location={props.location} 
                title={props.title}
            />
            </Card>
        </li>
    )

}

export default ExpenseItem;