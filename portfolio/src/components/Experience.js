import "../css/Project.css"
import "../css/Text.css"
import { motion } from "framer-motion";

function Experience({title, place, date, work}) {
    return (
        <motion.div class="projectContainer" whileInView={{scale:1}} initial={{scale:0}}>
            <h2 class="titleText">{title}</h2>
            <h3 class="infoText projectTech">{place}</h3>
            <h4 class="infoText projectTech">{date}</h4>
            <p class="infoText">{work}</p>
        </motion.div>
    );
}

export default Experience;