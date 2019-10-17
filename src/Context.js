import React from 'react';
import ContextConsumer from './context/ContextConsumer';
import ContextHoc from './context/ContextHoc';
import ContextHook from './context/ContextHook';

export default function Context() {
    return (
        <div>
            <ContextConsumer />
            <ContextHoc />
            <ContextHook />
        </div>
    )
}