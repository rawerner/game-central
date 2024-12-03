import { useEffect, useState } from 'react'
import ApiClient from '../services/api-client';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setErrors] = useState('');

    useEffect(() => {
        ApiClient.get<FetchGamesResponse>('/games')
        .then(res => {
            setGames(res.data.results);
        })
        .catch(err => {
            setErrors(err.message);
        })
    }, [])

  return (
    <>
    {error && <div>{error}</div>}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
 }

export default GameGrid