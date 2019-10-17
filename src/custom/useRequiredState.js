import { useState } from 'react';

const useRequiredState = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const isValid = !!value;
    return [value, setValue, isValid];
}

export default useRequiredState;