import React from "react";

export const RecentPost = () => {
  return (
    <div class="single-post first">
      <div class="image">
        <img src="https://via.placeholder.com/75x75" alt="#" />
      </div>
      <div class="content">
        <h5>
          <a href="#">Mountain Printing</a>
        </h5>
        <p class="price">$99.50</p>
        <ul class="reviews">
          <li class="yellow">
            <i class="ti-star"></i>
          </li>
          <li class="yellow">
            <i class="ti-star"></i>
          </li>
          <li class="yellow">
            <i class="ti-star"></i>
          </li>
          <li>
            <i class="ti-star"></i>
          </li>
          <li>
            <i class="ti-star"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
