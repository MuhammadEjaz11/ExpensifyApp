import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Remove_Expense, StartRemoveExpense } from '../Actions/expense'


const ExpenseListItem = (item) => {
  const { dispatch, props } = item
  const { id } = props
  let dateformate = moment(props.createDate._d).format("YYYY-MM-DD")

  return (


    <div className='item-container'>
      

        <div className='first-item' >
          <h1 className='description'>{props.description} </h1>
          <p className='date'>Date:{dateformate} </p>

        </div>


        <div className='second-item'>
          <p className='date'>Rs. {props.amount}.00 /=</p>
          <div className='remove-container'>

            <button className='button remove-button' onClick={() => (dispatch(StartRemoveExpense({ id })))}>Remove</button>
          </div>
        </div>

      
    </div>

  )
}





export default connect()(ExpenseListItem);