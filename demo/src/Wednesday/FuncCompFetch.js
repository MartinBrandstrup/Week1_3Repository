import React, { useState } from 'react';

const FuncCompList = (props) => {
    const [state, setState] = useState();
    const handleChange = (event) => {
        setState(event.target.value)

    }
    return (
        <div>
            <h2>FuncCompList (Ex2)</h2>
            <p>
                {state}
            </p>
                <input type="text" value={state} onChange={handleChange} />
        </div>
    );
}

export default FuncCompList;