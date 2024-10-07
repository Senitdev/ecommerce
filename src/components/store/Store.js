import { createContext } from "react";
export const Store=createContext([
    {
        id:"1",
        titre:"titre1"
    },
    {
        id:"2",
        titre:"titre2"
    }
]
)
export function addProdui({prod=[]}){
Store.push({id:prod.id,titre:prod.titre})    
}
