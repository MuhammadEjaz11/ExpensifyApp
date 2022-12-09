import React from 'react';
import ReactDOM from 'react-dom';
import './Style/style.scss'
import {BrowserRouter,Route, Routes, Link, NavLink} from 'react-router-dom';

const Header = ()=> (
    <div> 
        <h1>Header</h1> <br/>
        <NavLink to='/' activeClassName='active' >Go to Dashboard </NavLink> <br/>
        <NavLink to='/add'>Go to AddExpense </NavLink> <br/>
        <NavLink to='/edit'>Go to EditExpense </NavLink> <br/>
        <NavLink to='/help'>Go to Help </NavLink> <br/>
    </div>
);

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
const NotFound = ()=> (
    <div>
        404!
        <Link to='/'>Go to Home </Link> <br/>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header/>
        </div>
        <Routes>
        <Route path='/' element={<ExpenseDashboard/>}/>
        <Route path='/add' element={<AddExpense/>}/>
        <Route path='/edit' element={<EditExpense/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='*' element={<NotFound/>}/>


        </Routes>

    </BrowserRouter>
)









ReactDOM.render(routes, document.getElementById("app"))