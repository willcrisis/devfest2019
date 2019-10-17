import React, { useContext } from 'react';
import { MyContext } from './ContextProvider';

export default function ContextHook() {
    const { myValue } = useContext(MyContext);

    return (
        <div>
            Hook value: {myValue}
        </div>
    )
}
