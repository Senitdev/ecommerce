import { ClickAwayListener } from '@mui/base';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import iconeArrow from '../../../assets/images/angle-down-solid.svg';
import iconehot from '../../../assets/images/icon-hot.svg';
import MegaMenu from '../megamenu/MegaMenu';
import '../navbar/Nav.css';
const Nav=()=>{
  const[openMenuHome,setopenMenuHome]=useState(false);
  const[openMenuShop,setopenMenuShop]=useState(false);
  const[openMenuVendor,setopenMenuVendor]=useState(false);
  const[openMenuBlog,setopenMenuBlog]=useState(false);
  const[openMegaMenu,setopenMegaMenu]=useState(false);
  const[openMenuPages,setopenmenuPages]=useState(false);
function handlClic(){
   setopenMenuHome(!openMenuHome);
   setopenMenuShop(false);
   setopenMenuVendor(false);
   setopenMenuBlog(false);
   setopenMegaMenu(false);
   setopenmenuPages(false);
    }
const handleShop=()=>{
   setopenMenuShop(!openMenuShop);
 setopenMenuHome(false);  
 setopenMenuVendor(false);
 setopenMenuBlog(false);
 setopenMegaMenu(false);
 setopenmenuPages(false);
}
const handleVendor=()=>{
setopenMenuVendor(!openMenuVendor);
setopenMenuHome(false);
setopenMenuShop(false);
setopenMenuBlog(false);
setopenMegaMenu(false);
setopenmenuPages(false);
}
const handleClose=()=>{
setopenMenuHome(false);
setopenMenuShop(false);
setopenMenuVendor(false);
setopenMenuBlog(false);
setopenMegaMenu(false);
setopenmenuPages(false);
}
const handleBlog=()=>{
    setopenMenuBlog(!openMenuBlog);
    setopenMenuHome(false);
    setopenMenuShop(false);
    setopenMenuVendor(false);
    setopenMegaMenu(false);
    setopenmenuPages(false);
}
const handleMegaMenu=()=>{
    setopenMegaMenu(!openMegaMenu);
    setopenMenuShop(false);
   setopenMenuVendor(false);
   setopenMenuBlog(false);
   setopenmenuPages(false);
}
const handleMenuPages=()=>{
    setopenmenuPages(!openMenuPages);
    setopenMenuShop(false);
    setopenMenuVendor(false);
    setopenMenuBlog(false);
    setopenMegaMenu(false);
}
return<div className="navBar">
<Button className='btn-allcategore'>All Categories</Button>
<ClickAwayListener onClickAway={()=>handleClose()} >
<ul>
    <li><img src={iconehot} alt="icone arrow down" className="iconehot"/>Deals</li>
    <li onMouseOver={()=>handlClic()}>Home<img src={iconeArrow} alt="icone arrow down" className="iconeDown"/></li>
    <li>About <img src={iconeArrow} alt="icone arrow down" className="iconeDown"/></li>
    <li onMouseOver={()=>handleShop()}>Shop <img src={iconeArrow} alt="icone arrow down" className="iconeDown"/></li>
    <li onMouseOver={()=>handleVendor()}>Vendor <img src={iconeArrow} alt="icone arrow down" className="iconeDown"/></li>
    <li onMouseOver={()=>handleMegaMenu()}>Mega Menu <img src={iconeArrow} alt="icone arrow down" className="iconeDown"/></li>
    <li onMouseOver={()=>handleBlog()}>Blog<img src={iconeArrow} alt="icone arrow down" className="iconeDown"/></li>
    <li onMouseOver={()=>handleMenuPages()}>Pages <img src={iconeArrow} alt="icone arrow down" className="iconeDown"/></li>
   
   {/*<span className='supportCenter'><img src={iconeSupport} alt="Icone support" className='iconeCenter'/>
    1900 - 888
    <p id="support">24/7 support center</p>
    </span>
    <li>Contact <img src={iconeArrow} alt="icone arrow down" className="iconeDown"/></li>
    */}
</ul>
</ClickAwayListener>
{ openMenuHome===true && 
    <div className='dropdownHome'>
    <ul>
        <li>Home1</li>
        <li>Home2</li>
        <li>Home3</li>
        <li>Home4</li>
        <li>Home6</li>
        <li>Home6</li>
    </ul>
</div>
}
{
openMenuShop===true &&
<div className='dropdownShop'>
    <ul>
        <li>Shop Grid - Right Sidebar</li>
        <li>Blog Category List</li>
        <li>Shop product</li>
        <li>Shop wide</li>
        <li>Shop cart</li>
        <li>Shop filter</li>
        <li>Shop checkout</li>
    </ul>
</div>
}
{openMenuVendor===true && 
<div className='dropdownVendor'>
    <ul>
        <li>Vendor Grid</li>
        <li>Vendor Listt</li>
        <li>Vendor Details 01</li>
        <li>Vendor Details 02</li>
        <li>Vendor Details 03</li>
        <li>Vendor Dashbord</li>
        <li>Vendor Guide</li>
    </ul>
</div>
}
{openMenuBlog===true &&
<div className='dropdownBlog'>
    <ul>
        <li>Blog Catégory Grid</li>
        <li>Blog Category List</li>
        <li>Blog Category</li>
        <li>Blog Category Big</li>
        <li>Blog Category Wide</li>
        <li>Sigle Post</li>
    </ul>
</div>
}
{openMenuPages===true &&
<div className='dropdownPages'>
    <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>My Account</li>
        <li>Login</li>
        <li>Register</li>
        <li>Forgot password</li>
        <li>Reset password</li>
        <li>Purchase Guide</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>404 Page</li>
    </ul>
</div>
}

{
openMegaMenu===true &&
    <div className="dropdownMega">
        <MegaMenu/>
    </div>
}

</div>
}
export default Nav;