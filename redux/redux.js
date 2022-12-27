import { Action } from '@remix-run/router';
import {createStore} from 'redux';
import {uuid} from 'uuid';


const countReducer = (state = {count:0}, action)=>{
    switch (action.type) {
        case 'INCREMENT': 
        const incrementby = typeof action.incrementby === 'number' ? action.incrementby : 1
        return {count: state.count + incrementby };

        case 'DECEREMENT': 
        const decrementby = typeof action.decrementby === 'number' ? action.decrementby : 1
        return {count: state.count - decrementby } 

        case 'RESET': 
        
        return {count: 0 } 
    
        default: return state;
    }
};
const store = createStore(countReducer);

const incrementCount = ({incrementby = 1}={})=>{
    return (
        {
            type: 'INCREMENT',
            incrementby
        }
    )
};

const decrementCount = ({decrementby = 1}={})=>{
    return (
        {
            type: 'DECEREMENT',
            decrementby
        }
    )
};
const resetCount = ()=>{
    return (
        {
            type: 'RESET'
        }
    )
};


const unsubscribe = store.subscribe(()=>{

    console.log(store.getState())
});

//Actions -- than an object that gets sent to the store

//I'd like to increament the count
store.dispatch(incrementCount({incrementby:10}));

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementby:10}));


//i'd like to reset the count to zero