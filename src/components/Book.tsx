import { useNavigate } from 'react-router-dom'

import '../style/components/BookStyle.scss'
import heart_icon from '../assets/icons/heart.svg'

type BookProps = {
    children?: React.ReactNode,
    book: BooksQueryObject
}

type BooksQueryObject = {
    id: string
    volumeInfo: {
        title: string
        authors: string[]
        publishedDate: string
        description: string
        pageCount: number
        averageRating: number
        ratingsCount: number
        imageLinks: {
            thumbnail: string
        }
        accessInfo: {
            viewability: string
            pdf: {
                webReaderLink: string
                downloadLink: string
            }
            searchInfo: { textSnippet: string }
        }
    }
}

const Book = (props: BookProps) => {

    const navigate = useNavigate()

    const handleBookClick = (book_id: string) => navigate(book_id)

    return (
        <div className="book-container" onClick={() => handleBookClick(props.book.id)}>
            <div className="image-container">
                <img className="book-image" alt="book thumbnail"
                    src={props.book.volumeInfo.imageLinks.thumbnail} />
            </div>

            <div className="text-container">
                <span className="book-name">{props.book.volumeInfo.title}</span><br />
                <div className="progress-bar-container">
                    <img src={heart_icon} alt="star icon" className="star-icon" />
                    <div className="progress">
                        <div className="progress-value" style={{width: Math.round(props.book.volumeInfo.averageRating)*20+"%"}}></div>
                    </div>
                </div>
                <span className="book-data">by: {props.book.volumeInfo.authors[0]}</span>
            </div>
        </div>
    )
}

export { Book }
export type { BooksQueryObject }