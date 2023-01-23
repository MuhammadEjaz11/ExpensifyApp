import moment from "moment";
//Visible Expense

export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense)=>{
        const createDateMoment = moment(expense.createDate);
        const StartDateMatch = startDate ? startDate.isSameOrBefore(createDateMoment,'day') :true;
        const EndDateMatch = endDate? endDate.isSameOrAfter(createDateMoment, 'day'):true;
        const TextMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return StartDateMatch && EndDateMatch && TextMatch;
    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createDate < b.createDate ? 1 : -1;
        }else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });

};