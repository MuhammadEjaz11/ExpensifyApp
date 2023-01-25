import expenses from '../../Reducers/expense';
import moment  from 'moment'

const expensesData = [
    {
        id: '1',
        description: 'gum',
        note: '',
        amount: 195,
        createDate: 0
    },
    {
        id: '2',
        description: 'rent',
        note: '',
        amount: 109500,
        createDate: moment(0).subtract(4,'days').valueOf()
    },
    {
        id: '3',
        description: 'credit card',
        note: '',
        amount: 4500,
        createDate: moment(0).add(4,'days').valueOf()
    }
];
// test('should check the add expese action',()=>{
//     const action = {
//         type:"ADD_EXPENSE",
//         expense,
//     }
//     const state = expenses(undefined,action);
//     expect(state).toEqual({
//         ...state,
//         expense
//     })
// })

test('should set-up the default state',()=>{
    const action = {
        type:"ADD_EXPENSE" 
    }
    const state = expenses(undefined,action);
    expect(state).toEqual([])
});

test('should set the remove expense',()=>{
    const action = {
        type:"REMOVE_EXPENSE",
        id:expensesData[1].id, 
    }
    const state = expenses(expensesData,action);
    expect(state).toEqual([expensesData[0],expensesData[2]])
});









export default (state = expensesDefaultState, action) => {
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