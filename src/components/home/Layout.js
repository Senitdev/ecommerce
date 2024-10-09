import { Outlet } from "react-router-dom";
import Headers from "../../components/header/Headers";

export default function Layout(){
    return(
        <div>
            <Headers/>
            <Outlet/>
        </div>
    )
}