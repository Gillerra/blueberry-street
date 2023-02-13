import image from "./pastille.jpg";

function Delivery() {
    return(
        <div>
    <div className="container">
        <h3 className="text"> Доставка заказов производится только в микрорайоне Славянка ежедневно с 20-00 до 21-00 часов.</h3>
        <h3 className="text"> При заказе на сумму до 2000 рублей стоимость доставки 200 рублей.</h3>
        <h3 className="text">  Заказы на сумму от 2000 рублей доставляются бесплатно.</h3>
        <h3 className="text"> Возможен самовывоз.</h3>
    </div>
    <div className="footer">
        <img src={image} className="imageFooter" height="160px" width="100%" alt="blueberry"/>
    </div>
    </div>
    )
}

export default Delivery;