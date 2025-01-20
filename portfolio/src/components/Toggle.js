import "../css/Toggle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Toggle({handleChange, isChecked}){
    return (
        <div id="toggleContainer">
            {/* <input
            type="checkbox"
            class="toggle"
            onChange={handleChange}
            checked={isChecked}
            /> */}
            {/* Tentar colocar os icones no componente toggle sem pseudo elementos */}
            <div id={isChecked ? "iconDark" : "iconLight"} onClick={handleChange}>
                <FontAwesomeIcon icon={isChecked ? faMoon : faSun} color={isChecked ? '#212121' : '#E3E3E3'}/>
            </div>
            
        </div>
    );
}

export default Toggle;