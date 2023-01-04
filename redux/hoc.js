import ReactDOM from "react-dom";
import React from "react";


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this info is {props.info}</p>

    </div>
);


const requiresAuth = (WrappedComponent) => {
    return (props)=>(
        <div>
            <p>this is high order component</p>
            {props.isAuth ? <WrappedComponent {...props}/>: <p>Please Log In</p>}
        
        </div>
    )
};

const HighOrderComponent = requiresAuth(Info)

ReactDOM.render(<HighOrderComponent isAuth={true} info='this is detail'/>, document.getElementById('app'))