import moment from "moment";
//Visible Expense
import {getVisibleExpenses} from '../../selectors/expense';
import expenses from "../../test/Fixtures/expenses";

test('should test filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const action = getVisibleExpenses(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[1]])
});

test('should test filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const action = getVisibleExpenses(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[0]])
});

test('should test filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = getVisibleExpenses(expenses,filters);
    expect(action).toEqual([expenses[1],expenses[2],expenses[0]])
});




// export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense) => {
//         const createDateMoment = moment(expense.createDate);
//         const StartDateMatch = startDate ? startDate.isSameOrBefore(createDateMoment, 'day') : true;
//         const EndDateMatch = endDate ? endDate.isSameOrAfter(createDateMoment, 'day') : true;
//         const TextMatch = expense.description.toLowerCase().includes(text.toLowerCase());

//         return StartDateMatch && EndDateMatch && TextMatch;
//     }).sort((a, b) => {
//         if (sortBy === 'date') {
//             return a.createDate < b.createDate ? 1 : -1;
//         } else if (sortBy === 'amount') {
//             return a.amount < b.amount ? 1 : -1;
//         }
//     });

// };