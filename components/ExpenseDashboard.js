import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboard = ()=> (
    <div>
        This is Expense Dashboard component
        <ExpenseListFilter/>
        <ExpenseList/>
        
    </div>
);

export default ExpenseDashboard;