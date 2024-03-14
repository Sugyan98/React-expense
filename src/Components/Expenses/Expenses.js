import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'

const Expenses = (props) => {

    const result = [];

    for(let i=0; i<props.items.length ; i++){
        result.push(<ExpenseItem
            id={props.items[i].id}
            title={props.items[i].title}
            amount={props.items[i].amount} 
            date={props.items[i].date}
            location={props.items[i].location}
        />)
    }

    const[filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => { 
        setFilteredYear(selectedYear);
     }

    // props.items.forEach(element => {

    //     result.push(<ExpenseItem
    //     id={element.id}
    //     title={element.title}
    //     amount={element.amount} 
    //     date={element.date}
    //     location={element.location}
    //     />)

    // })

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {result}
        </Card>
    )

}

export default Expenses;