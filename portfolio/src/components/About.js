import Navbar from "./Navbar";
import Footer from "./Footer";
import myImage from "../images/eu.jpeg"
import "../css/About.css"
import "../css/Container.css"
import "../css/Text.css"

import React, { useLayoutEffect } from 'react'

function About() {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#212121"
   });
    return (
        <div id="bodyContainer">
            <Navbar/>
            <div id="aboutContent">
                <div id="textContent">
                    <h1 class="titleText">Leonardo Silveira Chagas</h1>
                    <p class="infoText">Mestre formado no Programa de Pós-Graduação em Computação (PPGComp) da Universidade Federal do Rio Grande (FURG).</p>
                </div>
                <img src={myImage} alt="imagem" width={300} height={400}></img>
            </div>
            
                <Footer/>
            
        </div>
    );
}

export default About;