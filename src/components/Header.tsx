import {Link} from "react-router-dom";
import "./styles/Header.css"

export default function Header() {
    return (
        <header>
            <h1 className={"app-heading"}>Rick And Morty Forever</h1>
            <nav className={"nav-container"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/characters"}>Gallery</Link>
                <Link to={`/characters/createCharacter`}>Create a new one</Link>
            </nav>
        </header>
    )
}