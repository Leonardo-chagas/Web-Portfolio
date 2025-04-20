/* import Navbar from "./Navbar"; */
/* import Footer from "./Footer"; */
import React, { useLayoutEffect } from 'react'
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import Css3Original from 'devicons-react/lib/icons/Css3Original';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import UnityOriginal from 'devicons-react/lib/icons/UnityOriginal';
import "../css/Skills.css"
import "../css/Text.css"
import "../css/Container.css"
import { useTranslation } from 'react-i18next';

function Skills() {
    const {t} = useTranslation();
    const skillsTranslation = t('Skills');


    return (
        <div id="bodyContainer">
            {/* <Navbar current={2}/> */}
            <div class="centerTitle">
                <h1 class="titleText">{skillsTranslation.skills}</h1>
            </div>
            <hr></hr>
            <div id="skillsContainer">
                <div class="iconsContainer">
                    <ReactOriginal size={50}/>
                    <h2 class="titleText">React</h2>
                </div>
                <div class="iconsContainer">
                    <Html5Original size={50}/>
                    <h2 class="titleText">HTML</h2>
                </div>
                <div class="iconsContainer">
                    <Css3Original size={50}/>
                    <h2 class="titleText">CSS</h2>
                </div>
                <div class="break"></div>
                <div class="iconsContainer">
                    <PythonOriginal size={50}/>
                    <h2 class="titleText">Python</h2>
                </div>
                <div class="iconsContainer">
                    <UnityOriginal size={50}/>
                    <h2 class="titleText">Unity Engine</h2>
                </div>
            </div>
        </div>
    );
}

export default Skills;