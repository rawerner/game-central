import ApiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setErrors] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        ApiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
        .then(res => {
            setData(res.data.results);
            setLoading(false)
        })
        .catch(err => {
            if (err instanceof CanceledError) return
            setErrors(err.message);
            setLoading(false)
        })
        return () => { controller.abort() };
    }, [endpoint])

  return { data, error, isLoading}};


export default useData;