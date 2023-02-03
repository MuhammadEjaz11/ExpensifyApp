import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import expenseReducer from '../Reducers/expense'
import filterReducer from '../Reducers/filters'
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(
        combineReducers(
            {
                expenses: expenseReducer,
                filters: filterReducer,
                
            },
            ),
            composeEnhancer(applyMiddleware(thunk))
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            );

    return store;

}

