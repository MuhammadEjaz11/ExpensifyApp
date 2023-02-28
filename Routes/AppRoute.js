import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {BrowserRouter as Router,Route, Routes, Link, NavLink} from 'react-router-dom';
import { createBrowserHistory } from "history";
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Header from '../components/Header';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRoute = (props)=>{ return(
    <Router history={history}>
        <div>
            {/* <Login/> */}
            <Header/>
        </div>
        <Routes>
        <Route exact={true} path='/' element={<Login/>}/>
        {props.isAuthenticated? <Route exact={true} path='/dashboard' element={ <ExpenseDashboard/>}/>: null}
        {props.isAuthenticated? <Route exact={true} path='/add' element={<AddExpense/>}/>: null}
        <Route exact={true} path='/edit' element={<EditExpense/>}/>
        <Route exact={true} path='/help' element={<Help/>}/>
        <Route exact={true} path='#' element={<NotFound/>}/>


        </Routes>

    </Router>
);
}

const mapStateToProps = (state)=>({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(AppRoute);

// export default AppRoute;
