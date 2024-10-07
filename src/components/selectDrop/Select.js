import { useState } from "react";
import "../selectDrop/select.css";

const Select=()=>{
const[isOpenSelect, setisOpenSelect]=useState(false);
const[selectIndex,setselectIndex]=useState(0);
const[selectItem,setselectItem]=useState('All catégories');
//*Gestion des mots cles pour la recherche

const DataProd=([
    {id:1,
    titre:"All catégories"
    },
    {id:2,
    titre:"Milks and Dairies"
    },
    {id:3,
    titre:"Clothing & beauty"
    },
    {id:4,
     titre:"Pet Foods & Toy"
    },
    {id:5,
    titre:"Baking material"
    },
    {id:6,
    titre:"Fresh Fruit"
    },
    {id:7,
    titre:"Wines & Drinks"
    },
    {id:8,
    titre:"Fresh Seafood"
    },
    {id:9,
    titre:"Fast food"
    },
    {id:10,
    titre:"Vegetables"
    },
    {id:11,
    titre:"Bread and Juice"
    },
    {id:12,
    titre:"Fresh Fruit"
    },
    {id:13,
    titre:"Wines & Drinks"
    },
    {id:14,
    titre:"Fresh Seafood"
    },
    {id:15,
    titre:"Fast food"
    }
    ]);
const [menuSelect,setMenuSelect]=useState(DataProd);
const[motCle,setMotCle]=useState("");
const product=[...DataProd];
const productFiltre=[];
const handleSearch=(e)=>{
  setMotCle(e.target.value); 
if(motCle!==""){
 product.forEach((elt)=>{
    if(elt.titre.includes(motCle)){
     productFiltre.push({id:elt.id,titre:elt.titre});
     if(productFiltre.length!==0){
        setMenuSelect(productFiltre);
     }
    }
 })
}
if(motCle.length<2){
    setMenuSelect(DataProd);
}
}
const openSelect=()=>{
    setisOpenSelect(!isOpenSelect);
}
const CloseSelect=(index,name)=>{
setselectIndex(index);
setisOpenSelect(false);
setselectItem(name);
}
function HandlClic(){
setisOpenSelect(false);
}

return<>
<div className="selectDrop">
<span className="openSelect" onClick={openSelect}>{selectItem}</span>
</div>
{
isOpenSelect===true && 
<div className="selectDrope">
    <input type="text" name={motCle} onChange={handleSearch}/>
    <ul className="searchResut">
        {/*
        <li onClick={()=>CloseSelect(0,"All catégories")}>All catégories</li>
        <li onClick={()=>CloseSelect(1,"Milks and Dairies")}>Milks and Dairies</li>
        <li onClick={()=>CloseSelect(2,"Clothing & beauty")}>Clothing & beauty</li>
        <li onClick={()=>CloseSelect(3,"Pet Foods & Toy")}>Pet Foods & Toy</li>
        <li onClick={()=>CloseSelect(4,"Baking material")}>Baking material</li>
        <li onClick={()=>CloseSelect(5,"Fresh Fruit")}>Fresh Fruit</li>
        <li onClick={()=>CloseSelect(6,"Wines & Drinks")}>Wines & Drinks</li>
        <li onClick={()=>CloseSelect(7,"Fresh Seafood")}>Fresh Seafood</li>
        <li onClick={()=>CloseSelect(8,"Fast food")}>Fast food</li>
        <li onClick={()=>CloseSelect(9,"Vegetables")}>Vegetables</li>
        <li onClick={()=>CloseSelect(10,"Bread and Juice")}>Bread and Juice</li>
        <li onClick={()=>CloseSelect(11,"Fresh Fruit")}>Fresh Fruit</li>
        <li onClick={()=>CloseSelect(12,"Wines & Drinks")}>Wines & Drinks</li>
        <li onClick={()=>CloseSelect(13,"Fresh Seafood")}>Fresh Seafood</li>
        <li onClick={()=>CloseSelect(14,"Fast food")}>Fast food</li>*/}
        {
        menuSelect.map((eltmenu)=>(
            <li key={eltmenu.id} onClick={()=>CloseSelect(eltmenu.id,eltmenu.titre)}>{eltmenu.titre}</li>
        ))
    }
    </ul>
</div>
}
</>
}

export default Select;