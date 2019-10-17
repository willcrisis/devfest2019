import { useState } from 'react';

const REGEX_PATTERN = /\d+/g;

const useNumberState = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);
    const setNumber = (newValue = '') => {
        setValue(newValue.match(REGEX_PATTERN).join(''));
    }
    return [value ,setNumber];
}

export default useNumberState;