import React from "react";

export const Logo = ({ Link }) => {
  return (
    <div class="logo">
      <Link to="/" style={{ background: "rgba(0,0,0,0)", padding: "0 15px" }}>
        <img src="images/logo.png" alt="logo" />
      </Link>
    </div>
  );
};
