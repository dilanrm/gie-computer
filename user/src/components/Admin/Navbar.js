import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export const Navbar = ({ Logout }) => {
  const currRoute = useLocation().pathname;
  console.log(currRoute);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/admin">
        Gie Komputer
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className={
                currRoute === "/admin/produk" ? "nav-link active" : "nav-link"
              }
              to="/admin/produk"
            >
              Produk
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                currRoute === "/admin/kategori" ? "nav-link active" : "nav-link"
              }
              to="/admin/kategori"
            >
              Kategori
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                currRoute === "/admin/brand" ? "nav-link active" : "nav-link"
              }
              to="/admin/brand"
            >
              Brand
            </Link>
          </li>
        </ul>
      </div>
      <span
        className="navbar-text"
        onClick={() => Logout()}
        style={{ cursor: "pointer" }}
      >
        Sign out
      </span>
    </nav>
  );
};
