import React from "react";
import { Link, useParams } from "react-router-dom";

export const ShopByPrice = () => {
  let { brand } = useParams();
  return (
    <ul class="check-box-list">
      <li>
        <Link
          to="/search/komponen-pc/others"
          style={brand === "others" ? { pointerEvents: "none" } : {}}
        >
          Lainnya
        </Link>
      </li>
    </ul>
  );
};
