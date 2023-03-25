import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query'
import axios from 'axios';

type GamesProps = {
    children?: React.ReactNode
}

const Games = (props: GamesProps) => {
    const queryClient = useQueryClient()

    const gamesQuery = useQuery('games', () =>
        axios.get("https://fair-teal-alligator-boot.cyclic.app/games")
            .then(res => res.data) )

    return (
        <>
            games! <br />
            {console.log(gamesQuery.data)} <br />
        </>
    )
}

export { Games }