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
        Number(id) != data?.id? <Spinner /> : <>{JSON.stringify(data)}</>
        )} </>
    )
}

export { MoviePage }