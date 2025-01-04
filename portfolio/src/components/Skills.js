import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useLayoutEffect } from 'react'
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import Css3Original from 'devicons-react/lib/icons/Css3Original';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import UnityOriginal from 'devicons-react/lib/icons/UnityOriginal';
import "../css/Skills.css"
import "../css/Text.css"
import "../css/Container.css"

function Skills() {
    useLayoutEffect(() => {
            document.body.style.backgroundColor = "#212121"
       });
    return (
        <div id="bodyContainer">
            <Navbar current={2}/>
            <div id="skillsTitle">
                <h1 class="titleText">Competências</h1>
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
            <Footer/>
        </div>
    );
}

export default Skills;