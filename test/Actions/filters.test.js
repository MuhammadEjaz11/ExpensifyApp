import { EditTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../../Actions/filters'

test('check Edit text filter', () => {
    const text = '';
    const action = EditTextFilter(text);
    expect(action).toEqual({
        type: "EDITTEXTFILTER",
        text
    })
});
test('check sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
});

test('check sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
});

test('check Edit set start date', () => {
    const startDate = '';
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate
    })
});
test('check Edit set end date', () => {
    const endDate = '';
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate
    })
});


// //Edit_text_filter
// export const EditTextFilter = (text = '') => ({
//     type: "EDITTEXTFILTER",
//     text
// });
// //sortByDate

// export const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
// });
// export const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT'
// });
// //set-start-date
// export const setStartDate = (startDate) => ({
//     type: "SET_START_DATE",
//     startDate
// });

// //set-end-date

// export const setEndDate = (endDate) => ({
//     type: "SET_END_DATE",
//     endDate
// })