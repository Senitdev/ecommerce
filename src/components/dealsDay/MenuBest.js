import banner9 from "../../assets/deals/menu/banner-9.png";
import iconeSvg1 from "../../assets/deals/menu/icon-1.svg";
import iconeSvg2 from "../../assets/deals/menu/icon-2.svg";
import iconeSvg3 from "../../assets/deals/menu/icon-3.svg";
import iconeSvg4 from "../../assets/deals/menu/icon-4.svg";
import iconeSvg5 from "../../assets/deals/menu/icon-5.svg";
import { FormSubscribe } from "../../components/header/subscribe/FormSubscribe";
export default function MenuBest(){
    const ProductData=[
        {
            id:1,
            titre:"Best prices & offers",
            image:iconeSvg1,
            statut:"Orders $50 or more"
        },
        {
            id:2,
            titre:"Free delivery",
            image:iconeSvg2,
            statut:"24/7 amazing services"
        },
        {
            id:3,
            titre:"Great daily deal",
            image:iconeSvg3,
            statut:"When you sign up"
        },
        {
            id:4,
            titre:"Wide assortment",
            image:iconeSvg4,
            statut:"Mega Discounts"
        },
        {
            id:5,
            titre:"Easy returns",
            image:iconeSvg5,
            statut:"Within 30 days"
        },
    ]
    return<>
    <div className="stay_home">
            <div className="titre_banner">
                <p id="titre_menu1">Stay home & get your daily
                needs from our shop</p>
                <p id="titre_menu2">Start You'r Daily Shopping with Nest Mart</p>
                <FormSubscribe/>
            </div>
         <img src={banner9} alt="Banner" className="menu_banner"></img>
        </div>
    <ul className="menu_icone">
        {
            ProductData.map((data)=>(
                <li key={data.id} className="md-4">
                <img src={data.image} alt="icone" className="iconeMenu"></img>
                <div className="iconeTitre">
                <span id="_titre1"><p>{data.titre}</p></span> 
                <span id="_titre2">{data.statut}</span>
                    </div>
                </li>
            ))
        }
    </ul>
    </>
}