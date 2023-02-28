import React from 'react';
import {connect} from 'react-redux';
import {Route, Routes} from 'react-router-dom';


export const PrivateRoute = (props)=>{
    <Routes>
        <Route {...props}/>
    </Routes>
}

const mapStateToProps = ()=>({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);