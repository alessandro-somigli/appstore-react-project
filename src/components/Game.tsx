type GameProps = {
    children?: React.ReactNode,
    game: GameObject
}

type GameGenre = {
    id: number,
    name: string
}
type GameCover = {
    id: number,
    image_id: string
}
type GameObject = {
    id: number,
    name: string,
    rating: number,
    genres: Array<GameGenre>,
    cover: GameCover
}

const Game = (props: GameProps) => {

    console.log("images.igdb.com/igdb/image/upload/t_thumb/" + props.game.cover.image_id + ".jpg");
    return (
        <div className="game-container">
            <div className="image-container">
                <img className="game-image" alt="game thumbnail"
                    src={"https://images.igdb.com/igdb/image/upload/t_screenshot_med/" + props.game.cover.image_id + ".jpg"} />
            </div>

            <span>{props.game.name}</span><br />
            <span>{Math.round(props.game.rating)}/100 - {props.game.genres.map(genre => genre.name + ", ")}</span>
        </div>
    )
}

export { Game }
export type { GameObject, GameGenre }