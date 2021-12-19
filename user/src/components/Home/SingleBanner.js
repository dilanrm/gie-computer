import React from "react";

export const SingleBanner = () => {
  return (
    <>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="single-banner">
          <img src="https://via.placeholder.com/600x370" alt="#" />
          <div class="content">
            <p>Painting Job</p>
            <h3>
              Top Illustrator <br /> collection
            </h3>
            <a href="#">Discover Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="single-banner">
          <img src="https://via.placeholder.com/600x370" alt="#" />
          <div class="content">
            <p>Original Fanart</p>
            <h3>
              New this Season <br /> 2021
            </h3>
            <a href="#">Discover Now</a>
          </div>
        </div>
      </div>
    </>
  );
};
