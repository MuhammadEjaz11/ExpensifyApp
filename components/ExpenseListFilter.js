import React from 'react';
import { connect } from 'react-redux';
import {EditTextFilter} from '../Actions/filters'

const ExpenseListFilter = (props)=> (
    <div>
        <input type='text'  onChange={(e)=>{
            props.dispatch(EditTextFilter(e.target.value))
        }}/>
    </div>
);
const mapStoreToProps = (state)=>{
    return {
        filters: state.filters
    }
}

export default connect(mapStoreToProps)(ExpenseListFilter);