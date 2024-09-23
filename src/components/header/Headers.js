import { ClickAwayListener } from "@mui/base";
import React, { useState } from "react";
import { Badge } from "react-bootstrap";
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
import { SlideCategorie } from "../carteSlide/SlideCategorie";
import "../header/header.css";
import Select from "../selectDrop/Select";
import Nav from "./navbar/Nav";
import { HomeSlider } from "./slider/HomeSlider";
const Headers=()=>{
  const[openDropdownMenu,setOpenDropdownMenu]=useState(false);
  const handleClicAnywhere=()=>{
    setOpenDropdownMenu(false);
  }
    return<>
    <header>
    <ClickAwayListener onClickAway={handleClicAnywhere}>
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
            <input type="text" placeholder="Search for item...."/>
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
              <li><span className="bgCompare"><Badge bg="success">2</Badge></span><img src={cart} alt="Shoping logo" className="logos"/>Cart</li>
              <li onMouseOver={()=>setOpenDropdownMenu(!openDropdownMenu)}><img src={account} alt="Icone user" className="logos"/>Account</li>
            </ul>
            </div> 
           
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
    </ClickAwayListener>
    </header>
  
    <Nav/>
    </>
}
export default Headers;