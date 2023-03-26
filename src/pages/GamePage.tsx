import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

import { Spinner } from '../components/Spinner'

type GamePageProps = {
    children?: React.ReactNode
}

type GameGenre = {
    id: number,
    name: string
}
type GameCover = {
    id: number,
    image_id: string
}
type GameScreenshot = {
    id: number,
    image_id: string
}
type GameTheme = {
    id: number,
    name: string
}
type GameQueryObject = {
    id: number,
    name: string,
    version_title: string,
    storyline: string,
    summary: string,
    total_rating: number,
    total_rating_count: number,
    screenshots: Array<GameScreenshot>,
    genres: Array<GameGenre>,
    cover: GameCover,
    themes: Array<GameTheme>
}

const GamePage = (props: GamePageProps) => {
    let { id } = useParams()

    const queryClient = useQueryClient()

    const gameQuery = useQuery('game', () =>
        axios.get("https://fair-teal-alligator-boot.cyclic.app/games/" + id)
            .then(res => res.data) )

    const data: GameQueryObject = (gameQuery.data? gameQuery.data[0] : undefined) as GameQueryObject

    return (
        <>
            {
                (gameQuery.isLoading? <Spinner /> :
                Number(id) != data?.id? <Spinner /> :
                    <div>
                        {data.summary}
                    </div>
                )
            }
        </>
    )
}

export { GamePage }