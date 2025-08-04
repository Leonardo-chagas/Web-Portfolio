import "../css/Title.css"
import { useTranslation } from "react-i18next"

import { motion } from "framer-motion";

function Title() {
    const {t} = useTranslation();
    const titleTrans = t('Title');

    return (
        <div id="titleContainer">
            <motion.div class="titleContent" animate={{x:0}} initial={{x:-300}} transition={{duration:1.5}}>
                    <h1 id="firstName">Leonardo</h1>
                    <h2 id="lastName">Chagas</h2>
            </motion.div>
            <motion.div class="titleContent" animate={{x:0}} initial={{x:300}} transition={{duration:1.5}}>
                    <h3 class="titles">{titleTrans.title1}</h3>
                    <h3 class="titles">{titleTrans.title2}</h3>
                    <h3 class="titles">{titleTrans.title3}</h3>
            </motion.div>
        </div>
    );
}

export default Title;