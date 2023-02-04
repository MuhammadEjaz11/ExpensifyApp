import {v4 as uuidv4} from 'uuid';
import {app, database} from '../Firebase/firebase';
import { ref, remove, set, update,get,child,onValue } from "firebase/database";
import moment from'moment';
import expense from '../Reducers/expense';


export const Add_Expense = (expense)=>({
    type: "ADD_EXPENSE",
    expense,
});

export const startAddExpense = (expenseData  = {})=>{
    return (dispatch)=>{
            
        const {
            id=uuidv4(),
            description = '',
            note = '',
            amount = 0,
            createDate = 0,
            time=0
        } = expenseData;
        const expense = {
            id,
            description,
            note,
            amount,
            createDate:moment(createDate._d).format("YYYY-MM-DD")};
        
        console.log(createDate._d)
        set(ref(database,'expense/'+expense.id),{description, note,amount,createDate}).then(()=>{
            dispatch(Add_Expense({
                ...expense
            }))

        })

    }
}

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