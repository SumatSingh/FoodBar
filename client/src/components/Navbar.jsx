import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import { useState } from "react";
// import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import  Modal  from "../Modal";
// import { model } from 'mongoose'
import Cart from '../screens/Cart'
import { useCart } from "./ContextReducer";



export default function Navbar() {

  const [cartView, setCartView] = useState(false)
  let data = useCart();

  const navigate = useNavigate();

  const  handleLogout = ()=>{
     localStorage.removeItem("authToken");
     navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 fst-italic" to="/">
            FoodBar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {(localStorage.getItem("authToken"))?
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/myorder"
                >
                  My Orders   
                </Link>
              </li>
              : ""}
            </ul>
{
  (!localStorage.getItem("authToken"))? 
  <div className="d-flex">
  <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
<Link className="btn bg-white text-success mx-1" to="./createuser">SignUp</Link>
            </div>
  :
  <div>

     <div className="btn bg-white text-success mx-2" onClick={()=>{setCartView(true)}}> 
      MyCart {" "}
      <Badge pill bg="danger"> {data.length} </Badge>    
      </div>

        {cartView? <Modal onClose={()=>setCartView(false)}><Cart /></Modal>:null}

     <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>
  
  </div>
  }

 

          </div>
        </div>
      </nav>
    </div>
  );
}

// L no. 13 navbarSupportedContent
// L no. 14 navbarSupportedContent
