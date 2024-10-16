import { useContext } from 'react';
import iconeSignout from '../../../assets/images/iconDropdown/box-arrow-right.svg';
import { Footer } from "../../footer/Footer";
import LinkHome from "../../lienHome/LinkHome";
import { storeShop } from './StoreShop';
import "./viewcart.css";
export default function ViewCart(){
    const product=[
        {
            id:1,
            designation:"test1",
            prix:60.2,
            quantite:1,
            image:"image1",
        },
        {
            id:2,
            designation:"test2",
            prix:60.2,
            quantite:2,
            image:"image2",
        },
        {
            id:3,
            designation:"test3",
            prix:60.2,
            quantite:3,
            image:"image3",
        }
    ]
    const TiteMenu=[
        "Unit",
        "Price",
        "Quantity",
        "Subtotal",
        "Remove"
    ]
    const productStore=useContext(storeShop);
    
    return<>
    <LinkHome/>
    <p style={{margin:"5px", fontSize:"50px", fontWeight:"900", fontFamily:"Quicksand, sans-serif"}}>Your Cart</p>
    <p style={{margin:"5px",fontFamily:"Quicksand, sans-serif", fontSize:"18px",fontWeight:"500",paddingLeft:"5px"}}>There are 3 in your cart</p>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
    <div className="shop_header">
        <div style={{width:"100%", borderRadius:"10px",height:"70px",background:"#ECECEC"}}>
        <ul className="card_menu">
            <input type="checkbox"/><span style={{position:"relatif", paddingLeft:"10px"}}>Product</span>
           {
            TiteMenu.map((elt)=>(
                <li key={elt}>{elt}</li>
            ))
           }
        </ul>
        <ul className="shop_cart">
       {
        product.map((data)=>(
            <li key={data.id}>{data.image}{data.designation} {data.prix}</li>
        ))
       }
      </ul>
        </div>
        </div>
        <div className="card_resume">
            <ul className="input_card_resume">
                <li><input type="text" name="subtotal" placeholder="Subtotal"/></li>
                <li><input type="text" name="subtotal" placeholder="Shipping"/></li>
                <li><input type="text" name="subtotal" placeholder="Estimate for"/></li>
                <li><hr id="_hr"/></li>
                <li><input type="text" name="subtotal" placeholder="Total"/></li>
              
                <button className="btn_checkout">Process To CheckOut <img src={iconeSignout} alt="Logo account" className="icone"/></button>
            </ul>
        </div>
    </div>
    <Footer/>
    </>
}