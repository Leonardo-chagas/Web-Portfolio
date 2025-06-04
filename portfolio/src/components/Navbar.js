import '../css/Navbar.css';
import {Outlet, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import Toggle from './Toggle';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar({navFunction, isChecked, handleChange}) {
    //const [active, setActive] = useState(current);
    //const ref1 = useRef(aboutRef);
    const {t} = useTranslation();
    const navbarTrans = t('Navbar');

    const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

    const handleResize = () => {
        setShowResponsiveMenu(false);
    }

    const handleNavButton = (index) => {
        setShowResponsiveMenu(false);
        navFunction(index);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    })

    const toggleResponsiveMenu = () => {
        setShowResponsiveMenu(!showResponsiveMenu);
    }
    

    return (
        <>
        <nav>
            
            <FontAwesomeIcon onClick={toggleResponsiveMenu} icon={faBars} class="responsiveIcon"/>

            {showResponsiveMenu &&
            <ul class="responsiveMenu">
                <li>
                    <div >
                        <a class="link" onClick={() => handleNavButton(1)}>{navbarTrans.about}</a>
                    </div>
                </li>
                <li>
                    <div >
                        <a class="link" onClick={() => handleNavButton(2)}>{navbarTrans.experiences}</a>
                    </div>
                </li>
                <li>
                    <div >
                        <a class="link" onClick={() => handleNavButton(3)}>{navbarTrans.skills}</a>
                    </div>
                </li>
                <li>
                    <div >
                        <a class="link" onClick={() => handleNavButton(4)}>{navbarTrans.projects}</a>
                    </div>
                </li>
                <li>
                    <div >
                        <a class="link" onClick={() => handleNavButton(5)}>{navbarTrans.contact}</a>
                    </div>
                </li>
            </ul>}
            
            <ul class="navMenu">
                {/* <li class="responsiveIcon">
                    <FontAwesomeIcon icon={faBars}/>
                </li> */}
                <li>
                    <div >
                        <a class="link" onClick={() => navFunction(1)}>{navbarTrans.about}</a>
                    </div>
                </li>
                <div class='listSeparator'></div>
                <li>
                    <div >
                        <a class="link" onClick={() => navFunction(2)}>{navbarTrans.experiences}</a>
                    </div>
                </li>
                <div class='listSeparator'></div>
                <li>
                    <div >
                        <a class="link" onClick={() => navFunction(3)}>{navbarTrans.skills}</a>
                    </div>
                </li>
                <div class='listSeparator'></div>
                <li>
                    <div >
                        <a class="link" onClick={() => navFunction(4)}>{navbarTrans.projects}</a>
                    </div>
                </li>
                <div class='listSeparator'></div>
                <li>
                    <div >
                        <a class="link" onClick={() => navFunction(5)}>{navbarTrans.contact}</a>
                    </div>
                </li>
                {/* <div class='separator'>
                    <Toggle isChecked={isChecked} handleChange={handleChange}/>
                </div>
                <div class='separator'>
                    <LanguageSelector/>
                </div> */}
            </ul>

            <div class='separator'>
                    <Toggle isChecked={isChecked} handleChange={handleChange}/>
                </div>
                <div class='separator'>
                    <LanguageSelector/>
                </div>
            
            {/* <LanguageSelector/> */}

            {/* <Toggle isChecked={isChecked} handleChange={handleChange}/> */}
            
        </nav>

        {/* <Outlet/> */}
        </>
    );
}

export default Navbar;