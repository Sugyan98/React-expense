import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
        setForm(false);
    }

    const[form, setForm]=useState(false);

    const showForm = () => {
        setForm(true);
    }

    const hideForm = () => {
        setForm(false);
    }

    return (
        <div className="new-expense">
            {!form && (
                <button type="button" onClick={showForm}>Add New Expense</button>
            )}
            {form && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  cancelForm={hideForm}/>
            )}
        </div>
    )
};

export default NewExpense;