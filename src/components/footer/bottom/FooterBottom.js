import iconePhoneCall from "../../../assets/footer/phone-call.svg";
import iconeFacebook from "../../../assets/footer/socialMedia/icon-facebook-white.svg";
import iconeInstagram from "../../../assets/footer/socialMedia/icon-instagram-white.svg";
import iconeTwitter from "../../../assets/footer/socialMedia/icon-twitter-white.svg";
import iconeYoutube from "../../../assets/footer/socialMedia/icon-youtube-white.svg";
import "../bottom/footerbottom.css";
export function FooterBottom(){

return<div className="footer_bottom">
<div className="bottom_trait"></div>
<div className="bottom_m1">
    <p style={{fontFamily:'Times New Roman, Times, serif',fontSize:'15px'}}>Copyright Sen IT SARL 2024.<br/>All Rights Reserved</p>
    </div>
<div className="bottom_m2">
    <span><img src={iconePhoneCall} alt="Logo" style={{width:"8%"}}></img></span><span style={{fontSize:"30px", color:"#3BB77E",fontWeight:600,margin:"5px"}}>1900 - 6666</span><br/><span style={{color:"gray",fontSize:"12px", position:"relative",left:"40px",top:"-15px"}}>Working 8:00 - 22:00</span><br/>
    <span style={{position:"relative",left:"20px"}}><img src={iconePhoneCall} alt="Logo" style={{width:"8%"}}></img><span style={{fontSize:"30px", color:"#3BB77E",fontWeight:600,margin:"5px",}}>1900 - 8888</span><br/><span style={{color:"gray",fontSize:"12px", position:"relative",left:"40px",top:"-10px"}}>24/7 Support center</span></span>
</div>
<div className="bottom_m3">
    <p style={{fontWeight:"900", textAlign:"",position:"relative",top:"25px"}}>Follow Us 
    <img src={iconeFacebook} alt="iconefacebook" className="social_media"/> 
    <img src={iconeTwitter} alt="iconeTwiter"  className="social_media"/>
    <img src={iconeInstagram} alt="iconeIntagram"  className="social_media"/>
    <img src={iconeTwitter} alt="iconePinterest"  className="social_media"/>
    <img src={iconeYoutube} alt="iconeYoutub"  className="social_media"/></p>
    <p style={{color:"gray", fontSize:"15px", textAlign:"left", padding:"8px"}}>Up to 15% discount on your first subscribe</p>
</div>
</div>
}