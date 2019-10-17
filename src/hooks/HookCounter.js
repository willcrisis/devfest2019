import React, { useState } from 'react';

export default function HookCounter() {
    const [counter, setCounter] = useState(0);
    function increment() { setCounter(counter + 1) };
    function reset() { setCounter(0) };

    return (
        <div>
            <h3>Hook Counter</h3>
            <div>Current value: {counter}</div>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={reset}>Reset</button>
        </div>
    );
}