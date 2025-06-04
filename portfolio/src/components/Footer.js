import "../css/Footer.css"
import "../css/Container.css"
import "../css/Text.css"
import { useTranslation } from "react-i18next"

function Footer(){
    const {t} = useTranslation();
    const contactTranslation = t('Contact');

    return(
        <div id="footerContainer">
            <hr></hr>
            <div id="footerContent">
                <div class="footerInfo">
                    <h2 class="titleText">Email</h2>
                    <p class="infoText">leoschagas@hotmail.com</p>
                </div>
                <div class="footerInfo">
                    <h2 class="titleText">GitHub</h2>
                    <p><a href="https://github.com/Leonardo-chagas">https://github.com/Leonardo-chagas</a></p>
                </div>
                <div class="footerInfo">
                    <h2 class="titleText">Linkedin</h2>
                    <p><a href="www.linkedin.com/in/leonardo-chagas-9a2678239">www.linkedin.com/in/leonardo-chagas-9a2678239</a></p>
                </div>
                <div class="footerInfo">
                    <h2 class="titleText">{contactTranslation.phone}</h2>
                    <p class="infoText">+55 (53) 98163-1611</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;