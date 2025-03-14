import '../css/Navbar.css';
import {Outlet, Link} from "react-router-dom";
import { useState } from 'react';
import React, { useRef } from 'react';
import Toggle from './Toggle';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from "react-i18next"

function Navbar({navFunction, isChecked, handleChange}) {
    //const [active, setActive] = useState(current);
    //const ref1 = useRef(aboutRef);
    const {t} = useTranslation();
    const navbarTrans = t('Navbar');
    

    return (
        <>
        <nav>
            <ul>
                <li>
                    <div >
                        {/* <Link class={current == 1 ? "active" : "link"} to="/">Sobre Mim</Link> */}
                        <a class="link" onClick={() => navFunction(1)}>{navbarTrans.about}</a>
                    </div>
                </li>
                <div id='separator'></div>
                <li>
                    <div >
                        {/* <Link class={current == 2 ? "active" : "link"} to="/competencias">Competências</Link> */}
                        <a class="link" onClick={() => navFunction(2)}>{navbarTrans.skills}</a>
                    </div>
                </li>
                <div id='separator'></div>
                <li>
                    <div >
                        {/* <Link class={current == 3 ? "active" : "link"} to="/projetos">Projetos</Link> */}
                        <a class="link" onClick={() => navFunction(3)}>{navbarTrans.projects}</a>
                    </div>
                </li>
                <div id='separator'></div>
                <li>
                    <div >
                        {/* <Link class={current == 4 ? "active" : "link"} to="/contato">Contato</Link> */}
                        <a class="link" onClick={() => navFunction(4)}>{navbarTrans.contact}</a>
                    </div>
                </li>
            </ul>
            <Toggle isChecked={isChecked} handleChange={handleChange}/>
            <LanguageSelector/>
        </nav>

        {/* <Outlet/> */}
        </>
    );
}

export default Navbar;