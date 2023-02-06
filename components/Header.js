import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Routes, Link, NavLink} from 'react-router-dom';


const Header = ()=> (
    <div> 
        <h1>Header</h1> <br/>
        <NavLink to='/dashboard' activeclassname='active' >Go to Dashboard </NavLink> <br/>
        <NavLink to='/add'>Go to AddExpense </NavLink> <br/>
        <NavLink to='/edit'>Go to EditExpense </NavLink> <br/>
        <NavLink to='/help'>Go to Help </NavLink> <br/>
    </div>
);

export default Header;