import React from "react";
import { NavSearchBar } from "./NavSearchBar";
import { Logo } from "./Logo";

export const NavMain = ({ Link }) => {
  return (
    <nav class="navbar navbar-expand-md ">
      <div class="navbar-collapse">
        <div class="nav-inner">
          <div className="row">
            <div class="col-lg-7 col-md-7 col-12">
              <ul
                class="nav main-menu menu navbar-nav"
                style={{
                  height: "70ox",
                }}
              >
                <li
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <Link to="#">
                    <i class="ti-menu-alt" style={{ fontSize: "20px" }}></i>
                  </Link>
                  <ul class="dropdown">
                    <li>
                      <Link to="/category/komponen-pc">Komponen PC</Link>
                    </li>
                    <li>
                      <Link to="/category/notebook-accesories">
                        Notebook & Accesories
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/computer-accesories">
                        Computer Accesories
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/gaming-accesories">
                        Gaming Accesories
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/contact">
                        Contact Us
                      </Link>
                    </li>  */}
                  </ul>
                </li>
                <li class="active">
                  {/* <Link to="/">Home</Link>  */}
                  <Logo Link={Link} />
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
