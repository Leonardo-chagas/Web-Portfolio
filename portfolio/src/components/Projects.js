import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useLayoutEffect } from 'react'
import "../css/Container.css"
import "../css/Text.css"
import "../css/Projects.css"
import game from "../images/Game2.png"
import planalto from "../images/planalto.jpeg"

function Projects() {
    useLayoutEffect(() => {
            document.body.style.backgroundColor = "#212121"
       });
    return (
        <div id="bodyContainer">
            <Navbar current={3}/>
            <div class="projectContent">
                <div class="projectTextContent">
                    <h2 class="titleText">Portfolio Web</h2>
                    <h3 class="titleText">Tecnologia: <b>React</b></h3>
                    <p class="infoText"></p>
                </div>
                <img></img>
            </div>
            <div class="projectContent">
                <div class="projectTextContent">
                    <h2 class="titleText">Aplicativo Mobile Para Compra de Passagem de Ônibus</h2>
                    <h3 class="titleText">Tecnologia: <b>React Native</b></h3>
                    <p class="infoText">Aplicativo que foi criado para a disciplina de Projeto e Desenvolvimento de Software II. 
                        Se trata de aplicativo mobile, onde o usuário pode pesquisar e comprar passagens de ônibus.
                        Foi um trabalho feito em grupo, onde eu trabalhei na parte de Front-end junto com uma colega do grupo, enquanto outro colega trabalhou no Back-end.</p>
                </div>
                <img src={planalto} alt="imagem" width={200} height={300}></img>
            </div>
            <div class="projectContent">
                <div class="projectTextContent">
                    <h2 class="titleText">Jogo de Cartas Para o Ensino de Programação</h2>
                    <h3 class="titleText">Tecnologia: <b>Unity Engine</b></h3>
                    <p class="infoText">Jogo criado para o meu TCC, com a utilização da Unity Engine para o seu desenvolvimento. 
                        Se trata de um jogo de cartas com o objetivo de promover o aprendizado de programação. 
                        Uma linguagem de programação simples foi crada com ANTLR, para validar os códigos criados no jogo.</p>
                </div>
                <img src={game} alt="imagem" width={300} height={200}></img>
            </div>
            <div class="projectContent">
                <div class="projectTextContent">
                    <h2 class="titleText"></h2>
                    <h3 class="titleText">Tecnologia: <b>Python</b></h3>
                    <p class="infoText"></p>
                </div>
                <img></img>
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;