import { ClickAwayListener } from "@mui/base";
import { useMediaQuery } from "@uidotdev/usehooks";
import React, { useState } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import cart from '../../assets/images/icon-cart.svg';
import compart from '../../assets/images/icon-compare.svg';
import wishlist from '../../assets/images/icon-heart.svg';
import account from '../../assets/images/icon-user.svg';
import iconeTracker from '../../assets/images/iconDropdown/airplane-fill.svg';
import iconeBag from '../../assets/images/iconDropdown/bag.svg';
import iconeSignout from '../../assets/images/iconDropdown/box-arrow-right.svg';
import iconeAccount from '../../assets/images/iconDropdown/person.svg';
import iconeSetting from '../../assets/images/iconDropdown/sliders.svg';
import iconeHeart from '../../assets/images/iconDropdown/suit-heart.svg';
import searIcon from '../../assets/images/icons8-chercher.svg';
import logo from '../../assets/images/logo.svg';
import menu from "../../assets/responsive/icons8-menu-50.png";
import { Cart } from "../cart/Cart";
import { SlideCategorie } from "../carteSlide/SlideCategorie";
import "../header/header.css";
import "../header/headerMobile.css";
import Select from "../selectDrop/Select";
import Nav from "./navbar/Nav";
import { HomeSlider } from "./slider/HomeSlider";
const Headers=()=>{
//Responsivit"*/}
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) and (max-width : 992px)");
  const isLargeDevice = useMediaQuery( "only screen and (min-width : 993px) and (max-width : 1200px)");
  const isExtraLargeDevice = useMediaQuery("only screen and (min-width : 1201px)");
  const[motCle,setMotCle]=useState("");
const handleSearch=(e)=>{
  setMotCle(e.target.value);
}

  const[openDropdownMenu,setOpenDropdownMenu]=useState(false);
  const handleClicAnywhere=()=>{
   setOpenDropdownMenu(false);
  }
  const[openMenuMobile,setOpenMenuMobile]=useState(false);
  //Gestion panier contenu
  const[openCart,setOpenCart]=useState(false);

    return<>
  <ClickAwayListener onClickAway={handleClicAnywhere}>
    <header>
    {  isSmallDevice===false && 
    <div className="container-fluid">
      <div className='row'>
        <div className='col-sm-2'>
            <img src={logo} alt="Logo"/>
        </div>
        {/*headerSearch start here*/}
        <div className="headerSearch">
        <div className="selectDrop">
            <Select/>
          </div>
          
          <div className="search">
            <input type="text" placeholder="Search for item...." name={motCle} onChange={handleSearch}/>
            <div className="searchIcon">
                <img src={searIcon} alt="search Icone"></img>
            </div>
            </div>
        </div>
          {/*headerSearch start here*/} 
         
          <div className="iconeHeader">
            <ul>
              <li><span className="bgCompare"><Badge bg="success">3</Badge></span><img src={compart} alt="logo compare" className="logos"/>Compare</li>
              <li><span className="bgCompare"><Badge bg="success">6</Badge></span><img src={wishlist} alt="logo heart" className="logos"/>Wislist</li>
              <li><span className="bgCompare"><Badge bg="success">2</Badge></span><img src={cart} alt="Shoping logo" className="logos" onClick={()=>setOpenCart(!openCart)}/>Cart</li>
              <li onClick={()=>setOpenDropdownMenu(!openDropdownMenu)}><img src={account} alt="Icone user" className="logos"/>Account</li>
            </ul>
            </div> 
            {/*Toggle menu cart*/}
           { openCart===true && <div>
            <Cart/>
            </div>}
            {openDropdownMenu ===true && 
            <div className="dropdownmenuUser">
              <ul>
                <li><img src={iconeAccount} alt="Logo account" className="icone"/>My Account</li>
                <li><img src={iconeTracker} alt="Logo account" className="icone"/>Order Tracking</li>
                <li><img src={iconeBag} alt="Logo account" className="icone"/>My Voucher</li>
                <li><img src={iconeHeart} alt="Logo account" className="icone"/>My Wishlist</li>
                <li><img src={iconeSetting} alt="Logo account" className="icone"/>Setting</li>
                <li><img src={iconeSignout} alt="Logo account" className="icone"/>Sign out</li>
                </ul>
            </div>
            
}
{/*slider start*/}
<HomeSlider/>
<SlideCategorie/>
      </div>
      
     
    </div>
}
{
  isSmallDevice===true &&<div>
  <ul  style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
  <li><img src={menu} alt="menu" className="mobile_logo" onMouseOver={()=>setOpenMenuMobile(true)}></img></li>
   <li><div className='col-sm-2'>
      <img src={logo} alt="Logo" style={{minWidth:"80%",maxWidth:"100%",objectFit:"cover"}}/></div></li>
            <li><span style={{position:"absolute",top:"1px"}}><Badge bg="success" >6</Badge></span><img src={wishlist} alt="logo heart" className="logos"/></li>
           <li><span style={{position:"absolute",top:"1px"}}><Badge bg="success">2</Badge></span><img src={cart} alt="Shoping logo" className="logos"/></li>
       
  </ul>

  {openMenuMobile===true && <div><MenuDropDown/></div>}
  </div>
}
    </header>
    </ClickAwayListener>
    {
  isSmallDevice===false &&
 <Nav tag={"Desktop"}/>
    }
   
    </>
}
export default Headers;
function MenuDropDown(){
  return<>
  <ul className="menu_mobileDrop">
  <li>
   {/* <Nav tag={"tablette"}/>*/}
  </li>
  <li>Shop</li>
  <li>
    <Dropdown>
      <Dropdown.Toggle  id="Dropdown_basic" style={{background:"transparent", color:"black", border:"1px solid transparent"}}>
      Home
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <p>Home 1</p>
        </Dropdown.Item>
        <Dropdown.Item>
          <p>Home 2</p>
        </Dropdown.Item>
        <Dropdown.Item>
          <p>Home 3</p>
        </Dropdown.Item>
        <Dropdown.Item>
          <p>Home 4</p>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </li>
  <li>
  <Dropdown>
      <Dropdown.Toggle  id="Dropdown_basic" style={{background:"transparent", color:"black", border:"1px solid transparent"}}>
      Shop
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <p>Shop 1</p>
        </Dropdown.Item>
        <Dropdown.Item>
          <p>Shop 2</p>
        </Dropdown.Item>
        <Dropdown.Item>
          <p>Shop 3</p>
        </Dropdown.Item>
        <Dropdown.Item>
          <p>Shop 4</p>
        </Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      </li>
  </ul>
  </>
}