import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    const removeItem = (e) => {
        e.target.parentElement.remove()
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails 
                id={props.id}
                amount={props.amount} 
                location={props.location} 
                title={props.title}
            />

            {/* <div className="expense-item__desciption">
                <h2>{props.title}</h2>
            </div>
            <div>{props.locationofExpenditure}</div>
            <div className="expense-item__price">${props.amount}</div> */}

            <button onClick = {removeItem} >Delete</button>
        </Card>
    )

}

export default ExpenseItem;