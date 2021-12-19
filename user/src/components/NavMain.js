import React from "react";
import { NavSearchBar } from "./NavSearchBar";
import { Logo } from "./Logo";

export const NavMain = ({ Link }) => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="navbar-collapse">
        <div class="nav-inner">
          <div className="row">
            <div class="col-lg-7 col-md-7 col-12">
              <ul class="nav main-menu menu navbar-nav">
                <li class="active">
                  {/* <Link to="/">Home</Link> */}
                  <Logo Link={Link} />
                </li>
                <li>
                  <a href="#">
                    Shop<i class="ti-angle-down"></i>
                  </a>
                  <ul class="dropdown">
                    <li>
                      <Link to="/shop">Shop Grid</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <NavSearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};
