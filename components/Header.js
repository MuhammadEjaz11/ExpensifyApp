import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { StartLogOut, Login, Logout } from '../Actions/auth';
import { getAuth } from '@firebase/auth';

const Header = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        getAuth().onAuthStateChanged((user) => {
            if (user) {
                
                console.log(user.uid)
                console.log(props.Login(user.uid))
                navigate("/dashboard")

            } else {

                navigate("/")
                props.Logout()
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
    StartLogOut: () => (dispatch(StartLogOut())),
    Login: (uid)=> (dispatch(Login(uid))),
    Logout: ()=> (dispatch(Logout())),
})

export default connect(undefined, mapDispatchtoProps)(Header);
