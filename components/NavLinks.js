import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { StartLogOut, Login, Logout } from '../Actions/auth';
import { getAuth } from '@firebase/auth';

const NavLinks = (props) => {

    return (

        <div>
            <h1>NavLinks</h1> <br />
            <NavLink to='/dashboard' activeclassname='active' >Go to Dashboard </NavLink> <br />
            <NavLink to='/add'>Go to AddExpense </NavLink> <br />
            <NavLink to='/edit'>Go to EditExpense </NavLink> <br />
            <NavLink to='/help'>Go to Help </NavLink> <br />
            <button onClick={props.StartLogOut}>Logout</button>
        </div>
    );
}

const mapDispatchtoProps = (dispatch) => ({
    StartLogOut: () => (dispatch(StartLogOut())),
    
    Logout: ()=> (dispatch(Logout())),
})

export default connect(undefined, mapDispatchtoProps)(NavLinks);
