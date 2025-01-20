import '../css/Navbar.css';
import {Outlet, Link} from "react-router-dom";
import { useState } from 'react';
import React, { useRef } from 'react';
import Toggle from './Toggle';

function Navbar({navFunction, isChecked, handleChange}) {
    //const [active, setActive] = useState(current);
    //const ref1 = useRef(aboutRef);

    return (
        <>
        <nav>
            <ul>
                <li>
                    <div >
                        {/* <Link class={current == 1 ? "active" : "link"} to="/">Sobre Mim</Link> */}
                        <a class="link" onClick={() => navFunction(1)}>Sobre Mim</a>
                    </div>
                </li>
                <div id='separator'></div>
                <li>
                    <div >
                        {/* <Link class={current == 2 ? "active" : "link"} to="/competencias">Competências</Link> */}
                        <a class="link" onClick={() => navFunction(2)}>Competências</a>
                    </div>
                </li>
                <div id='separator'></div>
                <li>
                    <div >
                        {/* <Link class={current == 3 ? "active" : "link"} to="/projetos">Projetos</Link> */}
                        <a class="link" onClick={() => navFunction(3)}>Projetos</a>
                    </div>
                </li>
                <div id='separator'></div>
                <li>
                    <div >
                        {/* <Link class={current == 4 ? "active" : "link"} to="/contato">Contato</Link> */}
                        <a class="link" onClick={() => navFunction(4)}>Contato</a>
                    </div>
                </li>
            </ul>
            <Toggle isChecked={isChecked} handleChange={handleChange}/>
        </nav>

        {/* <Outlet/> */}
        </>
    );
}

export default Navbar;