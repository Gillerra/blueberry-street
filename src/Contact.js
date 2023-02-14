import { useState } from "react";
import image from "./pastil.jpg";
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';


function Contact() {

    const textGuide = "Если Вам хочется самим научиться готовить пастилу и стрипсы.  Скоро планируется выпуск гайда с доступными и несложными рецептами для дегидратора. Вы сможете самостоятельно приготовить полезные лакомства: пастилу, стрипсы из фруктов и овощей. Смотрите за нашими анонсами в группах в соцсетях.";
    const [deployText, setDeployText] = useState(false);

    return(
            <div>
        <div className="container">

            <h3 className="text"> Звоните: +7-911-091-00-00</h3>
            <h3 className="text"> <FaWhatsapp /> Пишите в WatsApp</h3>
            <h3 className="text"> <FaTelegramPlane/> Мы в Telegram</h3>
            <h3 className="text"> <FaMapMarkerAlt/> г. Санкт-Петербург</h3>

            <div>
            <h5>{deployText ? textGuide : textGuide.substring(0,59) + "..."}
            <button className="btnguide" onClick={() => setDeployText(!deployText)}>{deployText ? "Сернуть текст. " : "Читайте здесь."}</button>
            </h5>
            </div>

        </div>
        <div className="footer">
            <img src={image} className="imageFooter" height="160px" width="100%" alt="blueberry"/>
        </div>
        </div>   
    )
}

export default Contact;