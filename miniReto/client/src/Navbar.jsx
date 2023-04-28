export default function Navbar(){
    return <nav className="navBar">
        <a href="/" className="title-page">Pokemon</a>
        <ul>
            <li className="active">
                <a href="/Kanto">Kanto</a>
            </li>
            <li>
                <a href="/Johto">Johto</a>
            </li>
            <li>
                <a href="/Hoenn">Hoenn</a>
            </li>
        </ul>
    </nav>
}