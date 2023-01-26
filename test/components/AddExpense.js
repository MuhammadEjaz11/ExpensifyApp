import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { Add_Expense } from '../Actions/expense';
import EXpenseForm from './Expenseform';

const AddExpense = (props)=> (
    <div> 
        
        This is Add Expense component
        <EXpenseForm onSubmit={(expense)=>{
            props.dispatch(Add_Expense(expense));
        }}/>
    </div>
);

export default connect() (AddExpense);