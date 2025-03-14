import "../css/Title.css"
import { useTranslation } from "react-i18next"

function Title() {
    const {t} = useTranslation();
    const titleTrans = t('Title');

    return (
        <div id="titleContainer">
            <div class="titleContent">
                <h1 id="firstName">Leonardo</h1>
                <h2 id="lastName">Chagas</h2>
            </div>
            <div class="titleContent">
                <h3 class="titles">{titleTrans.title1}</h3>
                <h3 class="titles">{titleTrans.title2}</h3>
                <h3 class="titles">{titleTrans.title3}</h3>
            </div>
        </div>
    );
}

export default Title;