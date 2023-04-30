import { Link, useMatch, useResolvedPath} from "react-router-dom"
import "./Navbar.css";
export default function Navbar(){
    return <nav className="navBar">
        <Link to="/" className="title-page"><img src={require('./images/pokeball.png')} alt="" /></Link>
        <ul>
            <ActiveComponent to="/Kanto">Kanto</ActiveComponent>
            <ActiveComponent to="/Johto">Johto</ActiveComponent>
            <ActiveComponent to="/Hoenn">Hoenn</ActiveComponent>
            <ActiveComponent to="/CreatePKMN">PKMN Creator</ActiveComponent>
        </ul>
        <p>TM</p>
    </nav>
}

function ActiveComponent({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}