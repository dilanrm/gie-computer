import React, { useState, useEffect } from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Loading } from "../components/Loading";

export const Checkout = ({ loading }) => {
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          <Breadcrumb />
          <section class="shop checkout section">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-12">
                  <div class="order-details">
                    {/* <!-- Order Widget --> */}
                    <div class="single-widget">
                      <h2>CART TOTALS</h2>
                      <div class="content">
                        <ul>
                          <li>
                            Sub Total<span>$330.00</span>
                          </li>
                          {/* <li>(+) Shipping<span>$10.00</span></li> */}
                          <li class="last">
                            Total<span>$340.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!--/ End Order Widget -->
                    <!-- Order Widget --> */}
                    <div class="single-widget">
                      <h2>Payments</h2>
                      <div class="content">
                        <div className="checkbox">
                          <div class="custom-control">
                            <select class="custom-select">
                              <option selected disabled>Custom payment method</option>
                              <option value="bank">Bank Transfer</option>
                              <option value="ovo">OVO</option>
                              <option value="gopay">Gopay</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ End Order Widget --> */}
                    {/* <!-- Payment Method Widget --> */}
                    <div class="single-widget payement">
                      <div class="content">
                        <img src="images/payment-method.png" alt="#" />
                      </div>
                    </div>
                    {/* <!--/ End Payment Method Widget --> */}
                    {/* <!-- Button Widget --> */}
                    <div class="single-widget get-button">
                      <div class="content">
                        <div class="button">
                          <a href="#" class="btn">
                            proceed to checkout
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ End Button Widget --> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
