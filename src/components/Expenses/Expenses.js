import { useState } from 'react';
import ExpensesList from './ExpensesList';
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

    const filteredExpenses = props.items.filter((ex) => {
       return ex.date.getFullYear().toString() === selectedYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onSelectedYearChanged={yearChangedHandler} />
                <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        </div>
    )
}

export default Expenses;