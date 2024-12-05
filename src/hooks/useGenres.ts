import ApiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setErrors] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        ApiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
        .then(res => {
            setGenres(res.data.results);
            setLoading(false)
        })
        .catch(err => {
            if (err instanceof CanceledError) return
            setErrors(err.message);
            setLoading(false)
        })
        return () => { controller.abort() };
    }, [])

  return { genres, error, isLoading}};


export default useGenres;