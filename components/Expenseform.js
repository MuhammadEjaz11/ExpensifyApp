import 'react-dates/initialize';
import React from "react";
import moment from 'moment';
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

export default class EXpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createDate: moment(),
        calenderFocused: false,
        error: ''
    };
    descriptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description });

    };
    noteChange = (e) => {
        const note = e.target.value;
        this.setState({ note });

    };
    amountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {

            this.setState({ amount });
        }
    };
    onDateChange = (createDate) => {
        if (createDate) {

            this.setState({ createDate })
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    };
    OnSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please Provide Description and Amount' }))

        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: this.state.amount,
                createDate: this.state.createDate,
            })

        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.OnSubmit}>
                    <input
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.descriptionChange}
                    />


                    <input
                        type='number'
                        placeholder='Amount'
                        onChange={this.amountChange}
                        value={this.state.amount}
                    />
                    <br />
                    <SingleDatePicker
                        date={this.state.createDate}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                    />
                    <br />

                    <textarea
                        type='text'
                        placeholder='Add your Note (Optional)'
                        value={this.state.note}
                        onChange={this.noteChange}
                    />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}