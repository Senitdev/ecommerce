import { useLocation } from "react-router-dom";
import Iconeclock from "../../assets/footer/icon-clock.svg";
import Iconecall from "../../assets/footer/icon-contact.svg";
import Iconeemail from "../../assets/footer/icon-email-2.svg";
import Iconelocation from "../../assets/footer/icon-location.svg";
import logo from "../../assets/footer/logo.svg";
import MenuBest from "../dealsDay/MenuBest";
import "../footer/footer.css";
import { FooterBottom } from "./bottom/FooterBottom";
export const Footer=({tag})=>{
    let location=useLocation();
    const DatainfoSociete=[
        {
            id:1,
            logo:Iconelocation,
            info:"Address",
            titre:"5171 W Campbell Ave undefined Kent, Utah 53127 United States"
        },
        {
            id:2,
            logo:Iconecall,
            info:"Call Us",
            titre:"(+91) - 540-025-124553"
        },
        {
            id:3,
            logo:Iconeemail,
            info:"Email",
            titre:"sale@Nest.com"
        },
        {
            id:4,
            logo:Iconeclock,
            info:"Hours",
            titre:"10:00 - 18:00, Mon - Sat"
        },

    ]
    const productfooter=[
        {
            id:1,
            titre:'About Us',
            auteur:'about'
        },
        {
            id:11,
            titre:'Delivery Information',
            auteur:'about'
        },
        {
            id:2,
            titre:'Privacy Policy',
            auteur:'about'
        },
        {
            id:3,
            titre:'Terms & Conditions',
            auteur:'about'
        },
        {
            id:4,
            titre:'Support Center',
            auteur:'about'
        },
        {
            id:5,
            titre:'Careers',
            auteur:'about'
        },
       
        {
            id:6,
            titre:'Sign In',
            auteur:'account'
        },
        {
            id:7,
            titre:'View Cart',
            auteur:'account'
        },
        {
            id:8,
            titre:'My Wishlist',
            auteur:'account'
        },
        {
            id:9,
            titre:'Track My Order',
            auteur:'account'
        },
        {
            id:10,
            titre:'Help Ticket',
            auteur:'account'
        },
        {
            id:12,
            titre:'Shipping Details',
            auteur:'account'
        },
        {
            id:13,
            titre:'Compare products',
            auteur:'account'
        },
        {
            id:14,
            titre:'Become a Vendor',
            auteur:'corporate'
        },
        {
            id:15,
            titre:'Affiliate Program',
            auteur:'corporate'
        },
        {
            id:16,
            titre:'Farm Business',
            auteur:'corporate'
        },
        {
            id:17,
            titre:'Farm Careers',
            auteur:'corporate'
        },
        {
            id:18,
            titre:'Our Suppliers',
            auteur:'corporate'
        },
        {
            id:19,
            titre:'Accessibility',
            auteur:'corporate'
        },
        {
            id:20,
            titre:'Promotions',
            auteur:'corporate'
        },
        {
            id:21,
            titre:'Butter and Margarine',
            auteur:'popular'
        },
        {
            id:22,
            titre:'Eggs Substitutes',
            auteur:'popular'
        },
        {
            id:23,
            titre:'Marmalades',
            auteur:'popular'
        },
        {
            id:24,
            titre:'Sour Cream and Dips',
            auteur:'popular'
        },
        {
            id:25,
            titre:'Tea & Kombucha',
            auteur:'popular'
        },
        {
            id:26,
            titre:'Cheese',
            auteur:'popular'
        },


    ]
return<div className="footer_m1">
{location.pathname!=="/" && <MenuBest/>}
<div className="footer_col-1"><InfoSciete DataInfo={DatainfoSociete}></InfoSciete></div>
<div className="footer_col-2"><FiltreProduit product={productfooter} tag={"about"} titre={"Compagny"}/></div>
<div className="footer_col-3"><FiltreProduit product={productfooter} tag={"account"} titre={"Acount"}/></div>
<div className="footer_col-4"><FiltreProduit product={productfooter} tag={"corporate"} titre={"Corporate"}/></div>
<div className="footer_col-5"><FiltreProduit product={productfooter} tag={"popular"} titre={"Popular"}/></div>
<FooterBottom/>
</div>
}
function FiltreProduit({product=[],tag,titre}){
 let prods=[];
 product.forEach((elt)=>{
    if(elt.auteur===tag){
        prods.push({id:elt.id,titre:elt.titre});
    }
 })
 return<>
<ul>
    <span className="libelle_menu">{titre}</span>
    {
        prods.map((elts)=>(
            <li key={elts.id} className="footer_menu">{elts.titre}</li>
        ))
    }
</ul>
 </>
 }
 function InfoSciete({DataInfo=[]}){
    return<>
<p><img src={logo} alt="logoSociete" style={{width:"80%", margin:"5px"}}></img></p>
  <ul>
    {
    DataInfo.map((data)=>(
     <li key={data.id} className="info_m1"><img src={data.logo} alt="logo svg" className="logo_cart"></img><span id="_titreSvg">{data.info} :</span><span id="titre_m1">{data.titre}</span></li>
    ))
    }
  </ul> 
  {/*footer*/}
  
  </>
 }