import React from "react";

const ExpenseForm = () => {

    const Add = () => {
        let Title = document.getElementById('Title').value;
        let Amount = document.getElementById('Amount').value;
        let Date = document.getElementById('Date').value;

        console.log(Title, Amount, Date);
    }

    return(
        <div>
            <input type="text" id="Title"/>
            <input type="text" id="Amount"/>
            <input type="Date" id="Date"/>
            <button onClick = {Add} >Add</button>
        </div>
    )

}

export default ExpenseForm;