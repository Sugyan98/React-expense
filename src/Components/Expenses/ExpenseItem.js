import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    let [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
    };

    const [amount, setAmount] = useState(props.amount)

    const updatePrice = () => {
        setAmount('100');
    }

    const removeItem = (e) => {
        e.target.parentElement.remove()
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails 
                id={props.id}
                amount={amount} 
                location={props.location} 
                title={title}
            />

            {/* <div className="expense-item__desciption">
                <h2>{props.title}</h2>
            </div>
            <div>{props.locationofExpenditure}</div>
            <div className="expense-item__price">${props.amount}</div> */}

            <button onClick = {removeItem} >Delete</button>
            <button onClick = {clickHandler}>Change Title</button>
            <button onClick = {updatePrice}>Update Price</button>
        </Card>
    )

}

export default ExpenseItem;