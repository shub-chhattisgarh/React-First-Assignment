import React, {Component} from 'react';
import './UserInput.css';

class UserInput extends Component{

    render(){
        return (
            <div className='UserInput'>
                <input type='text' value={this.props.value.output[this.props.selected]} placeholder='Enter text here' onChange={this.props.change} />
            </div>
        );
    }
}


export default UserInput;