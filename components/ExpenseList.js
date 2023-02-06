import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expense'

const ExpenseList = (props) => {
 

    return (
        <div>
            <h1>Expense List</h1>
            <div>{props.expenses.map((item) => {
                
                return (
                    <ExpenseListItem key={item.id} props={item} />
                )
            })}</div>

        </div>
    )

}

const mapStoreToProps = (state) => {
    console.log(state)
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        // filters: state.filters
    };  
}

export default connect(mapStoreToProps)(ExpenseList);