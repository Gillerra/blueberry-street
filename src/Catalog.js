import { useState } from "react";
import Buttons from "./Buttons";
import { data } from "./data";
import Frips from "./Frips";
import image from "./pastille.jpg";

function Catalog() {

    const [products, setProducts] = useState(data);
    
    const chosenProducts = (searchTerm) => {
        const newProducts = data.filter(element =>
            element.searchTerm === searchTerm);
            setProducts(newProducts);
    }

    return(
<div className="cont">

<Buttons filteredStrips = {chosenProducts} />

<Frips itemForSale = {products} />

    <div className="footer">
        <img src={image} className="imageFooter" height="160px" width="100%" alt="blueberry"/>
    </div>
    </div>
    )
    
}

export default Catalog;