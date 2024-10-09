import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import banner01 from "../../assets/deals/banner-5.png";
import banner02 from "../../assets/deals/banner-6.png";
import banner03 from "../../assets/deals/banner-7.png";
import banner04 from "../../assets/deals/banner-8.png";
import banner9 from "../../assets/deals/menu/banner-9.png";
import iconeSvg1 from "../../assets/deals/menu/icon-1.svg";
import iconeSvg2 from "../../assets/deals/menu/icon-2.svg";
import iconeSvg3 from "../../assets/deals/menu/icon-3.svg";
import iconeSvg4 from "../../assets/deals/menu/icon-4.svg";
import iconeSvg5 from "../../assets/deals/menu/icon-5.svg";
import thumbnail1 from "../../assets/deals/menu/thumbnail-1.jpg";
import thumbnail10 from "../../assets/deals/menu/thumbnail-10.jpg";
import thumbnail11 from "../../assets/deals/menu/thumbnail-11.jpg";
import thumbnail12 from "../../assets/deals/menu/thumbnail-12.jpg";
import thumbnail2 from "../../assets/deals/menu/thumbnail-2.jpg";
import thumbnail3 from "../../assets/deals/menu/thumbnail-3.jpg";
import thumbnail4 from "../../assets/deals/menu/thumbnail-4.jpg";
import thumbnail5 from "../../assets/deals/menu/thumbnail-5.jpg";
import thumbnail6 from "../../assets/deals/menu/thumbnail-6.jpg";
import thumbnail7 from "../../assets/deals/menu/thumbnail-7.jpg";
import thumbnail8 from "../../assets/deals/menu/thumbnail-8.jpg";
import thumbnail9 from "../../assets/deals/menu/thumbnail-9.jpg";
import panier from "../../assets/images/popularproduct/panier.png";
import '../dealsDay/deals.css';
import { FooterBottom } from "../footer/bottom/FooterBottom";
import { Footer } from "../footer/Footer";
import { FormSubscribe } from "../header/subscribe/FormSubscribe";
export const Deals=()=>{
    let location=useLocation;
    const listeImage=[
        {
            id:1,
            image:banner01,
            titre:"Seeds of Change Organic Quinoa, Brown, & Red Rice",
            prix:32.85,
            auteur:"NestFood",
            promotion:33.8
        },
        {
            id:2,
            image:banner02,
            titre:"Perdue Simply Smart Organics Gluten Free",
            prix:24.85,
            auteur:"Old El Paso",
            promotion:26.8
        },
        {
            id:3,
            image:banner03,
            titre:"Signature Wood-Fired Mushroom and Caramelized",
            prix:13.8,
            auteur:"Progresso",
            promotion:12.85
        },
        {
            id:4,
            image:banner04,
            titre:"Simply Lemonade with Raspberry Juice",
            prix:15.85,
            auteur:"Yoplait",
            promotion:16.8
        },
       
    ]
    const menuSous=[
        "Top Silling",
        "Trending Products",
        "Recently added",
        "Top Rated"

    ]
    const productMenuSilling=[
        {
        id:1,
        titre:"Nestle Original Coffee-Mate Coffee Creamer",
        image:thumbnail1,
        prix:32.85,
        promotion:33.8,
        categorie:"silling"
        },
        {
            id:2,
            titre:"Nestle Original Coffee-Mate Coffee Creamer",
            image:thumbnail2,
            prix:32.85,
            promotion:33.8,
            categorie:"silling"
            },
            {
                id:3,
                titre:"Nestle Original Coffee-Mate Coffee Creamer",
                image:thumbnail3,
                prix:32.85,
                promotion:33.8,
                categorie:"silling"
                },

            ]
            const productMenuTrending=[     
                {
                    id:4,
                    titre:"Organic Cage-Free Grade A Large Brown Eggs",
                    image:thumbnail4,
                    prix:32.85,
                    promotion:33.8,
                    categorie:"trending"
                    },
                    {
                        id:5,
                        titre:"Seeds of Change Organic Quinoa, Brown, & Red Rice",
                        image:thumbnail5,
                        prix:32.85,
                        promotion:33.8,
                        categorie:"trending"
                        },
                        {
                            id:6,
                            titre:"Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
                            image:thumbnail6,
                            prix:32.85,
                            promotion:33.8,
                            categorie:"trending"
                            },
                        ]

                  const  productMenuAdded=[{
                                id:7,
                                titre:"Pepperidge Farm Farmhouse Hearty White Bread",
                                image:thumbnail7,
                                prix:32.85,
                                promotion:33.8,
                                categorie:"added"
                                },
                                {
                                    id:8,
                                    titre:"Organic Frozen Triple Berry Blend",
                                    image:thumbnail8,
                                    prix:32.85,
                                    promotion:33.8,
                                    categorie:"added"
                                    },
                                    {
                                        id:9,
                                        titre:"Oroweat Country Buttermilk Bread",
                                        image:thumbnail9,
                                        prix:32.85,
                                        promotion:33.8,
                                        categorie:"added"
                                        }]
                    
                        const  productMenuTop=[        {
                                            id:10,
                                            titre:"Foster Farms Takeout Crispy Classic Buffalo Wings",
                                            image:thumbnail10,
                                            prix:32.85,
                                            promotion:33.8,
                                            categorie:"top"
                                            },
                                            {
                                                id:11,
                                                titre:"Angie’s Boomchickapop Sweet & Salty Kettle Corns",
                                                image:thumbnail11,
                                                prix:32.85,
                                                promotion:33.8,
                                                categorie:"top"
                                                },
                                                {
                                                    id:12,
                                                    titre:"All Natural Italian-Style Chicken Meatballs",
                                                    image:thumbnail12,
                                                    prix:32.85,
                                                    promotion:33.8,
                                                    categorie:"top"
                                                    },
                                                      ]
    return<div className='deals'>
    <span id="titreDeals">Deals Of the Day</span>
    <span id="lienTitre">All Deals{" >"}</span>
    <ul className="displayBanner">
        {listeImage.map((banner)=>(
            <li key={banner.id} className="banner"><img src={banner.image} alt="logo Banner" className="imgBanner"/><br/><div className="cadreBannier"><span id="titreBanner">{banner.titre}<br/><Rating initialValue={5} fillColor="rgb(230, 230, 81)" size={25}></Rating><br/><span style={{color:'green'}}>By {banner.auteur}</span><br/><span style={{color:"green",marginRight:'10px'}}>${banner.prix}</span><span style={{color:"gray",textDecoration:"line-through",margin:'10px'}}>${banner.promotion}</span><button className="btn_cart"><img src={panier} alt="iconeCart" className="Iconepanier"/>Add</button></span></div></li>
        ))}
    </ul>
    <ul className="deals_bottom">
        {
            menuSous.map((menu)=>(
                <li className="menu_top" key={menu}>{menu}<hr className='top_trait'/></li>
            ))
        }
    </ul>
    <span className="product_menu">
    <div className="silling"><Test product={productMenuSilling}/></div>
        <div className="pending"><Test product={productMenuTrending}/></div>
        <div className="added"><Test product={productMenuAdded}></Test></div>
        <div className="top"><Test product={productMenuTop}/></div>
        </span>
        <div className="stay_home">
            <div className="titre_banner">
                <p id="titre_menu1">Stay home & get your daily
                needs from our shop</p>
                <p id="titre_menu2">Start You'r Daily Shopping with Nest Mart</p>
                <FormSubscribe/>
            </div>
         <img src={banner9} alt="Banner" className="menu_banner"></img>
        
        </div>
        {/*Menu best price & offer- Free delivery - Great daily -Wide */}
        <MenuBest/>
        <Footer/>
        <FooterBottom/>
    </div>
}
function Test({product=[]}){
return<>
<ul>{
        product.map((elt)=>(
            <li key={elt.id} className="col_m1"><img src={elt.image} alt="logo" className="image_menu"/>
            <span className="titre_contenu"><span style={{color:"black",fontWeight:"500"}}>{elt.titre}</span><br></br><Rating initialValue={5} fillColor="rgb(230, 230, 81)" size={12}></Rating><br/>
             <span style={{color:"green",marginRight:'10px'}}>${elt.prix}</span><span style={{color:"gray",textDecoration:"line-through",margin:'10px'}}>${elt.promotion}</span></span></li>
        ))
    }
</ul>
</>
}
function MenuBest(){
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