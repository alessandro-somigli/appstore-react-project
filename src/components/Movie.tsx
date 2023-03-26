import { useNavigate } from 'react-router-dom'

import '../style/components/MovieStyle.scss'
import heart_icon from '../assets/icons/heart.svg'

type MovieProps = {
    children?: React.ReactNode,
    movie: MovieObject
}

type MovieObject = {
    id: number
    title: string
    overview: string
    genre_ids: Array<number>
    backdrop_path: string
    poster_path: string
    vote_average: number
    vote_count: number
}

const Movie = (props: MovieProps) => {

    const navigate = useNavigate()

    const handleMovieClick = (movie_id: number) => navigate(movie_id.toString())

    return (
        <div className="movie-container">
            <p>{JSON.stringify(props.movie)}</p>
        </div>
    )
}

export { Movie }
export type { MovieObject }