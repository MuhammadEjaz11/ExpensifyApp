
import { Add_Expense, Remove_Expense, Edit_Expense } from '../../Actions/expense'

test('check the remove aexpense action is working fine', () => {
    const action = Remove_Expense({ id: 'abc' })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: 'abc'
    });
});

test('check the edit expense', () => {
    const action = Edit_Expense('asd', { note: 'new value' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: 'asd',
        updates: {
            note: 'new value',
        },
    })
});

test('should test the add expense with provided value', () => {
    const ExpenseData = {
        description: 'rent',
        note: 'test',
        amount: 10,
        createDate: 100
    }
    const action = Add_Expense(ExpenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...ExpenseData,
            id: expect.any(String),


        }
    })
});

test('should test the add expense with default value', () => {
    const action = Add_Expense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description:expect.any(String),
            note: expect.any(String),
            amount: expect.any(Number),
            createDate: expect.any(Number)


        }
    })
})



// import {v4 as uuidv4} from 'uuid';
// export const Add_Expense = (
//     {
//         description = '',
//         note = '',
//         amount = 0,
//         createDate = 0
//     }={}
//     )=>({
//     type: "ADD_EXPENSE",
//     expense: {
//         id: uuidv4(),
//         description,
//         note,
//         amount,
//         createDate
//     }
// });

// //REMOVE_EXPENSE

// export const Remove_Expense = ({ id }={}) => ({
//     type: "REMOVE_EXPENSE",
//     id
// });

// //Edit_Expense

// export const Edit_Expense = (id, updates) =>({
//     type: "EDIT_EXPENSE",
//     id,
//     updates
// });