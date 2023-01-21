import React from 'react';
import { connect } from 'react-redux';
import { EditTextFilter } from '../Actions/filters'
import { sortByDate, sortByAmount, setStartDate, setEndDate } from '../Actions/filters'
import {DateRangePicker} from 'react-dates'


class ExpenseListFilter extends React.Component {
    state = {
        calenderFocused: null,

    };
    onDatesChange = ({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))

    };
    onFocusChange = (calenderFocused) =>{
        this.setState(()=>({calenderFocused}))
    }
    render() {
        return (
            <div>
                <input type='text' onChange={(e) => {
                    this.props.dispatch(EditTextFilter(e.target.value))
                }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate(e.target.value))
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount(e.target.value))
                        }
                    }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

            <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            showClearDates={true}
            />
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStoreToProps)(ExpenseListFilter);