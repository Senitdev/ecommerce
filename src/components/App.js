import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import Headers from "./header/Headers.js";
import { MesRoutes } from './route/MesRoutes.js';
function App() {
  return (
    <>
    <RouterProvider router={MesRoutes}/>
    <Headers/>
    </>
  );
}

export default App;
