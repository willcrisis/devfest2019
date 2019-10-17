import React from 'react';
import './Counter.css';
import ClassCounter from './hooks/ClassCounter';
import HookCounter from './hooks/HookCounter';

function Counter() {
  return (
    <div className="Counter">
      <ClassCounter />
      <HookCounter />
    </div>
  );
}

export default Counter;
