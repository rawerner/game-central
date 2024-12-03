import { useEffect, useState } from 'react'
import ApiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}
export const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setErrors] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        ApiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
        .then(res => {
            setGames(res.data.results);
        })
        .catch(err => {
            if (err instanceof CanceledError) return
            setErrors(err.message);
        })
        return () => { controller.abort() };
    }, [])

  return { games, error }};
