import React from 'react';
import ReactDOM from 'react-dom';
import './Style/style.scss'
import {BrowserRouter,Route, Routes} from 'react-router-dom';

const ExpenseDashboard = ()=> (
    <div>
        This is Expense Dashboard component
    </div>
);

const AddExpense = ()=> (
    <div> 
        This is Add Expense component
    </div>
);
const EditExpense = ()=> (
    <div>
        This is Edit Expense component
    </div>
);
const Help = ()=> (
    <div>
        This is Help component
    </div>
);

const routes = (
    <BrowserRouter>
    <div>
        <Routes>
        <Route path='/' component={ExpenseDashboard} exact={true}/>


        </Routes>

    </div>
    </BrowserRouter>
)









ReactDOM.render(routes, document.getElementById("app"))