import React from "react";

export const ShopItem = () => {
  return (
    <div class="col-lg-4 col-md-6 col-12">
      <div class="single-product">
        <div class="product-img">
          <a
            data-toggle="modal"
            data-target="#exampleModal"
            title="Quick View"
            href="#"
          >
            <img
              class="default-img"
              src="https://via.placeholder.com/550x750"
              alt="#"
            />
            <img
              class="hover-img"
              src="https://via.placeholder.com/550x750"
              alt="#"
            />
          </a>
          <div class="button-head">
            <div class="product-action">
              <a
                data-toggle="modal"
                data-target="#exampleModal"
                title="Quick View"
                href="#"
              >
                <i class=" ti-eye"></i>
                <span>Quick Shop</span>
              </a>
            </div>
            <div class="product-action-2">
              <a title="Add to cart" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="product-content">
          <h3>
            <a href="product-details.html">Mountain Painting</a>
          </h3>
          <div class="product-price">
            <span>$29.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
