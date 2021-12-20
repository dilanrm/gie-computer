import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="copyright">
        <div class="container">
          <div class="inner">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="left">
                  <p>Copyright © 2021</p>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="right">
                  <p>
                    <Link to="/contact" style={{textDecoration:"none"}}>Contact Us</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
