/* import Navbar from "./Navbar"; */
/* import Footer from "./Footer"; */
import React, { useLayoutEffect } from 'react'
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import Css3Original from 'devicons-react/lib/icons/Css3Original';
import { JavascriptOriginal } from 'devicons-react';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import UnityOriginal from 'devicons-react/lib/icons/UnityOriginal';
import "../css/Skills.css"
import "../css/Text.css"
import "../css/Container.css"
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
                <motion.div class="iconsContainer" whileInView={{scale:1}} initial={{scale:0}}>
                    <ReactOriginal size={50}/>
                    <h2 class="titleText">React</h2>
                </motion.div>
                <motion.div class="iconsContainer" whileInView={{scale:1}} initial={{scale:0}}>
                    <Html5Original size={50}/>
                    <h2 class="titleText">HTML</h2>
                </motion.div>
                <motion.div class="iconsContainer" whileInView={{scale:1}} initial={{scale:0}}>
                    <Css3Original size={50}/>
                    <h2 class="titleText">CSS</h2>
                </motion.div>
                <motion.div class="iconsContainer" whileInView={{scale:1}} initial={{scale:0}}>
                    <JavascriptOriginal size={50}/>
                    <h2 class="titleText">JavaScript</h2>
                </motion.div>
                <motion.div class="iconsContainer" whileInView={{scale:1}} initial={{scale:0}}>
                    <PythonOriginal size={50}/>
                    <h2 class="titleText">Python</h2>
                </motion.div>
                <motion.div class="iconsContainer" whileInView={{scale:1}} initial={{scale:0}}>
                    <UnityOriginal size={50}/>
                    <h2 class="titleText">Unity</h2>
                </motion.div>
            </div>
        </div>
    );
}

export default Skills;