import React from "react";

export const CartTable = () => {
  return (
    <div class="row">
      <div class="col-12">
        {/* <!-- Shopping Summery --> */}
        <table class="table shopping-summery">
          <thead>
            <tr class="main-hading">
              <th>PRODUCT</th>
              <th>NAME</th>
              <th class="text-center">UNIT PRICE</th>
              <th class="text-center">TOTAL</th>
              <th class="text-center">
                <i class="ti-trash remove-icon"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="image" data-title="No">
                <img src="https://via.placeholder.com/100x100" alt="#" />
              </td>
              <td class="product-des" data-title="Description">
                <p class="product-name">
                  <a href="#">Mountain Painting</a>
                </p>
                <p class="product-des">
                  Maboriosam in a tonto nesciung eget distingy magndapibus.
                </p>
              </td>
              <td class="price" data-title="Price">
                <span>$110.00 </span>
              </td>
              <td class="total-amount" data-title="Total">
                <span>$220.88</span>
              </td>
              <td class="action" data-title="Remove">
                <a href="#">
                  <i class="ti-trash remove-icon"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!--/ End Shopping Summery --> */}
      </div>
    </div>
  );
};
