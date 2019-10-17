import React from 'react';
import cx from 'classnames'; 
import './Custom.css';
import useRequiredState from './custom/useRequiredState';
import useNumberState from './custom/useNumberState';
import useLazyData from './custom/useLazyData';

const Custom = () => {
    const [number, setNumber] = useNumberState(10);
    const [required, setRequired, isValid] = useRequiredState('default value');
    const [data, isFetching] = useLazyData();

    return (
        <div className="Custom">
            <h1>Custom Hooks</h1>
            <div className="field">
                <label>This field only accepts numbers</label>
                <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <div className="field">
                <label>Required field</label>
                <input 
                    type="text" 
                    value={required} 
                    onChange={e => setRequired(e.target.value)} 
                    className={cx({required: !isValid})}
                />
                {!isValid && (
                    <sub className="required-label">This field is required</sub>
                )}
            </div>
            <div className="field">
                <label>Lazy list</label>
                {isFetching && <span>Loading...</span>}
                {!isFetching && (
                    <ul>
                        {data.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Custom;