import React from "react";
import { Loading } from "../Loading";

export const ShopItem = ({ prods, images, Link, formatter, base_url }) => {
  const src = base_url + "defaultImage.jpg";

  if (!images) return <Loading />;

  return (
    <>
      {!prods
        ? null
        : prods.map((prod, key) => {
            return (
              <div class="col-lg-4 col-md-6 col-12">
                <div class="single-product">
                  <div class="product-img">
                    <Link to={`/product/${prod.slug}/${prod.id}`}>
                      <img
                        class="default-img"
                        src={
                          !images
                            ? src
                            : images.reduce((result, img) => {
                                if (img.product.id === prod.id) {
                                  result = img.filename;
                                } else result = src;
                                return result;
                              }, [])
                        }
                        alt="#"
                      />
                      <img
                        class="hover-img"
                        src={
                          !images
                            ? src
                            : images.reduce((result, img) => {
                                if (img.product.id === prod.id) {
                                  result = img.filename;
                                } else result = src;
                                return result;
                              }, [])
                        }
                        alt="#"
                      />
                    </Link>
                    {/* <div class="button-head">
                      <div class="product-action">
                        <Link to={`/product/${prod.slug}/${prod.id}`}>
                          <i class=" ti-eye"></i>
                          <span>Lihat Detail</span>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                  <div class="product-content">
                    <h3>
                      <Link to={`/product/${prod.slug}/${prod.id}`}>
                        {prod.nama}
                      </Link>
                    </h3>
                    <div class="product-price">
                      <span>{formatter.format(prod.harga)}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};
