import React from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

const app = props => {
    return (
        <div className='App'>
            <UserOutput/>
            <UserInput/>
        </div>
    );
}

export default app;