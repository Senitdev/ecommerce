import { createContext, useState } from "react";

export const storeShop=createContext({
    items:[]
});
export default function CarteProvider({children}){
   const [cartProduct,setCartProduct]=useState([]) ;
   const contextValue={
    items:cartProduct
   }
   return(
    <storeShop.Provider value={contextValue}>
        {children}
    </storeShop.Provider>
   )
}