import "../css/Project.css"
import "../css/Text.css"

function Project({name, tecnology, text, reference, hasLink, image}) {
    return (
        <div class="projectContainer">
            <div>
                <img src={image} width={20} ></img>
            </div>
            <h2 class="titleText">{name}</h2>
            <h3 class="infoText">{tecnology}</h3>
            <p class="infoText">{text}</p>
            {
                hasLink ? <a href={reference}>Repositório para esse projeto</a> : 

                <p>{reference}</p> 
            }
        </div>
    );
}

export default Project;