import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios';

import { Game } from '../components/Game'
import type { GameObject } from '../components/Game';

type GamesProps = {
    children?: React.ReactNode
}

const Games = (props: GamesProps) => {
    const queryClient = useQueryClient()

    const gamesQuery = useQuery('games', () =>
        axios.get("https://fair-teal-alligator-boot.cyclic.app/games")
            .then(res => res.data) )

    return (
        <>
            { gamesQuery.data?.map((game: GameObject) => <Game key={game.id} game={game} /> ) } <br />
        </>
    )
}

export { Games }