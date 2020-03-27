import React, { useState } from 'react';

const LiftingStateOutput = (props) => {
return (
    <div>
        <p>Celcius: {Math.round(((props.input-32)*5/9)*10)/10}
</p>
    </div>
);}

export default LiftingStateOutput;