import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Slider from "./Slider";




function Home() {

    const pictureAnime = useRef(null);
    useEffect(() => {
    gsap.to(".aboutImage", { y: -25,  
        duration: 4,
        scale: 1
        
    });
    }, []);
    
    return (
        <div className="parent">
        <div className="miniAbout">
        <div className="about">
        <Slider/>
        </div>
        </div>

        <div className="aboutText">
            <h2>Полезное - вкусно!</h2>
            <h3 className="text"> Предлагаем Вам попробовать домашнюю паcтилу:  классическую яблочную,</h3>
            <h3 className="text"> ароматную грушевую, экзотику из киви, необычную йогуртовую,</h3>
            <h3 className="text">  мятную, клюквенную. В большом ассортименте представлены</h3>
            <h3 className="text"> фруктовые стрипсы-фрипсы и подарочные наборы.</h3>
        </div>

        </div>
        
        
    )
}

export default Home;