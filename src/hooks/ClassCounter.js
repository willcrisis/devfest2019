import React, { Component } from 'react';

export default class ClassCounter extends Component {
    state = {
        counter: 0
    }

    increment() {
        this.setState(({ counter }) => ({ counter: counter + 1}))
    }

    reset() {
        this.setState({ counter: 0 });
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
                <h3>Class Counter</h3>
                <div>Current value: {counter}</div>
                <button type="button" onClick={this.increment}>Increment</button>
                <button type="button" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}