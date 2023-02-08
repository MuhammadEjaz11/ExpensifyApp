import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { StartLogOut } from '../Actions/auth';
import { getAuth } from '@firebase/auth';

const Header = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        getAuth().onAuthStateChanged((user) => {
            if (user) {

                navigate("/dashboard")

            } else {

                navigate("/")

                console.log('logout')
            }
        });

    }, [])
    return (

        <div>
            <h1>Header</h1> <br />
            <NavLink to='/dashboard' activeclassname='active' >Go to Dashboard </NavLink> <br />
            <NavLink to='/add'>Go to AddExpense </NavLink> <br />
            <NavLink to='/edit'>Go to EditExpense </NavLink> <br />
            <NavLink to='/help'>Go to Help </NavLink> <br />
            <button onClick={props.StartLogOut}>Logout</button>
        </div>
    );
}

const mapDispatchtoProps = (dispatch) => ({
    StartLogOut: () => (dispatch(StartLogOut()))
})

export default connect(undefined, mapDispatchtoProps)(Header);
