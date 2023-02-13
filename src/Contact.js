import { useState } from "react";
import image from "./pastil.jpg";
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TextGuide } from "./TextGuide";


function Contact() {

    const [deployText, setDeployText] = useState(false);

        return (
            <div>
    {TextGuide.map((element => {
        const {id, text, showMore} = element;

       const deployTextClick = (element) => {
        element.showMore = !element.showMore
        setDeployText(!deployText)
       }

    return(
            <div>
        <div className="container">

            <h3 className="text"> Звоните: +7-911-091-00-00</h3>
            <h3 className="text"> <FaWhatsapp /> Пишите в WatsApp</h3>
            <h3 className="text"> <FaTelegramPlane/> Мы в Telegram</h3>
            <h3 className="text"> <FaMapMarkerAlt/> г. Санкт-Петербург</h3>

            <div key={id}>
            <h5>{deployText ? text : text.substring(0,59) + "..."}
            <button className="btnguide" onClick={() => deployTextClick(element)}>{showMore ? "Сернуть текст. " : "Читайте здесь."}</button>
            </h5>
            </div>

        </div>
        <div className="footer">
            <img src={image} className="imageFooter" height="160px" width="100%" alt="blueberry"/>
        </div>
        </div>   
    )
}))}
    </div>
)
}

export default Contact;