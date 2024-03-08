import './ExpenseItem.css'

function ExpenseItem (props){
    console.log('hi')

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__desciption">
                <h2>{props.title}</h2>
            </div>
            <div>{props.locationofExpenditure}</div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    )

}

export default ExpenseItem;