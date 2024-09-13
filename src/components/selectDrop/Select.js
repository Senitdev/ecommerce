import { ClickAwayListener } from "@mui/base";
import { useState } from "react";
import "../selectDrop/select.css";

const Select=()=>{
const[isOpenSelect, setisOpenSelect]=useState(false);
const[selectIndex,setselectIndex]=useState(0);
const[selectItem,setselectItem]=useState('All catégories');
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
<ClickAwayListener onClickAway={HandlClic}>
<div className="selectDrop">
<span className="openSelect" onClick={openSelect}>{selectItem}</span>
</div>
</ClickAwayListener>
{
isOpenSelect===true && 
<div className="selectDrope">
    <input type="text"/>
    <ul className="searchResut">
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
        <li onClick={()=>CloseSelect(14,"Fast food")}>Fast food</li>
    </ul>
</div>
}
</>
}

export default Select;