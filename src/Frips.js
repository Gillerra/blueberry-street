function Frips({itemForSale}) {
    return(
<div className="products">
    {itemForSale.map((element => {
        const {id, names, price, image}=element;

        return (
        <div className="product-card" key={id}>
            <img src={image} className="imageDecoration" width="380px" height="350px" alt="frips" />
            <h3>{names}</h3>
            <h3>{price}</h3>
        </div>
        )
    }))}
</div>
    )
}

export default Frips;