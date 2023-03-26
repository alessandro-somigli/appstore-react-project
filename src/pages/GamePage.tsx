import { useParams } from 'react-router-dom';

type GamePageProps = {
    children?: React.ReactNode
}

const GamePage = (props: GamePageProps) => {
    let { id } = useParams()


    return (<>{id}</>)
}

export { GamePage }