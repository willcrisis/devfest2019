import { useState, useEffect } from 'react';

const fetchLazyData = () => new Promise((resolve) => {
    setTimeout(() => resolve([
        'item 1',
        'item 2',
        'item 3',
        'item 4',
        'item 5',
    ]), 2000)
});

const useLazyData = () => {
    const [data, setData] = useState([]);
    const [isFetching, setFetching] = useState(true);

    useEffect(() => {
        fetchLazyData().then(fetchedData => {
            setData(fetchedData);
            setFetching(false);
        })
    }, [])

    return [data, isFetching];
}

export default useLazyData;