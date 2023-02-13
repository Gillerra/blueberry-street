import { useState } from "react";
import { PhotosSlides } from "./PhotosSlides";

function Slider() {
    const [sliders, setSliders] = useState(0);

    const { id, image } =  PhotosSlides[sliders];


    const previosSliders = () => {
    setSliders((slider => {
        slider --;
        if (slider < 0) {
        return PhotosSlides.length-1;
    }
        return slider;
    }))
}

    const nextSliders = () => {
        setSliders((slider => {
        slider ++;
        if(slider > PhotosSlides.length - 1) {
        slider = 0;
    }
    return slider;
    }))
}

    return (<div>

    <div className='about'>
        <div  key={id}>
    <img src={image} className="aboutImage" width="969px" height="530" alt="berry" />
        </div>
    </div>
    <div className='about'>
    <button className='btnSlider' onClick={previosSliders}> Назад </button>
    <button className='btnSlider' onClick={nextSliders}> Вперед  </button>
    </div>

    </div>
);

}


export default Slider;