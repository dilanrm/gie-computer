import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { Loading } from "../components/Loading";
import { CategoryList } from "../components/Shop/CategoryList";
import { RecentPost } from "../components/Shop/RecentPost";
import { ShopByPrice } from "../components/Shop/ShopByPrice";
import { ShopItem } from "../components/Shop/ShopItem";
import { ShopModal } from "../components/Shop/ShopModal";
import { ShopSorter } from "../components/Shop/ShopSorter";

export const Shop = ({ loading, client, base_url }) => {
  const [prod, setProd] = React.useState(null);
  const [images, setImage] = React.useState(null);
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("query");
  console.log(query);

  let { category, brand } = useParams();

  console.log(category, brand);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  React.useEffect(() => {
    const getProd = async (cat) => {
      const response = await client.get("/products");
      const byCat =
        category !== undefined
          ? response.data.filter((val) => val.category.slug === cat)
          : response.data;
      const search =
        query === undefined || query === null || query === ""
          ? byCat
          : byCat.filter((val) =>
              val.nama.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
            );
      setProd(search);
      console.log(prod);
    };

    const getImages = async () => {
      const response = await client.get("/product-images");
      const { data } = response;

      setImage(data);
      console.log(images);
    };

    getProd(category);
    getImages();
    document.title =
      category === undefined
        ? "Search - Gie Komputer"
        : category.replace("-", " ").toLocaleUpperCase() + " - Gie Komputer";
    console.log(query);
  }, [category, brand, query]);

  if (!prod) return <Loading />;

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
                      <CategoryList />
                    </div>
                    {/* <!--/ End Single Widget --> */}
                    {/* <!-- Shop By Price --> */}
                    {/* <div class="single-widget range">
                      <h3 class="title">Brands</h3>
                      <ShopByPrice />
                    </div> */}
                    {/* <!--/ End Shop By Price --> */}
                    {/* <!-- Single Widget --> */}
                    {/* <div class="single-widget recent-post"> */}
                    {/* <h3 class="title">Recent post</h3> */}
                    {/* <!-- Single Post --> */}
                    {/* <RecentPost /> */}
                    {/* <!-- End Single Post --> */}
                    {/* </div> */}
                    {/* <!--/ End Single Widget --> */}
                  </div>
                </div>
                <div class="col-lg-9 col-md-8 col-12">
                  <ShopSorter />
                  <div class="row">
                    <ShopItem
                      base_url={base_url}
                      prods={prod}
                      images={images}
                      Link={Link}
                      formatter={formatter}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Modal --> */}
          {/* <ShopModal /> */}
          {/* <!-- Modal end --> */}
        </div>
      )}
    </>
  );
};
