import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

import { Spinner } from '../components/Spinner'
import heart_icon from '../assets/icons/heart.svg'

import '../style/pages/GamePageStyle.scss'

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
type GameCompany = {
    id: number,
    company: {
        id: number,
        name: string,
        url: string
    }
}
type GameQueryObject = {
    id: number,
    name: string,
    involved_companies: Array<GameCompany>,
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
                    <div className="game-page">
                        <div className="page-header">
                            <div className="header-info-container">
                                <span className="page-title">{data.name}</span>
                                <h3 className="company-link">
                                    <a href={data.involved_companies[0].company.url}>{data.involved_companies[0].company.name}</a>
                                </h3>
                                <div className="ratings-container">
                                    <div className="progress-bar-container">
                                        <img src={heart_icon} alt="star icon" className="star-icon" />
                                        <div className="progress">
                                            <div className="progress-value" style={{width: Math.round(data.total_rating)+"%"}}></div>
                                        </div>
                                    </div>
                                    <span className="ratings-counter">&nbsp;- ratings: {data.total_rating_count}</span>
                                </div>
                            </div>
                            <div className="game-image-container">
                                <img className="game-image" alt="game thumbnail"
                                    src={"https://images.igdb.com/igdb/image/upload/t_1080p/" + data.cover.image_id + ".jpg"} />
                            </div>
                        </div>
                        <div className="page-content">
                            <div className="page-tags">
                                { (data.themes.map((theme: GameTheme) => <button key={theme.id}>{theme.name}</button>)) }
                                { (data.genres.map((genre: GameGenre) => <button key={genre.id}>{genre.name}</button>)) }
                            </div>

                            <div className="slider">
                                <div className="slides">
                                    { data.screenshots?.map((screenshot: GameScreenshot) => 
                                        <img key={screenshot.id} className="gallery-cell" alt="game screenshot" id={screenshot.id.toString()}
                                        src={"https://images.igdb.com/igdb/image/upload/t_screenshot_big/" + screenshot.image_id + ".jpg"} />) }
                                </div>

                                { data.screenshots?.map((screenshot: GameScreenshot, i) => <a key={screenshot.id} href={"#" + screenshot.id}>{i+1}</a>) }
                            </div>

                            <div className="content-info">

                                { (data.summary? 
                                    <div className="content-container">  
                                        <span className="content-title">Game Info:</span>
                                        <p className="content-text">{data.summary}</p>
                                    </div> : "") }
                                
                                { (data.storyline? 
                                    <div className="content-container">
                                        <span className="content-title">Ambience:</span>
                                        <p className="content-text">{data.storyline}</p>
                                    </div> : "") }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export { GamePage }