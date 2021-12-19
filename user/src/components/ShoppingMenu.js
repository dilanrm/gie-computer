import React from "react";
import { Link } from "react-router-dom";

export const ShoppingMenu = () => {
  return (
    <div class="col-lg-2 col-md-3 col-12">
      <div class="right-bar">
        {/* <!-- Search Form --> */}
        <div class="sinlge-bar">
          <Link to="/profile" class="single-icon">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </Link>
        </div>
        <div class="sinlge-bar shopping">
          <a href="#" class="single-icon">
            <i class="ti-bag"></i> <span class="total-count">2</span>
          </a>
          {/* <!-- Shopping Item --> */}
          <div class="shopping-item">
            <div class="dropdown-cart-header">
              <span>1 Items</span>
              <a href="#">View Cart</a>
            </div>
            <ul class="shopping-list">
              <li>
                <a href="#" class="remove" title="Remove this item">
                  <i class="fa fa-remove"></i>
                </a>
                <a class="cart-img" href="#">
                  <img src="https://via.placeholder.com/70x70" alt="#" />
                </a>
                <h4>
                  <a href="#">Mountain Painting</a>
                </h4>
                <p class="quantity">
                  1x - <span class="amount">$99.00</span>
                </p>
              </li>
            </ul>
            <div class="bottom">
              <div class="total">
                <span>Total</span>
                <span class="total-amount">$134.00</span>
              </div>
              <Link to="/checkout" class="btn animate">
                Checkout
              </Link>
            </div>
          </div>
          {/* <!--/ End Shopping Item --> */}
        </div>
      </div>
    </div>
  );
};
