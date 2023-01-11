import React from 'react';
import { connect } from 'react-redux';
import {EditTextFilter} from '../Actions/filters'
import {sortByDate, sortByAmount} from '../Actions/filters'

const ExpenseListFilter = (props)=> (
    <div>
        <input type='text'  onChange={(e)=>{
            props.dispatch(EditTextFilter(e.target.value))
        }}/>
        <select 
        value={props.filters.sortBy}
        onChange={(e)=>{
            if (e.target.value === 'date'){
                props.dispatch(sortByDate(e.target.value))
            }else if (e.target.value === 'amount'){
                props.dispatch(sortByAmount(e.target.value))
            }
        }}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
    </div>
);
const mapStoreToProps = (state)=>{
    return {
        filters: state.filters
    }
}

export default connect(mapStoreToProps)(ExpenseListFilter);