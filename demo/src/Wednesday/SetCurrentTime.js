import React from 'react';

class SetCurrentTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now: ""
        };
    }

    render() {
        let today = new Date();
        return (
            <div>
                <h2>SetCurrentTime (Ex1)</h2>
                <p>Time has been updated to {this.state.now}</p>
                <button onClick={
                    () => this.setState({ now: today.getHours() + ":" + today.getMinutes() })
                }>Click to update Time</button>
            </div>
        );
    }
}

export default SetCurrentTime;