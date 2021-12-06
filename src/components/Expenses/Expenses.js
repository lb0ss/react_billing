import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangedHandler = (year) => {
        // let year = selectedYear;
        setSelectedYear(year);
        console.log(`selected year from state: ${selectedYear}`);
    }
    return (
        <div>
            <ExpensesFilter selected={selectedYear} onSelectedYearChanged={yearChangedHandler}/>
            <Card className="expenses">
            {/* <h2>Let's get started!</h2> */}
            {
                props.items.map(expense => 
                <ExpenseItem key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}/>)
            }
            </Card>
        </div>
    )
}

export default Expenses;