import React from "react";
import { connect } from "react-redux";
import { StartLogin } from "../Actions/auth";
import Header from "./Header";



const Login = ({ StartLogin }) => (

    <div className="box-layout">
        <div className="main-box">
            <h1 className="main-box__title">Expensify App</h1>
            <p className="main-box__sub-title">It's time to get your expenses undercontrol</p>
            <button onClick={StartLogin}>Login</button>
        </div>

    </div>
);

const mapDispatchToProps = (dispatch) => (
    {
        StartLogin: () => dispatch(StartLogin())
    }
);


export default connect(undefined, mapDispatchToProps)(Login);