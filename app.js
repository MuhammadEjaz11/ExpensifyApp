import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Add_Expense, Remove_Expense, Edit_Expense, StartSetExpense, Set_Expense } from './Actions/expense';
import { EditTextFilter, sortByAmount, sortByDate, StartDate, EndDate } from './Actions/filters';
import { getVisibleExpenses } from './selectors/expense';
import './Style/style.scss';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import AppRoute from './Routes/AppRoute';
import './Firebase/firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup,onAuthStateChanged } from "firebase/auth";


export const store = configureStore();


// store.dispatch(Add_Expense({ description: 'water bill', note: 'water bill payment', amount: 1000, createDate: 5000 }));
// store.dispatch(Add_Expense({ description: 'gas bill', note: 'gas bill payment', amount: 5000, createDate: 1000 }));
// store.dispatch(Add_Expense({ description: 'rent', note: 'rent', amount: 150000, createDate: 6000 }));
// store.dispatch(EditTextFilter(''));


const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const Test = (

    <div>
        <Provider store={store}>

            {AppRoute}
        </Provider>
    </div>
);
getAuth().onAuthStateChanged((user)=>{
    if(user){
        console.log('Login')
    }else{

        console.log('Logout')
    }
})

store.dispatch(StartSetExpense());
ReactDOM.render(Test, document.getElementById("app"));




