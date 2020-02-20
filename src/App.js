import React, {useState} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

const App = props => {
    const [selectedState, setSelectedState] = useState({
        selected: 0,
    });


    const [outputState, setOutputState] = useState({
        output : [
            "Paragraph 1",
            "Paragraph 2",
            "Paragraph 3",
            "Paragraph 4"
        ]
    });

    const blockSelected = Math.floor(selectedState.selected/ 2);
    const paraSelected = selectedState.selected % 2;


    const userClickHandler = (block, para) => {
        let selected = 2 * block + para;
        setSelectedState({
            selected: selected
        });
    };

    const userTypeHandler = event => {
        let output = [...outputState.output];
        output[selectedState.selected] = event.target.value;
        setOutputState(
            {
                output: output
            }
        );
    };

    return (
        <div className='App'>
            <UserOutput selected={blockSelected === 0? paraSelected: -1} block={0} click={userClickHandler} value={outputState}/>
            <UserOutput selected={blockSelected === 1? paraSelected: -1} block={1} click={userClickHandler} value={outputState}/>
            <UserInput selected={selectedState.selected} value={outputState} change={userTypeHandler}/>
        </div>
    );
}

export default App;