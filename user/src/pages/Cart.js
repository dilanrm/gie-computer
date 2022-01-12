import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { CartTable } from "../components/Cart/CartTable";
import { CartTotal } from "../components/Cart/CartTotal";
import { Loading } from "../components/Loading";
 
export const Cart = ({ loading }) => {
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          <Breadcrumb />
          <div class="shopping-cart section">
            <div class="container">
              <CartTable />
              <CartTotal />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
