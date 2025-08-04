import "../css/Container.css"
import "../css/Text.css"
import "../css/Projects.css"
import Project from './Project'
import { useTranslation } from "react-i18next"

function Projects() {
    const {t} = useTranslation();
    const projectsTranslation = t('Project');

    return (
        <div id="bodyContainer">
            <div class="centerTitle">
                <h1 class="titleText">{projectsTranslation.projects}</h1>
            </div>
            <hr></hr>
            <div id='projectsContent'>
                {t('Projects', {returnObjects: true}).map((project) => (
                    <Project name={project.name} tecnology={project.tecnology} text={project.text} reference={project.reference} hasLink={project.hasLink} linkText={project.linkText} image={project.image}/>
                ))}
            </div>
        </div>
    );
}

export default Projects;