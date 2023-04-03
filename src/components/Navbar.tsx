import { useNavigate } from 'react-router-dom'

import { NavbarButton } from "./NavbarButton"
import "../style/components/NavbarStyle.scss"
import sakura_logo from "../assets/images/logo.png"

import { useLocation } from 'react-router-dom'

type NavbarProps = {}

const buttons = [
    {
        name: 'Games',
        to: '/store/games'
    }, {
        name: 'Apps',
        to: '/store/apps'
    }, {
        name: 'Movies',
        to: '/store/movies'
    }, {
        name: 'Books',
        to: '/store/books'
    }
]

const Navbar = (props: NavbarProps) => {
    const location = useLocation();

    const navigate = useNavigate()

    const onHandleInsightsClick = () => navigate('/store/insights')

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img className="logo" src={sakura_logo} alt="logo" />
                <label className="text">AppStore</label>
            </div>

            <div className="navbar-buttons">
                { buttons.map(button => <NavbarButton 
                    name={button.name} 
                    to={button.to} 
                    active={location.pathname.includes(button.to)}
                    key={button.to} />) }
            </div>

            <input type="checkbox" id="checkbox"
                className={"navbar-checkbox " + (location.pathname.includes('insights')? 'active' : '')} 
                onClick={onHandleInsightsClick} />
            <label className="checkbox-label" htmlFor="checkbox">Insights</label>
        </div>
    )
}

export { Navbar }