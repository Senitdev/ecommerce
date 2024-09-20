import banner1 from "../../assets/images/banner/banner-1.png";
import banner2 from "../../assets/images/banner/banner-2.png";
import banner3 from "../../assets/images/banner/banner-3.png";
import "../carteproduct/cartproduct.css";
export default function CartProduct(){
    const Product=[
    {
        id:1,
        titre:"Everyday Fresh & Clean with Our Products",
        image:banner1,
        color:"#ECFFEC"
    },
    {
        id:2,
        titre:"Make your Breakfast Healthy and Easy",
        image:banner2,
        color:"#FEEFEA"
    },
    {
        id:3,
        titre:"The best Organic Products Online",
        image:banner3,
        color:"#FFFCEB"
    },


]
    return<>
    <ul className="carteproduct">
    {
        Product.map((prod)=>(
            <li key={prod.id} className="displayProduct"><span className="carteProduitTire">{prod.titre}</span><img src={prod.image} className="imageProduit" alt="Logo"/><br/><button className="btn_shop">shop Now</button> </li>
        ))
    }
    </ul>
    </>
}