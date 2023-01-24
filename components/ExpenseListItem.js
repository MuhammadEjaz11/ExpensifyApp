import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Remove_Expense } from '../Actions/expense'


const ExpenseListItem = (item) => {
  const { dispatch, props } = item
  console.log(props)
  const { id } = props
  let dateformate = moment(props.createDate._d).format("YYYY-MM-DD")
  
  return (


    <div>

      <h1>{props.description} </h1>
      <p>Amount:{props.amount} </p>
      <p>Create At:{dateformate} </p>
      <button onClick={() => (dispatch(Remove_Expense({ id })))}>Remove</button>

    </div>

  )
}





export default connect()(ExpenseListItem);