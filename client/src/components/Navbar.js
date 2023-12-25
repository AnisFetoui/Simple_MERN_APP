import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../redux/actions/authActions";

function Navbar({ user }) {
  const dispatch = useDispatch()
  const LogoutHanlder = ()=>{
     dispatch(Logout())
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
  
        <Link class="navbar-brand" to="#">
          MERN Profile
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {user.role === "ADMIN" ? (
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/admin">
                  ADMIN
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div class="d-flex">
            <div class="mx-4">
            {
               !user.isConnected ? (
                <>
                <Link className="btn btn-outline-primary" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline-primary" to="/register">
                Register
              </Link>
                </>
               ): (
                <Link className="btn btn-outline-primary"  to="#" onClick={LogoutHanlder}>
                Logout
              </Link>
               )
             }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
