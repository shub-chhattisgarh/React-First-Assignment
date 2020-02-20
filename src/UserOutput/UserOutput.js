import React from 'react';
import './UserOutput.css';

const userOutput = props => {

    return (
        <div className='UserOutput'>
            <p className={props.selected === 0? "selected": ""} onClick={event => props.click(props.block, 0)}>{props.value.output[2 * props.block]}</p>
            <p className={props.selected === 1? "selected": ""} onClick={event => props.click(props.block, 1)}>{props.value.output[2 * props.block + 1]}</p>
        </div>
    );

}

export default userOutput;