import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screens/MyOrder";
// import Cart from "./screens/Cart";

function App() {
  return (
    <>
    <CartProvider>

    <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<SignUp />} />
            {/* <Route exact path="/cart" element={<Cart />} /> */}
            <Route exact path="/myorder" element={<MyOrder/>} />
          </Routes>
        </div>
      </Router>

    </CartProvider>
    </>
  );
}

export default App;
