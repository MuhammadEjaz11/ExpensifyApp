import React from "react";
import { connect } from "react-redux";
import { StartLogin } from "../Actions/auth";
import Header from "./Header";



const Login  = ({StartLogin})=>(

    <div>
        <button onClick={StartLogin}>Login</button>

    </div>
);

const mapDispatchToProps = (dispatch)=>(
    {
        StartLogin: ()=> dispatch(StartLogin())
    }
);


export default connect(undefined,mapDispatchToProps)(Login);