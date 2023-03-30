import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expense'

const ExpenseList = (props) => {

    console.log(props)
    return (
        <div>

            <div className='item-heading'>
                <h2>Expenses</h2>
                <h2>Amount</h2>
            </div>
            {props.expenses.length !== 0 ?
                <div>
                    {props.expenses.map((item) => {

                        return (
                            <ExpenseListItem key={item.id} props={item} />
                        )
                    })}

                </div>
            :<div className='item-container'><p>No Expense</p></div>}

        </div>
    )

}

const mapStoreToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        // filters: state.filters
    };
}

export default connect(mapStoreToProps)(ExpenseList);