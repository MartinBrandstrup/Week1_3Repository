import React, { useState } from 'react';
import LiftingStateFahr from './LiftingStateInput'
import LiftingStateCelc from './LiftingStateOutput'

const LiftingStateParent = (props) => {
    const [state, setState] = useState();
    const update = (event) => {
        const input = event.target.value;
        setState(input);
    }
    return (
        <div>
            <h2>Ex1</h2>
            <LiftingStateFahr update={update} />
            <LiftingStateCelc input={state} />
        </div>
    );
}

export default LiftingStateParent