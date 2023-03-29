import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { startAddExpense } from '../Actions/expense';
import EXpenseForm from './Expenseform';

const AddExpense = (props) => (
    <div>

        <div className='heading-section'><h1>Add Expense</h1></div>
        <div className='form-container'>
            <EXpenseForm onSubmit={(expense) => {
                props.dispatch(startAddExpense(expense));
            }} />
        </div>
    </div>
);


export default connect()(AddExpense);