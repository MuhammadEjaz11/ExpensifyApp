import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Remove_Expense, StartRemoveExpense } from '../Actions/expense'


const ExpenseListItem = (item) => {
  const { dispatch, props } = item
  const { id } = props
  let dateformate = moment(props.createDate._d).format("YYYY-MM-DD")
  
  return (


    <div>

      <h1>{props.description} </h1>
      <p>Amount:{props.amount} </p>
      <p>Create At:{dateformate} </p>
      <button onClick={() => (dispatch(StartRemoveExpense({ id })))}>Remove</button>

    </div>

  )
}





export default connect()(ExpenseListItem);