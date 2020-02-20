import React, {Component} from 'react';
import './UserInput.css';

class UserInput extends Component{
    state = {
        input : "",
    }


    render(){
        return (
            <div>
                <input type='text' value={this.state.input} />
            </div>
        );
    }
}


export default UserInput;