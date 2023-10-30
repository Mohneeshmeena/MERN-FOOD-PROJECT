import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import { useState } from 'react';
import { useCart } from './ContextReducer';
import Cart from './SCREEN/Cart';
import Modal from './Modal';

export default function MBAR() {

  const [cartView, setCartView] = useState(false)
  let data = useCart();
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')

    navigate("/LOGIN")
  }



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Foodmeel</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/myorder">MyOrder</Link>
              </li>


            </ul>

            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex'>
                <Link className="btn bg-white text-success mx-1 " to="/LOGIN">LOGIN</Link>
                <Link className="btn bg-white text-success mx-1 " to="/createuser">Sing Up</Link>
              </div> :
              <div>

                <div>
                  <button className="btn bg-white text-success" onClick={() => { setCartView(true) }} >
                    My Cart
                    <Badge pill bg="danger">{data.length}</Badge>
                  </button>
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}

                <div>
                  <button className="btn bg-white text-danger" onClick={handleLogout} >Logout</button>
                </div>
              </div>
            }

          </div>
        </div>
      </nav>
    </div>
  )
}
