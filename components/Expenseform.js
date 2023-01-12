import React from "react";
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

export default class EXpenseForm extends React.Component{
    state = {
        description:'',
        note: '',
        amount:'',
        createdAt: moment(),
        calenderFocused:false
    };
    descriptionChange = (e)=>{
        const description = e.target.value;
        this.setState({description});
        
    };
    noteChange = (e)=>{
        const note = e.target.value;
        this.setState({note});
        
    };
    amountChange = (e)=>{
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)){

            this.setState({amount});
        }
    };
    onDateChange = (createdAt)=>{
        this.setState({createdAt})
    };
    onFocusChange = ({focused})=>{
        this.setState(()=>({calenderFocused:focused}))
    };
    render(){    
        return(
            <div>
                <form>
                    <input
                    type='text' 
                    placeholder='Description'
                    autoFocus
                    value={this.state.description}
                    onChange={this.descriptionChange}
                    />
                    
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    

                    />
                    <input
                    type='number' 
                    placeholder='Amount'
                    onChange={this.amountChange}
                    value={this.state.amount}
                    />
                    <br/>
                

                    <textarea 
                    type='text' 
                    placeholder='Add your Note (Optional)'
                    value={this.state.note}
                    onChange={this.noteChange}
                    />
                </form>
            </div>
        )
    }
}