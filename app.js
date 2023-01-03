import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Add_Expense, Remove_Expense, Edit_Expense } from './Actions/expense';
import { EditTextFilter, sortByAmount, sortByDate, StartDate, EndDate } from './Actions/filters';
import { getVisibleExpenses } from './selectors/expense';
import './Style/style.scss';
import {BrowserRouter,Route, Routes, Link, NavLink} from 'react-router-dom';
import AppRoute from './Routes/AppRoute';
const store = configureStore();


store.dispatch(Add_Expense({description: 'water bill',note: 'water bill payment',amount: 1000, createAd: 500}));
store.dispatch(Add_Expense({description: 'gas bill',note: 'gas bill payment',amount: 5000, createAd: 100}));
store.dispatch(EditTextFilter('bill'));
const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log (VisibleExpenses)




ReactDOM.render(AppRoute, document.getElementById("app"))