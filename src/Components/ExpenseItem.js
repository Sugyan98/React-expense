import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

function ExpenseItem (props){

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails 
                amount={props.amount} 
                location={props.location} 
                title={props.title}
            />
            {/* <div className="expense-item__desciption">
                <h2>{props.title}</h2>
            </div>
            <div>{props.locationofExpenditure}</div>
            <div className="expense-item__price">${props.amount}</div> */}
        </div>
    )

}

export default ExpenseItem;