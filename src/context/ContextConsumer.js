import React from 'react';
import { MyContext } from './ContextProvider';

export default function ContextConsumer() {
    return (
        <MyContext.Consumer>
            {(value) => (
                <div>
                    Consumer value: {value.myValue}
                </div>
            )}
        </MyContext.Consumer>
    );
}