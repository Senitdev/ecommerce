
import { useState } from "react";
import croix from "../../assets/cart/icons8-croix-24.png";
import svg1 from "../../assets/cart/thumbnail-2.jpg";
import svg2 from "../../assets/cart/thumbnail-3.jpg";
import "../cart/cart.css";
export const Cart=()=>{
    const product=[
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
    ]
const[Data,updateData]=useState(product);
const DataFiltre=[];
 const Total=()=>{
    let solde=0;
    Data.forEach((elt)=>{
     solde+=elt.prix*elt.qte
    })
    return solde;
 }
 const DeleteProduit=(id)=>{
   Data.forEach((elt)=>{
    if(elt.id!==id){
        DataFiltre.push({id:elt.id,image:elt.image,titre:elt.titre,qte:elt.qte,prix:elt.prix});
        updateData(DataFiltre);
    }

   })
    }
    return<div className="cart_menu">
    <ul>
       {
       Data.map((elt)=>(
        <li key={elt.id}><img src={elt.image} alt="Logo" style={{width:"25%",borderRadius:"5px"}}></img>{elt.titre}<img src={croix} alt="Logo croix" style={{width:"5%",marginLeft:"15px",margin:"5px"}} onClick={()=>DeleteProduit(elt.id)}></img><br/><span style={{position:"relative", left:"80px",top:"-20px"}}>{elt.qte} x  {elt.prix}</span></li>
       ))}
    
    <hr/>
    <p style={{color:"gray", fontWeight:"900", fontFamily:"sans serif"}}>Total : {Total()}</p>
    <hr/>
    <ul style={{display:"flex", flexDirection:"column"}}>
     <li><button id="btn_view">View Cart</button><button id="btn_checkout">Checkout</button></li>
    </ul>
    </ul>
 </div>
}