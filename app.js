import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Add_Expense, Remove_Expense, Edit_Expense } from './Actions/expense';
import { EditTextFilter, sortByAmount, sortByDate, StartDate, EndDate } from './Actions/filters';
import { getVisibleExpenses } from './selectors/expense';
import './Style/style.scss';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import AppRoute from './Routes/AppRoute';
import './Firebase/firebase'

const store = configureStore();


// store.dispatch(Add_Expense({ description: 'water bill', note: 'water bill payment', amount: 1000, createDate: 5000 }));
// store.dispatch(Add_Expense({ description: 'gas bill', note: 'gas bill payment', amount: 5000, createDate: 1000 }));
// store.dispatch(Add_Expense({ description: 'rent', note: 'rent', amount: 150000, createDate: 6000 }));
store.dispatch(EditTextFilter(''));
const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);



const Test = (
    
    <div>
        <Provider store={store}>

            {AppRoute}
        </Provider>
    </div>
);

// setTimeout(()=>{
//     store.dispatch(EditTextFilter('Jazy'))
// },3000)

ReactDOM.render(Test, document.getElementById("app"))