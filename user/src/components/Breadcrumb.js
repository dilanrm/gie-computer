import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const Breadcrumb = () => {
  let currRoute = useLocation().pathname.toLowerCase();
  currRoute = currRoute.split("/");
  let locat = "/";
  return (
    <div class="breadcrumbs">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="bread-inner">
              <ul class="bread-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {currRoute.map((rute, key) => {
                  console.log(locat);
                  if (rute !== "") {
                    locat += rute + "/";
                    return (
                      <li className="active">
                        <i class="ti-arrow-right"></i>
                        <Link to={locat}>
                          {rute.replace("-", " ")}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
