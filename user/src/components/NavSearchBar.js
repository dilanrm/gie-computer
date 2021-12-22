import React from "react";

export const NavSearchBar = () => {
  return (
    <div class="col-lg-4 col-md-5 col-12">
      <div class="search-bar-top">
        {/* <div class="search-bar">
          <form>
            <input
              name="search"
              placeholder="Search Products Here....."
              type="search"
            />
            <button class="btnn">
              <i class="ti-search"></i>
            </button>
          </form>
        </div> */}

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search" />
          <div class="nice-select" tabindex="0" style={{backgroundColor: "white", fontSize:"8pt"}}>
            <span class="current">All Category</span>
            <ul class="list" style={{zIndex:"9999"}}>
              <li data-value="All Category" class="option selected focus">
                All Category
              </li>
              <li data-value="Komponen PC" class="option">
                Komponen PC
              </li>
              <li data-value="Notebook & Accesories" class="option">
                Notebook & Accesories
              </li>
              <li data-value="Computer Accesories" class="option">
                Computer Accesories
              </li>
              <li data-value="Gaming Accesories" class="option">
                Gaming Accesories
              </li>
            </ul>
          </div>
          <div class="input-group-append">
            <button class="btn" type="submit">
              <i class="ti-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
