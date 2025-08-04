import '../css/Container.css'
import "../css/LanguageSelector.css"
import { useTranslation } from "react-i18next";

function LanguageSelector(){
    const {i18n} = useTranslation();

    const languages = [
        {code: 'pt', lang: 'Português'},
        {code: 'en', lang: 'English'}
    ];

    function ChangeLanguage(code){
        i18n.changeLanguage(code);
    }

    return(
        <div id='languageContainer'>
            {languages.map((lng) => {
                return <button class={lng.code == i18n.language ? 'selected' : ''} key={lng.code} onClick={() => ChangeLanguage(lng.code)}>{lng.lang}</button>
            })}
        </div>
    );
}

export default LanguageSelector;