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
        <div className="movie-container" onClick={() => handleMovieClick(props.movie.id)}>
            <div className="image-container">
                <img className="movie-image" alt="movie thumbnail"
                    src={"https://image.tmdb.org/t/p/w780" + props.movie.poster_path} />
            </div>

            <div className="text-container">
                <span className="movie-name">{props.movie.title}</span><br />
                <div className="progress-bar-container">
                    <img src={heart_icon} alt="star icon" className="star-icon" />
                    <div className="progress">
                        <div className="progress-value" style={{width: props.movie.vote_average*10+"%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Movie }
export type { MovieObject }