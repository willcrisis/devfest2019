import React, { createContext } from 'react';

export const MyContext = createContext({});

export default function ContextProvider({ children }) {
    const value = {
        myValue: 'My value'
    }
    
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}