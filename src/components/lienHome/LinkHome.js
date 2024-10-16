import { Link, useLocation } from "react-router-dom";
import logoHome from "../../assets/linkHome/icons8-accueil-48.png";
import "../lienHome/linkhome.css";
export default function LinkHome(){
    let location=useLocation();
    let path=location.pathname;
    return<>
    <div style={{width:"98%", height:"55px", border:"2px solid whitesmoke",margin:"5px",paddingTop:"5px"}}>
    <Link to="/"><img src={logoHome} alt="logo link home" style={{width:"20px",marginLeft:"20px",marginTop:"-2px"}}/>Home</Link> <span className="arrowright"/>pages <span className="arrowright"/> {path.slice(1,50)}
    </div>
    </>
}