import { Link, useMatch, useResolvedPath} from "react-router-dom"
import pokebola from './images/pokeball.png'

export default function Navbar(){
    return( 
    <nav className="navBar">
        <a href="/" className="title-page"><img src={pokebola} alt=''/></a>
        <ul>
            <li>
                <ActiveComponent to="/Kanto">Kanto </ActiveComponent>
            </li>
            <li>
                <ActiveComponent to="/Johto">Johto</ActiveComponent>
            </li>
            <li>
                <ActiveComponent to="/Hoenn">Hoenn</ActiveComponent>
            </li>
        </ul>
        <p className="rights">Created by Rogelio and Yahir</p>
    </nav>
)}

function ActiveComponent({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}