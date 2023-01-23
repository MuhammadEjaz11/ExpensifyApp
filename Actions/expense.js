import {v4 as uuidv4} from 'uuid';
export const Add_Expense = (
    {
        description = '',
        note = '',
        amount = 0,
        createDate = 0
    }={}
    )=>({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createDate
    }
});

//REMOVE_EXPENSE

export const Remove_Expense = ({ id }={}) => ({
    type: "REMOVE_EXPENSE",
    id
});

//Edit_Expense

export const Edit_Expense = (id, updates) =>({
    type: "EDIT_EXPENSE",
    id,
    updates
});