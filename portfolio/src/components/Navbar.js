import '../css/Navbar.css';
import {Outlet, Link} from "react-router-dom";
import { useState } from 'react';

function Navbar({current}) {
    //const [active, setActive] = useState(current);

    return (
        <>
        <nav>
            <ul>
                <li>
                    <div class={current == 1 ? "navWrapper" : ""}>
                        <Link class={current == 1 ? "active" : "link"} to="/">Sobre Mim</Link>
                    </div>
                </li>
                <div id='separator'></div>
                <li>
                    <div class={current == 2 ? "navWrapper" : ""}>
                        <Link class={current == 2 ? "active" : "link"} to="/competencias">Competências</Link>
                    </div>
                </li>
                <div id='separator'></div>
                <li>
                    <div class={current == 3 ? "navWrapper" : ""}>
                        <Link class={current == 3 ? "active" : "link"} to="/projetos">Projetos</Link>
                    </div>
                </li>
                <div id='separator'></div>
                <li>
                    <div class={current == 4 ? "navWrapper" : ""}>
                        <Link class={current == 4 ? "active" : "link"} to="/contato">Contato</Link>
                    </div>
                </li>
            </ul>
        </nav>

        <Outlet/>
        </>
    );
}

export default Navbar;