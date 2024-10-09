import { createBrowserRouter, Outlet } from "react-router-dom";
import { About } from "../pages/About";
import { Account } from "../pages/Account";
import { ForgetPassword } from "../pages/ForgetPassword";
import { Login } from "../pages/Login";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { Register } from "../pages/Register";
import { ResetPassword } from "../pages/ResetPassword";
const AppLayout=()=>{
    return<>
     <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
     </ul>
     <Outlet/> 
    </>
};
export const router=createBrowserRouter([
{
    path:"/about",
    Element:<AppLayout/>,
    Children:[
        {
            path:'about',
            Element:<About/>
        },
        {
            path:'/account',
            Element:<Account/>
        },
        {
            path:"/contact",Component:<About/>
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
    ]
}
]);