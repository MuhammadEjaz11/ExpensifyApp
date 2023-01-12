import React from 'react';
import {connect} from 'react-redux';
import {Remove_Expense} from '../Actions/expense'

const ExpenseListItem = ({dispatch,id, description,amount,createAd})=> (

  <>
    
     <h1>{description} </h1>
     <p>Amount:{amount} Create At:{createAd} </p>
    <button onClick={()=>{dispatch(Remove_Expense({id}))}}>Remove</button>
    
  </>
);

export default connect()(ExpenseListItem);