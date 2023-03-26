import { useQuery } from 'react-query'
import axios from 'axios';

import { Game } from '../components/Game'
import { Spinner } from '../components/Spinner';

import type { GamesQueryObject } from '../components/Game'

type GamesProps = {
    children?: React.ReactNode
}

const Games = (props: GamesProps) => {
    const gamesQuery = useQuery('games', () =>
        axios.get("https://fair-teal-alligator-boot.cyclic.app/games")
            .then(res => res.data) )

    if (gamesQuery.isLoading) {}

    return (
        <>
            {
                (gamesQuery.isLoading? <Spinner /> : 
                    gamesQuery.data?.map((game: GamesQueryObject) => <Game key={game.id} game={game} /> ))
            }
        </>
    )
}

export { Games }