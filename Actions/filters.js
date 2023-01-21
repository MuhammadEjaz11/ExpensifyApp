//Edit_text_filter

export const EditTextFilter = (text = '')=>({
    type: "EDITTEXTFILTER",
    text
});
//sortByDate

export const sortByDate = ()=>({
    type: 'SORT_BY_DATE'
});
export const sortByAmount = ()=>({
    type: 'SORT_BY_AMOUNT'
});
//set-start-date
export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

//set-end-date

export const setEndDate = (endDate)=>({
    type: "SET_END_DATE",
    endDate
})