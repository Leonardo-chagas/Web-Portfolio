import "../css/Toggle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Toggle({handleChange, isChecked}){
    return (
        <div id="toggleContainer">
            <div id={isChecked ? "iconDark" : "iconLight"} onClick={handleChange}>
                <FontAwesomeIcon icon={isChecked ? faMoon : faSun} color={isChecked ? '#212121' : '#E3E3E3'}/>
            </div>
        </div>
    );
}

export default Toggle;