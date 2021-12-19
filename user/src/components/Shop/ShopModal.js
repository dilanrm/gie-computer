import React from "react";

export const ShopModal = () => {
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span class="ti-close" aria-hidden="true"></span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row no-gutters">
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                {/* <!-- Product Slider --> */}
                <div class="product-gallery">
                  <img src="https://via.placeholder.com/569x528" alt="#" />
                </div>
                {/* <!-- End Product slider --> */}
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div class="quickview-content">
                  <h2>Flared Shift Dress</h2>
                  <div class="quickview-ratting-review">
                    <div class="quickview-ratting-wrap">
                      <div class="quickview-ratting">
                        <i class="yellow fa fa-star"></i>
                        <i class="yellow fa fa-star"></i>
                        <i class="yellow fa fa-star"></i>
                        <i class="yellow fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <a href="#"> (1 customer review)</a>
                    </div>
                    <div class="quickview-stock">
                      <span>
                        <i class="fa fa-check-circle-o"></i> in stock
                      </span>
                    </div>
                  </div>
                  <h3>$29.00</h3>
                  <div class="quickview-peragraph">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia iste laborum ad impedit pariatur esse optio
                      tempora sint ullam autem deleniti nam in quos qui nemo
                      ipsum numquam.
                    </p>
                  </div>
                  <div class="add-to-cart">
                    <a href="#" class="btn">
                      Add to cart
                    </a>
                  </div>
                  <div class="default-social">
                    <h4 class="share-now">Share:</h4>
                    <ul>
                      <li>
                        <a class="facebook" href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a class="twitter" href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a class="youtube" href="#">
                          <i class="fa fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a class="dribbble" href="#">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
