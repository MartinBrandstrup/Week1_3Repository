import React, { useState } from 'react';

const LiftingStateInput = (props) => {
return (
    <div>
        Fahrenheit: <input type="Number" onChange={props.update} />
    </div>
);}

export default LiftingStateInput;