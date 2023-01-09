import React from 'react';

const ExpenseListItem = ({description,amount,createAd})=> (
  <div>
    
    <h1>{description}</h1>
    <p>Amount:{amount} Create At:{createAd}</p>
  </div>
);

export default ExpenseListItem;