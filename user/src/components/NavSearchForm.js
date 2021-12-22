import React from "react";

export const NavSearchForm = () => {
  return (
    <div class="search-top">
      <div class="top-search">
        <a href="#0">
          <i class="ti-search"></i>
        </a>
      </div>
      {/* <!-- Search Form --> */}
      <div
        class="search-top active"
        // style={{
        //   right: "50px",
        //   top: "-57px",
        // }}
      >
        <form class="search-form" role="search">
          <input type="text" placeholder="Search here..." name="search" />
          <select className="form-control">
            <option value="" selected disabled>Pilih Kategori</option>
            <option value="1" key="">Komponen PC</option>
            <option value="2" key="">Notebook & Accesories</option>
            <option value="3" key="">Computer Accesories</option>
            <option value="4" key="">Gaming Accesories</option>
          </select>
          <button class="btn btn-success" value="search" type="submit">
            <i class="ti-search"></i>
          </button>
        </form>
      </div>
      {/* <!--/ End Search Form --> */}
    </div>
  );
};
