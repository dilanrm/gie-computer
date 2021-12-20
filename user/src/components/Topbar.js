import React from "react";
import { Link } from "react-router-dom";

export const Topbar = ({ Logout }) => {
  return (
    <div class="topbar" style={{padding: "3px"}}>
      <div class="container">
        <div class="row">
          {/* <div class="col-lg-4 col-md-12 col-12"> */}
            {/* <!-- Top Left --> */}
            <div class="top-left">
              <ul class="list-main">
                <li>
                  Welcome to Gie Komputer
                </li>
                <li>-</li>
                <li>
                  <i class="ti-headphone-alt"></i> 0877-2010-0061
                </li>
                <li>
                  <i class="ti-email"></i> Buka Senin-Sabtu, 07:30-21:00 WIB
                </li>
              </ul>
            </div>
            {/* <!--/ End Top Left --> */}
          {/* </div> */}
          {/* <div class="col-lg-8 col-md-12 col-12"> */}
            {/* <!-- Top Right --> */}
            {/* <div class="right-content">
              {JSON.parse(localStorage.getItem("user")).email === "" ? (
                <ul class="list-main">
                <li>
                  <i class="ti-user"></i> <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <i class="ti-power-off"></i>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
              ) : (
                <ul class="list-main">
                  <li>
                    <i class="ti-user"></i> <Link to="/profile">My account</Link>
                  </li>
                  <li>
                    <i class="ti-power-off"></i>
                    <a onClick={Logout}>Logout</a>
                  </li>
                </ul>
              )}
            </div> */}
            {/* <!-- End Top Right --> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
