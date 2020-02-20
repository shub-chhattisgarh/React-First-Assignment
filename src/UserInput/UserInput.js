import React, {Component} from 'react';
import './UserInput.css';

class UserInput extends Component{
    state = {
        input : "",
    }


    render(){
        return (
            <div className='UserInput'>
                <input type='text' value={this.state.input} placeholder='Enter text here' />
            </div>
        );
    }
}


export default UserInput;