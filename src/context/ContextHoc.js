import React from 'react';
import { MyContext } from './ContextProvider';

export function withContext(Component) {
    return function (props) {
        return (
            <MyContext.Consumer>
                {(value) => (
                    <Component myValue={value.myValue} {...props} />
                )}
            </MyContext.Consumer>
        )
    };
}

function ContextHoc({ myValue }) {
    return (
        <div>
            HoC value: {myValue}
        </div>
    )
}

export default withContext(ContextHoc);