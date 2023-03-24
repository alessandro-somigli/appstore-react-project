import { Link } from "react-router-dom";

type NavbarButtonProps = {
    name: string,
    to: string,
    active: boolean
}

const NavbarButton = (props: NavbarButtonProps) => {

    return (
        <Link to={props.to} className={props.active? 'active':''}>
            {props.name}
        </Link>
    )
}

export { NavbarButton }