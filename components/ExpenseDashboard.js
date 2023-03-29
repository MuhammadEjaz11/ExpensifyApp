import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import { Add_Expense } from '../Actions/expense';

const ExpenseDashboard = ()=> (
    <div>
        <div className='heading-section'><h1>Dashboard</h1></div>
        <ExpenseListFilter/>
        <ExpenseList/>
        
    </div>
);

export default ExpenseDashboard;