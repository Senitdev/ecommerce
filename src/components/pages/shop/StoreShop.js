import { createContext, useState } from "react";

export const storeShop=createContext({
    items:[],
    DeleteFromCart:()=>{}
});
export default function CarteProvider({children}){
   const [cartProduct,setCartProduct]=useState([]) ;
   const contextValue={
    items:cartProduct
   }
   function DeleteFromCart(id){
    setCartProduct(
        cartProduct.map(cartProduct=>cartProduct.filter(currentProduct=>{
         return currentProduct.id!==id;
        })
    ))
   }
   return(
    <storeShop.Provider value={contextValue}>
        {children}
    </storeShop.Provider>
   )
}