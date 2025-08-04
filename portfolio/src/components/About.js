import "../css/About.css"
import "../css/Container.css"
import "../css/Text.css"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

function About() {
   const {t} = useTranslation();
   const aboutTranslation = t('About');

   
    return (
        <div id="bodyContainer">
            <div id="aboutContent">
                <motion.div id="textContent" whileInView={{x:0}} initial={{x:-300}} transition={{duration:1.5}} viewport={{once:true}}>
                    <h1 class="titleText">Leonardo Silveira Chagas</h1>
                    <p class="infoText">{aboutTranslation.text}</p>
                </motion.div>
                <motion.div whileInView={{x:0}} initial={{x:300}} transition={{duration:1.5}} viewport={{once:true}}>
                    <img src={"images/eu.jpeg"} alt="imagem" class="aboutImg"></img>
                </motion.div>
            </div>
            <div class="centerTitle">
                <h1 class="titleText">{aboutTranslation.education}</h1>
            </div>
            <hr></hr>
            <div id="educationContainer">
                <motion.div class="educationContent" whileInView={{scale:1}} initial={{scale:0}}>
                    <h2 class="titleText educationTitle">{aboutTranslation.course}</h2>
                    <h3 class="infoText">{aboutTranslation.college}</h3>
                    <h3 class="infoText">2018 - 2023</h3>
                </motion.div>
                <motion.div class="educationContent" whileInView={{scale:1}} initial={{scale:0}}>
                    <h2 class="titleText educationTitle">{aboutTranslation.masters}</h2>
                    <h3 class="infoText">{aboutTranslation.college}</h3>
                    <h3 class="infoText">2023 - 2025</h3>
                </motion.div>
            </div>
        </div>
    );
}

export default About;