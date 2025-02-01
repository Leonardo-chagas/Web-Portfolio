/* import Navbar from "./Navbar"; */
/* import Footer from "./Footer"; */
//import myImage from "../images/eu.jpeg"
import "../css/About.css"
import "../css/Container.css"
import "../css/Text.css"

import React, { useLayoutEffect } from 'react'

function About() {
    /* useLayoutEffect(() => {
        document.body.style.backgroundColor = "#212121"
   }); */
    return (
        <div id="bodyContainer">
            <div id="aboutContent">
                <div id="textContent">
                    <h1 class="titleText">Leonardo Silveira Chagas</h1>
                    <p class="infoText">Mestre formado no Programa de Pós-Graduação em Computação (PPGComp) da Universidade Federal do Rio Grande (FURG).</p>
                </div>
                <img src={"images/eu.jpeg"} alt="imagem" width={300} height={400}></img>
            </div>
            <div class="centerTitle">
                <h1 class="titleText">Educação</h1>
            </div>
            <hr></hr>
            <div id="educationContainer">
                <div class="educationContent">
                    <h2 class="titleText">Graduação no curso de Engenharia da Computação</h2>
                    <h3 class="infoText">Universidade Federal do Rio Grande (FURG)</h3>
                    <h3 class="infoText">2018 - 2023</h3>
                </div>
                <div class="educationContent">
                    <h2 class="titleText">Mestrado no Programa de Pós-Graduação em Computação (PPGComp)</h2>
                    <h3 class="infoText">Universidade Federal do Rio Grande (FURG)</h3>
                    <h3 class="infoText">2023 - 2025</h3>
                </div>
            </div>
        </div>
    );
}

export default About;