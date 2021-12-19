import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Loading } from "../components/Loading";
import { CategoryList } from "../components/Shop/CategoryList";
import { RecentPost } from "../components/Shop/RecentPost";
import { ShopByPrice } from "../components/Shop/ShopByPrice";
import { ShopItem } from "../components/Shop/ShopItem";
import { ShopModal } from "../components/Shop/ShopModal";
import { ShopSorter } from "../components/Shop/ShopSorter";

export const Shop = ({ loading }) => {
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          <Breadcrumb />
          <section class="product-area shop-sidebar shop section">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-12">
                  <div class="shop-sidebar">
                    {/* <!-- Single Widget --> */}
                    <div class="single-widget category">
                      <h3 class="title">Categories</h3>
                      <CategoryList/>
                    </div>
                    {/* <!--/ End Single Widget --> */}
                    {/* <!-- Shop By Price --> */}
                    <div class="single-widget range">
                      <h3 class="title">Shop by Price</h3>
                      <ShopByPrice />
                    </div>
                    {/* <!--/ End Shop By Price --> */}
                    {/* <!-- Single Widget --> */}
                    <div class="single-widget recent-post">
                      <h3 class="title">Recent post</h3>
                      {/* <!-- Single Post --> */}
                      <RecentPost />
                      {/* <!-- End Single Post --> */}
                    </div>
                    {/* <!--/ End Single Widget --> */}
                  </div>
                </div>
                <div class="col-lg-9 col-md-8 col-12">
                  <ShopSorter />
                  <div class="row">
                    <ShopItem />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Modal --> */}
          <ShopModal />
          {/* <!-- Modal end --> */}
        </div>
      )}
    </>
  );
};
