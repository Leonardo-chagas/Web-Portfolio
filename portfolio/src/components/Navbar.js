import '../css/Navbar.css';
import {Outlet, Link} from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Sobre Mim</Link>
                </li>
                <li>
                    <Link to="/competencias">Competências</Link>
                </li>
                <li>
                    <Link to="/projetos">Projetos</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </nav>

        <Outlet/>
        </>
    );
}

export default Navbar;