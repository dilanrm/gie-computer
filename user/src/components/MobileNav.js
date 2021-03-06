import React from "react";
import { NavSearchForm } from "./NavSearchForm";

export const MobileNav = ({ client }) => {
  return (
    <div class="mobile-nav">
      <div class="slicknav_menu">
        <button
          aria-haspopup="true"
          role="button"
          tabindex="0"
          class="slicknav_btn slicknav_open"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          style={{ outline: "none", top: "0px" }}
        >
          <span class="slicknav_menutxt"></span>
          <span class="slicknav_icon slicknav_no-text">
            <span class="slicknav_icon-bar"></span>
            <span class="slicknav_icon-bar"></span>
            <span class="slicknav_icon-bar"></span>
          </span>
        </button>
        <div className="navbar-collapse collapse show">
          <ul
            class="slicknav_nav"
            role="menu"
            id="collapsibleNavbar"
            aria-hidden="false"
            style={{}}
          >
            <li class="active">
              <a href="#" role="menuitem" tabindex="0">
                Home
              </a>
            </li>
            <li class="slicknav_collapsed slicknav_parent">
              <a
                href="#"
                role="menuitem"
                aria-haspopup="true"
                tabindex="0"
                class="slicknav_item slicknav_row"
                style={{ outline: "none" }}
              >
                <a href="#" tabindex="0">
                  Shop<i class="ti-angle-down"></i>
                </a>
                <span class="slicknav_arrow">►</span>
              </a>
              <ul
                class="dropdown"
                role="menu"
                aria-hidden="true"
                style={{ display: "block" }}
              >
                <li>
                  <a href="shop-grid.html" role="menuitem" tabindex="0">
                    Shop Grid
                  </a>
                </li>
                <li>
                  <a href="cart.html" role="menuitem" tabindex="0">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="checkout.html" role="menuitem" tabindex="0">
                    Checkout
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <NavSearchForm client={client} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
