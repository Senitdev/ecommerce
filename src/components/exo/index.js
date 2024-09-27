
import { useState } from "react"
import "../exo/index.css"
export const Exo1=()=>{
  const menu=[
    "Home",
    "About",
    "Blog",
    "Contact",
    "Forum"
  ]
    const listeProd=[
        {
            titre:"Lait de corps",
            prix:55.8,
            auteur:"Nina",
            statut:"Sale",
            id:1
        },
        {
            titre:"Créme lai",
            prix:70.8,
            auteur:"Créme",
            statut:"Red",
            id:2
        },
        {
            titre:"Coco butter",
            prix:60.8,
            auteur:"Nina",
            statut:"",
            id:3
        },
        {
            titre:"Coco butter",
            prix:150,
            auteur:"Divers",
            statut:"Prix",
            id:4
        }
    ]
    const[toggleMenu,setToggleMenu]=useState(false);
    const handleClic=()=>{
        setToggleMenu(!toggleMenu)
        console.log(window.innerHeight);
    }
    
    return<>
    <div></div>
    {toggleMenu===true && <button className="toggle_menu"></button>}{ toggleMenu===true &&<div className="drowpdown_menu">
    {menu.map((lien)=>(
                <li className="menuDrop" key={lien}>{lien}</li>
            ))
        }
    </div>
}
  <button onClick={handleClic}>Afficher</button>
  {toggleMenu===false &&
    <ul className="menu">
        {
            menu.map((lien)=>(
                <li className="menu" key={lien}>{lien}</li>
            ))
        }
    </ul>
}
    <ul className="produit">
        {
listeProd.map((prod)=>(
    <li className="titre" key={prod.id}>{prod.titre}<br/>{prod.prix}<br/> {prod.auteur}<br/>{prod.statut && <div><button className="btn_statut">{prod.statut}</button></div>}</li>
          ))
        }
    
    </ul>
    </>
}