import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

import { Spinner } from '../components/Spinner'
import heart_icon from '../assets/icons/heart.svg'

import '../style/pages/BookPageStyle.scss'

type BookPageProps = {
    children?: React.ReactNode
}

type BookQueryObject = {
    id: number
}

const BookPage = (props: BookPageProps) => {
    let { id } = useParams()

    const queryClient = useQueryClient()

    const bookQuery = useQuery('book', () =>
        axios.get("https://fair-teal-alligator-boot.cyclic.app/games/" + id)
            .then(res => res.data) )

    const data: BookQueryObject = (bookQuery.data? bookQuery.data[0] : undefined) as BookQueryObject

    return (<>{
        bookQuery.isLoading? <Spinner /> :
        Number(id) != data?.id? <Spinner /> : 
            <></>
    }</>)
}

export { BookPage }