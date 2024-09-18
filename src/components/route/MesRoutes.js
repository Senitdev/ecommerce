import { createBrowserRouter, Outlet } from "react-router-dom";
import { About } from "../pages/About";
import { Account } from "../pages/Account";
import { Contact } from "../pages/Contact";
import { ForgetPassword } from "../pages/ForgetPassword";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { Register } from "../pages/Register";
import { ResetPassword } from "../pages/ResetPassword";
import { TermeService } from "../pages/TermeService";
const AppLayout=()=>{
    <>
     <Outlet/> 
    </>
};
export const MesRoutes=createBrowserRouter([
{
    path:"/",
    Element:<AppLayout/>,
    errorElement:<Page404/>,
    Children:[
        {
            path:"about",
            Element:<About/>
        },
        {
            path:"/account",
            Element:<Account/>
        },
        {
            path:"/contact",
            Element:<Contact/>
        },
        {
            path:"/forgetpassword",
            Element:<ForgetPassword/>
        },
        {
            path:"/login",
            Element:<Login/>
        },
        {
            path:"/privacy",
            Element:<PrivacyPolicy/>
        },
        {
            path:"/puchase"
        },
        {
            path:"/register",
            Element:<Register/>
        },
        {
            path:"/reset",
            Element:<ResetPassword/>
        },
        {
            path:"/terme",
            Element:<TermeService/>
        }
    ]
}
])