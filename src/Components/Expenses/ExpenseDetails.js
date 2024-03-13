import React from 'react';
import './ExpenseItem.css'

const ExpenseDetails = (props) => {
const classes="expense-item__description " + props.id;
    return (
    
        <div className={classes}>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    
    )

}

export default ExpenseDetails;