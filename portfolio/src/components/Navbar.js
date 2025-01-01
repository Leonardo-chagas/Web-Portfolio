import '../css/Navbar.css';
import {Outlet, Link} from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link id='link' to="/">Sobre Mim</Link>
                </li>
                <div id='separator'></div>
                <li>
                    <Link id='link' to="/competencias">Competências</Link>
                </li>
                <div id='separator'></div>
                <li>
                    <Link id='link' to="/projetos">Projetos</Link>
                </li>
                <div id='separator'></div>
                <li>
                    <Link id='link' to="/contato">Contato</Link>
                </li>
            </ul>
        </nav>

        <Outlet/>
        </>
    );
}

export default Navbar;