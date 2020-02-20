import React from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const app = props => {
    return (
        <div>
            <UserOutput/>
            <UserInput/>
        </div>
    );
}

export default app;