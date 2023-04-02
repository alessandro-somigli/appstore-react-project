import { useQuery } from 'react-query'
import axios from 'axios'

import '../style/pages/BooksStyle.scss'

import { Book } from '../components/Book'
import { Spinner } from '../components/Spinner'

import type { BooksQueryObject } from '../components/Book'

type BooksProps = {
    children?: React.ReactNode
}

const Books = (props: BooksProps) => {
    const booksQuery = useQuery('books', () =>
        axios.get("https://fair-teal-alligator-boot.cyclic.app/books")
            .then(res => res.data) )

    return (
        <div className="books-container">
            {
                (booksQuery.isLoading? <Spinner /> : 
                    booksQuery.data?.map((book: BooksQueryObject) => <Book key={book.id} book={book} /> ))
            }
        </div>
    )
}

export { Books }