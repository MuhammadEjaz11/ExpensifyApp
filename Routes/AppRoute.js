import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Routes, Link, NavLink} from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Header from '../components/Header';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Login from '../components/Login';


const AppRoute = (
    <BrowserRouter>
        <div>
            {/* <Login/> */}
            <Header/>
        </div>
        <Routes>
        <Route exact={true} path='/' element={<Login/>}/>
        <Route exact={true} path='/dashboard' element={<ExpenseDashboard/>}/>
        <Route exact={true} path='/add' element={<AddExpense/>}/>
        <Route exact={true} path='/edit' element={<EditExpense/>}/>
        <Route exact={true} path='/help' element={<Help/>}/>
        <Route exact={true} path='*' element={<NotFound/>}/>


        </Routes>

    </BrowserRouter>
)



export default AppRoute;
