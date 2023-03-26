import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

import { Spinner } from '../components/Spinner'
import heart_icon from '../assets/icons/heart.svg'

import '../style/pages/MoviePageStyle.scss'

type MovieGenre = {
    id: number
    name: string
}

type MovieQueryObject = {
    id: number
    title: string
    overview: string
    genres: Array<MovieGenre>
    backdrop_path: string
    poster_path: string
    vote_average: number
    vote_count: number
    tagline: string
    runtime: number
    release_date: string
}

type MoviePageProps = {
    children?: React.ReactNode
}

const MoviePage = (props: MoviePageProps) => {
    let { id } = useParams()

    const queryClient = useQueryClient()

    const movieQuery = useQuery('movie', () =>
        axios.get("https://fair-teal-alligator-boot.cyclic.app/movies/" + id)
            .then(res => res.data) )

    const data: MovieQueryObject = (movieQuery.data? movieQuery.data : undefined) as MovieQueryObject

    return (<> {
        ( movieQuery.isLoading? <Spinner /> :
        Number(id) != data?.id? <Spinner /> : 
            <div className="movie-page">
                <div className="page-header">
                    <div className="header-info-container">
                        <span className="page-title">{data.title}</span>
                        <h3 className="company-link">
                            <span>{data.release_date.slice(0, 4)} | {data.runtime} minutes</span>
                        </h3>
                        <div className="ratings-container">
                            <div className="progress-bar-container">
                                <img src={heart_icon} alt="star icon" className="star-icon" />
                                <div className="progress">
                                    <div className="progress-value" style={{width: data.vote_average*10+"%"}}></div>
                                </div>
                            </div>
                            <span className="ratings-counter">&nbsp;- ratings: {data.vote_count}</span>
                        </div>
                    </div>
                    <div className="movie-image-container">
                        <img className="movie-image" alt="movie thumbnail"
                            src={"https://image.tmdb.org/t/p/w780" + data.poster_path} />
                    </div>
                </div>
                <div className="page-content">
                    <div className="page-tags">
                        { (data.genres.map((genre: MovieGenre) => <button key={genre.id}>{genre.name}</button>)) }
                    </div>

                    <div className="content-info">

                        { (data.tagline? 
                            <div className="content-container">  
                                <p className="content-text">{data.tagline}</p>
                            </div> : "") }
                        
                        { (data.overview? 
                            <div className="content-container">
                                <span className="content-title">Movie Overview:</span>
                                <p className="content-text">{data.overview}</p>
                            </div> : "") }
                    </div>
                </div>
            </div>
        )} </>
    )
}

export { MoviePage }