import { createStore, combineReducers } from "redux";
import {v4 as uuidv4} from 'uuid';

//Add_Expense
const Add_Expense = (
    {
        description = '',
        note = '',
        amount = 0,
        createAd = 0
    }={}
    )=>({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createAd
    }
});

//REMOVE_EXPENSE

const Remove_Expense = ({ id }={}) => ({
    type: "REMOVE_EXPENSE",
    id
});

//Edit_Expense

const Edit_Expense = (id, updates) =>({
    type: "EDIT_EXPENSE",
    id,
    updates
});
//Edit_text_filter

const EditTextFilter = (text = '')=>({
    type: "EDITTEXTFILTER",
    text
});
//sortByDate

const sortByDate = ()=>({
    type: 'SORT_BY_DATE'
});
const sortByAmount = ()=>({
    type: 'SORT_BY_AMOUNT'
});
//set-start-date
const StartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

//set-end-date

const EndDate = (endDate)=>({
    type: "SET_END_DATE",
    endDate
})

const expensesDefaultState = [];

const expenseReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return(
                [...state, action.expense]
            );
        case "REMOVE_EXPENSE" : 
            return state.filter(({id})=>id !== action.id);
        case "EDIT_EXPENSE" : 
            return  state.map((expense)=>{
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense
                }
            })
        default:
            return state;
    }
};

const filterDefaultstate = {
    text: '',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterDefaultstate, action) => {
    switch (action.type) {
        case 'EDITTEXTFILTER':
            return {...state,text: action.text};
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
            case 'SET_END_DATE':
                return {...state, endDate: action.endDate}
        default:
            return state;
    }
};



const store = createStore(
    combineReducers(
        {
            expenses: expenseReducer,
            filters: filterReducer

        }
    )
);

//Visible Expense

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense)=>{
        const StartDateMatch = typeof startDate !== 'number' || expense.createAd >= startDate;
        const EndDateMatch = typeof endDate !== 'number' || expense.createAd <= endDate
        const TextMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return StartDateMatch && EndDateMatch && TextMatch;
    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createAd < b.createAd ? 1 : -1;
        }else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });

};

store.subscribe(()=>{
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(VisibleExpenses);
});

const expenseOne = store.dispatch(Add_Expense({description: 'January rent',note: 'this was my final payment',amount: 100, createAd: 500}))
const expenseTwo = store.dispatch(Add_Expense({description: 'coffee',note: 'starbucks',amount: 600, createAd: 700}))
// store.dispatch(Remove_Expense({id: expenseOne.expense.id}));
// store.dispatch(Edit_Expense(expenseTwo.expense.id, {amount: 400}));

// store.dispatch(EditTextFilter('rent'));
store.dispatch(sortByDate('date'));
// store.dispatch(sortByAmount('amount'));

// store.dispatch((StartDate(125)));
// store.dispatch((EndDate(1025)));

const demo = {
    expenses: [{
        id: 'assadd',
        description: 'January rent',
        note: 'this was my final payment',
        amount: 1000,
        createAd: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

