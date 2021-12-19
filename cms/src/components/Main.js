import React from "react";
import { Routes, Route } from "react-router-dom";

// import "../App.css";

import { Navbar } from "./Navbar";
import { Dashboard } from "./Dashboard";
import { Line } from "./Line";
import { Chart } from "./Chart";
import { User } from "./User";
import { Order } from "./Order";
import { Product } from "./Product";
import { Image } from "./Image";
import{ EditProd } from "./EditProd";
import { AddProd } from "./AddProd";

export const Main = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/edit/:id" element={<EditProd />} />
            <Route path="/product/add" element={<AddProd />} />
            <Route path="/order" element={<Order />} />
            <Route path="/user" element={<User />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/line" element={<Line />} />
            <Route path="/image" element={<Image />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
