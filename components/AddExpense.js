import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { startAddExpense } from '../Actions/expense';
import EXpenseForm from './Expenseform';

const AddExpense = (props)=> (
    <div> 
        
        This is Add Expense component
        <EXpenseForm onSubmit={(expense)=>{
            props.dispatch(startAddExpense(expense));
        }}/>
    </div>
);

export default connect() (AddExpense);