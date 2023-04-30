import { Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar(){
    return <nav className="navBar">
        <Link to="/" className="title-page">Pokemon</Link>
        <ul>
            <ActiveComponent to="/Kanto">Kanto</ActiveComponent>
            <ActiveComponent to="/Johto">Johto</ActiveComponent>
            <ActiveComponent to="/Hoenn">Hoenn</ActiveComponent>
        </ul>
        <p className="rights">Created by Rogelio and Yahir</p>
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