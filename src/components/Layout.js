import { Link } from "react-router-dom";

export default function Layout(){
return<>
<ul>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/">Home</Link></li>
</ul>
</>
}