import { useQuery } from 'react-query'
import axios from 'axios'

import '../style/pages/MoviesStyle.scss'

import { Movie, MovieObject } from '../components/Movie'
import { Spinner } from '../components/Spinner'

type MoviesProps = {
    children?: React.ReactNode
}

const Movies = (props: MoviesProps) => {
    const moviesQuery = useQuery('movies', () =>
    axios.get("https://fair-teal-alligator-boot.cyclic.app/movies")
        .then(res => res.data) )

    return (
        <div className="movies-container">
            {
                (moviesQuery.isLoading? <Spinner /> : 
                    moviesQuery.data?.results.map((movie: MovieObject) => <Movie key={movie.id} movie={movie} /> ))
            }
        </div>
    )
}

export { Movies }