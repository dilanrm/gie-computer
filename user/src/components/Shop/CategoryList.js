import React from "react";
import { Link, useParams } from "react-router-dom";

export const CategoryList = () => {
  let { category } = useParams();
  console.log(useParams());
  return (
    <ul class="categor-list">
      <li>
        <Link
          to="/search/komponen-pc"
          style={category === "komponen-pc" ? { pointerEvents: "none" } : {}}
        >
          Komponen PC
        </Link>
      </li>
      <li>
        <Link
          to="/search/notebook-and-accesories"
          style={
            category === "notebook-and-accesories"
              ? { pointerEvents: "none" }
              : {}
          }
        >
          Notebook & Accesories
        </Link>
      </li>
      <li>
        <Link
          to="/search/computer-accesories"
          style={
            category === "computer-accesories" ? { pointerEvents: "none" } : {}
          }
        >
          Computer Accesories
        </Link>
      </li>
      <li>
        <Link
          to="/search/gaming-accesories"
          style={
            category === "gaming-accesories" ? { pointerEvents: "none" } : {}
          }
        >
          Gaming Accesories
        </Link>
      </li>
    </ul>
  );
};
