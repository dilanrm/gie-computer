import React from "react";

export const NavSearchBar = () => {
  return (
    <div class="col-lg-4 col-md-5 col-12">
      <div class="search-bar-top">
        <div class="search-bar">
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
        </div>
      </div>
    </div>
  );
};
