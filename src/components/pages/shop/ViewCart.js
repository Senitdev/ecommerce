import { useState } from "react";
import svg1 from "../../../assets/cart/thumbnail-2.jpg";
import svg2 from "../../../assets/cart/thumbnail-3.jpg";
import iconeDelete from "../../../assets/images/delete.svg";
import iconeCompare from "../../../assets/images/icon-compare.svg";
import iconeSignout from '../../../assets/images/iconDropdown/box-arrow-right.svg';
import { Footer } from "../../footer/Footer";
import LinkHome from "../../lienHome/LinkHome";
import "./viewcart.css";
export default function ViewCart(){
    const [product,setProduct]=useState([
        {
            id:1,
            image:svg1,
            titre:"Daisy Casual Bag",
            qte:3,
            prix:1500
        },
        {
            id:2,
            image:svg2,
            titre:"Corduroy Shirts",
            qte:5,
            prix:1500
        },
        {
            id:3,
            image:svg2,
            titre:"Popy Net",
            qte:4,
            prix:1500
        }
    ])
    const CopieProduct=[...product];
 const Substotal=()=>{
    let solde=0;
    product.forEach((elt)=>{
        solde+=elt.prix*elt.qte
    })
    return  "$"+solde;
 }
    const TiteMenu=[
        "Unit",
        "Price",
        "Quantity",
        "Subtotal",
        "Remove"
    ]
  const[selectedID,setSelectedID]=useState([]);
  const HandleCheckboxChange=(event)=>{
    const checkedId=event.target.value;
    if(event.target.checked){
        setSelectedID([...selectedID,checkedId]);
    }
    else{
        setSelectedID(selectedID.filter(id=>id !==checkedId))
  }
}
let productCopie=[];
    const Handledelete=(id)=>{
    selectedID.find((elt)=>{
     product.forEach((prod)=>{
        if(prod.id!==id){
            productCopie.push({id:prod.id,image:prod.image,titre:prod.titre,qte:prod.qte,prix:prod.prix});
            setProduct(productCopie);
        }
     }) 
     return true;    
    }
    )
    }
   const HandleUpdate=()=>{
    setProduct(CopieProduct);
   }
    return<>
    <LinkHome/>
    <p style={{margin:"5px", fontSize:"50px", fontWeight:"900", fontFamily:"Quicksand, sans-serif"}}>Your Cart</p>
    <p style={{margin:"5px",fontFamily:"Quicksand, sans-serif", fontSize:"18px",fontWeight:"500",paddingLeft:"5px"}}>There are 3 in your cart</p>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
    <div className="shop_header">
        <div style={{width:"100%", borderRadius:"10px",height:"70px",background:"#ECECEC"}}>
        <ul className="card_menu">
            <input type="checkbox" style={{position:"relative",top:"-5px"}}/><span style={{position:"relatif", paddingLeft:"10px"}}>Product</span>
           {
            TiteMenu.map((elt)=>(
                <li key={elt} style={{paddingLeft:"5px", marginLeft:"10px"}}>{elt}</li>
            ))
           }
        </ul>
        <ul className="shop_cart">
       {
        product.map((data)=>(
            <li key={data.id}><input type="checkbox" value={data.id} onChange={(event)=>HandleCheckboxChange(event)}  style={{width:"30px", height:"20px", position:"relative", left:"-15px"}}/> <img src={data.image} alt="logo " className="_cart_productImage"></img>{data.titre} <span style={{fontSize:"18px",fontFamily:"Quicksand, sans-serif", fontWeight:"700"}}>$</span>{data.qte} {data.prix}<img src={iconeDelete} alt="log" className="_icone_trace" onClick={()=>Handledelete(data.id)}></img></li>
        ))
       }
      </ul>
        </div>
        </div>
        <div className="card_resume">
            <ul className="input_card_resume">
                <li><input type="text" name="subtotal" placeholder="Subtotal" /></li>
                <li><input type="text" name="subtotal1" placeholder="Shipping"/></li>
                <li><input type="text" name="subtotal2" placeholder="Estimate for"/></li>
                <li><hr id="_hr"/></li>
                <li><input type="text" name="subtotal" placeholder="Total" value={Substotal()}/></li>
                <button className="btn_checkout">Process To CheckOut <img src={iconeSignout} alt="Logo account" className="icone"/></button>
            </ul>
        </div>
    </div>
    <ul style={{display:"flex",flexDirection:"row",flexWrap:"wrap", justifyContent:"space-around", width:"700px"}}>
    <li><button className="btn_checkout">Continue Shopping</button></li>
    <li><button className="btn_checkout" onClick={()=>HandleUpdate()}><img src={iconeCompare} alt="Logo account" className="icone"/>update cart</button></li>
    </ul>
    <Footer/>
    </>
}