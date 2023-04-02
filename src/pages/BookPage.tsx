import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

import { Spinner } from '../components/Spinner'
import { StringToTSX } from '../components/StringToTSX'

import heart_icon from '../assets/icons/heart.svg'

import '../style/pages/BookPageStyle.scss'

import type { BookQueryObject } from '../components/Book'

type BookPageProps = {
    children?: React.ReactNode
}

const BookPage = (props: BookPageProps) => {
    let { id } = useParams()

    const bookQuery = useQuery('book', () =>
        axios.get("https://fair-teal-alligator-boot.cyclic.app/books/" + id)
            .then(res => res.data) )

    const data: BookQueryObject = (bookQuery.data? bookQuery?.data : undefined) as BookQueryObject

    return (<>{
        bookQuery.isLoading? <Spinner /> :
        id != data?.id? <Spinner /> : 
        <div className="book-page">
            <div className="page-header">
                <div className="header-info-container">
                    <span className="page-title">{data.volumeInfo.title}</span>
                    <h3 className="author-name">by: {data.volumeInfo.authors?.[0]}</h3>
                    <h3 className="book-data">{data.volumeInfo.publishedDate} | {data.volumeInfo.publisher}</h3>
                    <div className="ratings-container">
                        <div className="progress-bar-container">
                            <img src={heart_icon} alt="star icon" className="star-icon" />
                            <div className="progress">
                                <div className="progress-value" style={{width: Math.round(data.volumeInfo.averageRating*20)+"%"}}></div>
                            </div>
                        </div>
                        <span className="ratings-counter">&nbsp;- ratings: {data.volumeInfo.ratingsCount}</span>
                    </div>
                </div>
                <div className="book-image-container">
                    <img className="book-image" alt="book thumbnail"
                        src={data.volumeInfo.imageLinks?.thumbnail} />
                </div>
            </div>
            <div className="page-content">
                <div className="page-tags">
                    { (data.volumeInfo.categories?.map((category: string, i) => <button key={i}>{category}</button>)) }
                </div>

                <div className="content-info">

                    { (data.volumeInfo.description? 
                        <div className="content-container">  
                            <span className="content-title">Book Description:</span>
                            <div className="content-text">
                                <StringToTSX domString={data.volumeInfo.description} />
                            </div>
                        </div> : "") }
                    
                    { (data.accessInfo.searchInfo?.textSnippet? 
                        <div className="content-container">
                            <span className="content-title">Text:</span>
                            <p className="content-text">{data.accessInfo.searchInfo.textSnippet}</p>
                        </div> : "") }
                </div>
            </div>
        </div>
    }</>)
}

export { BookPage }