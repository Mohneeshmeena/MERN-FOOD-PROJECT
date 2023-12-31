import './App.css';
import HOME from './components/SCREEN/HOME';
import LOGIN from './components/SCREEN/LOGIN';
import SIGN from './components/SCREEN/SIGN';
import MyOrder from './components/SCREEN/MyOrder';
import Allorders from './components/SCREEN/Admindata';
import { CartProvider } from './components/ContextReducer';
import Cart from './components/SCREEN/Cart';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Admin from './components/SCREEN/Adminpage'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<LOGIN></LOGIN>} />
            <Route exact path='/Home' element={<HOME></HOME>} />
            <Route exact path='/createuser' element={<SIGN></SIGN>} />
            <Route exact path='/cart' element={<Cart></Cart>} />
            <Route exact path='/myorder' element={<MyOrder></MyOrder>} />
            <Route exact path='/allorders' element={<Allorders></Allorders>} />
            <Route exact path='/adminpage' element={<Admin></Admin>} />

          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
