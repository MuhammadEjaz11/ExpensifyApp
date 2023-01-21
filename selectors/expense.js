import moment from "moment";
//Visible Expense

export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense)=>{
        const createdAtMoment = moment(expense.createAd);
        const StartDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') :true;
        const EndDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day'):true;
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