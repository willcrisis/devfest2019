import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Context from './Context';
import Custom from './Custom';
import ContextProvider from './context/ContextProvider';

const getCurrentComponent = (currentMode) => {
  switch (currentMode) {
    case 'context':
      return Context;
    case 'custom':
      return Custom;
    case 'counter':
    default:
      return Counter;
  }
}

function App() {
  const [currentMode, setCurrentMode] = useState('counter');

  const CurrentComponent = getCurrentComponent(currentMode);

  return (
    <ContextProvider>
      <button type="button" onClick={() => setCurrentMode('counter')}>Counter Example</button>
      <button type="button" onClick={() => setCurrentMode('context')}>Context Example</button>
      <button type="button" onClick={() => setCurrentMode('custom')}>Custom Hooks Example</button>
      <div className="App">
        <CurrentComponent />
      </div>
    </ContextProvider>
  )  
}

export default App;
