import React from "react";
import { NavSearchBar } from "./NavSearchBar";
import { Logo } from "./Logo";

export const NavMain = ({ Link, client }) => {
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
                      <Link to="/search/komponen-pc">Komponen PC</Link>
                    </li>
                    <li>
                      <Link to="/search/notebook-and-accesories">
                        Notebook & Accesories
                      </Link>
                    </li>
                    <li>
                      <Link to="/search/computer-accesories">
                        Computer Accesories
                      </Link>
                    </li>
                    <li>
                      <Link to="/search/gaming-accesories">
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
            <NavSearchBar client={client} />
          </div>
        </div>
      </div>
    </nav>
  );
};
