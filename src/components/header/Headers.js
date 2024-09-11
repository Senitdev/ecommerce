import React from "react";
import searIcon from '../../assets/images/icons8-chercher.svg';
import logo from '../../assets/images/logo.svg';
import "../header/header.css";
import Select from "../selectDrop/Select";
const Headers=()=>{
    return<>
    <header>
    <div className="container-fluid">
      <div className='row'>
        <div className='col-sm-2'>
            <img src={logo} alt="Logo"/>
        </div>
        {/*headerSearch start here*/}
        <div className="headerSearch">
        <div className="selectDrop">
            All Categorie
            <Select/>
          </div>
          
          <div className="search">
            <input type="text" placeholder="Search here ...."/>
            <div className="searchIcon">
                <img src={searIcon} alt="search Icone"></img>
            </div>
            </div>
        </div>
          {/*headerSearch start here*/}
         
      </div>
    </div>
    </header>
    </>
}
export default Headers;