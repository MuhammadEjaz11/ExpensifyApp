import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const NotFound = ()=> (
    <div>
        404!
        <Link to='/'>Go to Home </Link> <br/>
    </div>
);

export default NotFound;