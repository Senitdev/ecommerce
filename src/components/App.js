import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { MesRoutes } from './route/MesRoutes';
function App() {
  return (
    <div>
  {/*<Headers/>*/}
  <RouterProvider router={MesRoutes}/>
    </div>
  );
}

export default App;
