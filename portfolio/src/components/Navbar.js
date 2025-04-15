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
                        <a class="link" onClick={() => navFunction(1)}>{navbarTrans.about}</a>
                    </div>
                </li>
                <div class='listSeparator'></div>
                <li>
                    <div >
                        <a class="link" onClick={() => navFunction(2)}>{navbarTrans.skills}</a>
                    </div>
                </li>
                <div class='listSeparator'></div>
                <li>
                    <div >
                        <a class="link" onClick={() => navFunction(3)}>{navbarTrans.projects}</a>
                    </div>
                </li>
                <div class='listSeparator'></div>
                <li>
                    <div >
                        <a class="link" onClick={() => navFunction(4)}>{navbarTrans.contact}</a>
                    </div>
                </li>
                <div class='separator'>
                    <Toggle isChecked={isChecked} handleChange={handleChange}/>
                </div>
                <div class='separator'>
                    <LanguageSelector/>
                </div>
            </ul>
            
            
            {/* <LanguageSelector/> */}

            {/* <Toggle isChecked={isChecked} handleChange={handleChange}/> */}
            
        </nav>

        {/* <Outlet/> */}
        </>
    );
}

export default Navbar;