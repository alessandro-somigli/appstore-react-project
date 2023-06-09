import { useNavigate } from 'react-router-dom'

import '../style/components/GameStyle.scss'
import heart_icon from '../assets/icons/heart.svg'

type GameProps = {
    children?: React.ReactNode,
    game: GamesQueryObject
}

type GameGenre = {
    id: number,
    name: string
}
type GameCover = {
    id: number,
    image_id: string
}
type GamesQueryObject = {
    id: number,
    name: string,
    total_rating: number,
    genres: Array<GameGenre>,
    cover: GameCover
}

const Game = (props: GameProps) => {

    const navigate = useNavigate()

    const handleGameClick = (game_id: number) => navigate(game_id.toString())

    return (
        <div className="game-container" onClick={() => handleGameClick(props.game.id)}>
            <div className="image-container">
                <img className="game-image" alt="game thumbnail"
                    src={"https://images.igdb.com/igdb/image/upload/t_cover_big/" + props.game.cover.image_id + ".jpg"} />
            </div>

            <div className="text-container">
                <span className="game-name">{props.game.name}</span><br />
                <div className="progress-bar-container">
                    <img src={heart_icon} alt="star icon" className="star-icon" />
                    <div className="progress">
                        <div className="progress-value" style={{width: Math.round(props.game.total_rating)+"%"}}></div>
                    </div>
                </div>
                {/*props.game.genres.map(genre => genre.name + ", ")*/}
                <span className="game-data">{props.game.genres[0].name}</span>
            </div>
        </div>
    )
}

export { Game }
export type { GamesQueryObject, GameGenre }