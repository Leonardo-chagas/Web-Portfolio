import "../css/Container.css"
import "../css/Text.css"
import "../css/Projects.css"
import Experience from "./Experience"
import { useTranslation } from "react-i18next"

function Experiences() {
    const {t} = useTranslation();
    const experiencesTranslation = t('Experience');

    return (
        <div id="bodyContainer">
            <div class="centerTitle">
                <h1 class="titleText">{experiencesTranslation.experience}</h1>
            </div>
            <hr></hr>
            <div id='projectsContent'>
                {t('Experiences', {returnObjects: true}).map((experience) => (
                    <Experience title={experience.title} place={experience.place} date={experience.date} work={experience.work}/>
                ))}
            </div>
        </div>
    );
}

export default Experiences;