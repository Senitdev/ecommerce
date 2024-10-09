import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from "../components/pages/Contact";
import Layout from './home/Layout';
import { About } from './pages/About';
import { Account } from './pages/Account';
import { ForgetPassword } from './pages/ForgetPassword';
import { Login } from './pages/Login';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import PurchasGuide from './pages/PurchasGuide';
import { Register } from './pages/Register';
import { ResetPassword } from './pages/ResetPassword';
import TermeService from './pages/TermeService;';
const router=createBrowserRouter([

  {
    path:'/',
    element:<Layout/>,
    children:[
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/account",
    element:<Account/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/forget",
    element:<ForgetPassword/>
  },
  {
    path:"reset",
    element:<ResetPassword/>
  },
  {
    path:"/purchasse",
    element:<PurchasGuide/>
  },
  {
    path:"/privacy",
    element:<PrivacyPolicy/>
  },
  {
    path:"/termes",
    element:<TermeService/>
  }
 ]
}]);
function App() {
  return<RouterProvider router={router}></RouterProvider>
}

export default App;
