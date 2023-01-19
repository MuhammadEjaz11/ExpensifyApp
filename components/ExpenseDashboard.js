import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import { Add_Expense } from '../Actions/expense';

const ExpenseDashboard = ()=> (
    <div>
        This is Expense Dashboard component
        <ExpenseListFilter/>
        <ExpenseList/>
        
    </div>
);

export default ExpenseDashboard;