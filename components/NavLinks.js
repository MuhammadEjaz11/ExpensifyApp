import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { StartLogOut, Login, Logout } from '../Actions/auth';
import { getAuth } from '@firebase/auth';

const NavLinks = (props) => {

    return (

        <div>
            <div className='header'>
                <NavLink to='/dashboard' style={{ textDecoration: 'none' }} activeclassname='active' ><h1 className='header__heading'>Expensify</h1> </NavLink> <br />
                <button className='button-logout' onClick={props.StartLogOut}>Logout</button>
                {/* <NavLink to='/edit'>Go to EditExpense </NavLink> <br />
            <NavLink to='/help'>Go to Help </NavLink> <br /> */}
            </div>
            <div className='sub-menu'>
                <NavLink to='/dashboard' style={{ textDecoration: 'none' }} activeclassname='active' ><h3 className='header__heading dasboard'>Dashboard</h3> </NavLink> <br />
                <NavLink to='/add' style={{ textDecoration: 'none' }}><h3 className='header__sub_heading'>AddExpense</h3> </NavLink> <br />
            </div>
        </div>
    );
}

const mapDispatchtoProps = (dispatch) => ({
    StartLogOut: () => (dispatch(StartLogOut())),

    Logout: () => (dispatch(Logout())),
})

export default connect(undefined, mapDispatchtoProps)(NavLinks);
