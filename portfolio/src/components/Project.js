import "../css/Project.css"
import "../css/Text.css"
import { motion } from "framer-motion";

function Project({name, tecnology, text, reference, hasLink, linkText, image}) {
    return (
        <motion.div class="projectContainer" whileInView={{scale:1}} initial={{scale:0}}>
            <div class="imgContainer">
                <img src={image} class="projectImg"></img>
            </div>
            <h2 class="titleText">{name}</h2>
            <h3 class="infoText projectTech">{tecnology}</h3>
            <p class="infoText">{text}</p>
            {
                hasLink ? <a href={reference}>{linkText}</a> : 

                <p>{reference}</p> 
            }
        </motion.div>
    );
}

export default Project;