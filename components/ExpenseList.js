import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import {getVisibleExpenses} from '../selectors/expense'

const ExpenseList = (props)=> (
    <div> 
       <h1>Expense List</h1>
       <div>{props.expenses.map((item)=>{
        return (
            <ExpenseListItem key={item.id} {...item}/>
        )
       })}</div>

    </div>
);

const mapStoreToProps = (state)=>{
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters),
        filters: state.filters
    };
}

export default connect(mapStoreToProps)(ExpenseList);