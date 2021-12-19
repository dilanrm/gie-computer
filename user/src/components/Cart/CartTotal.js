import React from "react";
import { Link } from "react-router-dom";

export const CartTotal = () => {
  return (
    <div class="row">
      <div class="col-12">
        {/* <!-- Total Amount --> */}
        <div class="total-amount">
          <div class="row">
            <div class="col-lg-8 col-md-5 col-12">
              <div class="left"></div>
            </div>
            <div class="col-lg-4 col-md-7 col-12">
              <div class="right">
                <ul>
                  <li>
                    Cart Subtotal<span>$330.00</span>
                  </li>
                  <li>
                    Shipping<span>Free</span>
                  </li>
                  {/* <li>You Save<span>$20.00</span></li> */}
                  <li class="last">
                    You Pay<span>$310.00</span>
                  </li>
                </ul>
                <div class="button5">
                  <Link to="/checkout" class="btn">
                    Checkout
                  </Link>
                  <Link to="/shop" class="btn">
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ End Total Amount --> */}
      </div>
    </div>
  );
};
