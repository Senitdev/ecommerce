import { useMediaQuery } from "@uidotdev/usehooks";
import { useContext } from "react";
import { Store } from "../store/Store";
export const Menu=()=>{
const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) and (max-width : 992px)");
  const isLargeDevice = useMediaQuery( "only screen and (min-width : 993px) and (max-width : 1200px)");
  const isExtraLargeDevice = useMediaQuery("only screen and (min-width : 1201px)");
 const data=useContext(Store);
const prod=
[
   {
      id:"7",
      titre:"titre 7"
   },
   {
      id:8,
      titre:"titre 8"
   },
   {
      id:9,
      titre:"titre 9"
   }
]
return<>
     {
        isMediumDevice===true && <button>Medium device</button>
     }
     {
        isLargeDevice===true && <button>Large device</button>
     }
     {
        isSmallDevice===true && <button>smal device</button>
     }
     {
        isExtraLargeDevice===true && <button>Extra large device</button>
     }
     Data du store:
     <ul>{
     data.map((elt)=>(
      <li>{elt.id} {elt.titre}</li>
     ))}
     </ul>
     <ul>
      <p>Donnée 2:</p>
      {
      }
     </ul>
    </>
}