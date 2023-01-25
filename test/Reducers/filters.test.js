import moment from 'moment'
import filter from '../../Reducers/filters';

test('should set-up the filter values', () => {
    const state = filter(undefined, '@@INIT');
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});
test('should set the filter to sort by amount',()=>{
    const state = filter(undefined, {typ:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set the filter to sort by date',()=>{
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filter(currentState, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
});

test('should set the text filter',()=>{
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type:'EDITTEXTFILTER',text:''};
    const state = filter(currentState, action);
    expect(state.text).toEqual(action.text)
});
test('should set the start date',()=>{
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type:'SET_START_DATE',startDate:''};
    const state = filter(currentState, action);
    expect(state.startDate).toEqual(action.startDate)
});

test('should set the end date',()=>{
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type:'SET_END_DATE',endDate:''};
    const state = filter(currentState, action);
    expect(state.endDate).toEqual(action.endDate)
});



// const filterDefaultstate = {
//     text: '',
//     sortBy: 'amount', //date or amount
//     startDate: moment().startOf('month'),
//     endDate: moment().endOf('month')
// };

// export default (state = filterDefaultstate, action) => {
//     switch (action.type) {
//         case 'EDITTEXTFILTER':
//             return { ...state, text: action.text };
//         case 'SORT_BY_DATE':
//             return { ...state, sortBy: 'date' };
//         case 'SORT_BY_AMOUNT':
//             return { ...state, sortBy: 'amount' };
//         case 'SET_START_DATE':
//             return { ...state, startDate: action.startDate };
//         case 'SET_END_DATE':
//             return { ...state, endDate: action.endDate }
//         default:
//             return state;
//     }
// };
