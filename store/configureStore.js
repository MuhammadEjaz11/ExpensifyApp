import { createStore, combineReducers } from 'redux';
import expenseReducer from '../Reducers/expense'
import filterReducer from '../Reducers/filters'

export default () => {
    const store = createStore(
        combineReducers(
            {
                expenses: expenseReducer,
                filters: filterReducer
    
            }
        )
    );

    return store;

}

