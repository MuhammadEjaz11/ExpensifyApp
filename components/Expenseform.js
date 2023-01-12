import React from "react";
import moment from 'moment';

export default class EXpenseForm extends React.Component{
    state = {
        description:'',
        note: '',
        amount:''
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