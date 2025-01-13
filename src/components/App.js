import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from "../components/pages/Contact";
import ExoReducer from './exo/ExoReducer';
import TestClientKafka from './exo/KafkaClient';
import AppChat from './exo/chat/AppChat';
import Layout from './home/Layout';
import { About } from './pages/About';
import { Account } from './pages/Account';
import Cours from './pages/Cours';
import { ForgetPassword } from './pages/ForgetPassword';
import { Login } from './pages/Login';
import Page404 from './pages/Page404';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PurchasGuide from './pages/PurchasGuide';
import { Register } from './pages/Register';
import { ResetPassword } from './pages/ResetPassword';
import TermeService from './pages/TermeService';
import ViewCart from './pages/shop/ViewCart';
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
    path:"/purchase",
    element:<PurchasGuide/>
  },
  {
    path:"/privacy",
    element:<PrivacyPolicy/>
  },

  {
    path:"/termes",
    element:<TermeService/>
  },
  {
    path:"/pageError",
    element:<Page404/>
  },
  {
    path:"/viewcart",
    element:<ViewCart/>
  },
  {
    path:"/exercice",
    element:<Cours/>
  },
  {
    path:"/exercice2",
    element:<ExoReducer/>
  },
  {
    path:"/kafka",
    element:<TestClientKafka/>
  },
  {
    path:"/chat",
    element:<AppChat/>
  }
 ]
}]);
function App() {
  return<RouterProvider router={router}></RouterProvider>
}

export default App;
