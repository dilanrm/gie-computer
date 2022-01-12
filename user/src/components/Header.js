import React from "react";

import { Topbar } from "./Topbar";
import { Middlebar } from "./Middlebar";
import { Navbar } from "./Navbar";

export const Header = ({ client }) => {
  return (
    <header class="header shop">
      {/* <!-- Topbar --> */}
      <Topbar />
      {/* <!-- End Topbar --> */}
      <Middlebar client={client} />
      {/* <!-- Header Inner --> */}
      <Navbar client={client} />
      {/* <!--/ End Header Inner --> */}
    </header>
  );
};
