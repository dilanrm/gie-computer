import React from "react";
import { Link, useParams } from "react-router-dom";

import { Breadcrumb } from "../components/Breadcrumb";
import { Loading } from "../components/Loading";

import "./product.css";

const base_url = "http://localhost:3000/static/images/";

export const Product = ({ loading, client }) => {
  const [prod, setProd] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [isTruncate, setIsTruncate] = React.useState(true);

  let { slug, id } = useParams();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const truncate = (str) => {
    return str.length > 121 ? str.substring(0, 120) + "..." : str;
  };

  React.useEffect(() => {
    const getProd = async (pid) => {
      const response = await client.get("/products/getOne/" + pid);
      const { data } = response;

      setProd(data[0]);
      console.log(prod);
    };
    const getImage = async (pid) => {
      const response = await client.get("/product-images/getOne/" + pid);
      const { data } = response;

      setImage(data);
      console.log(image);
    };

    getProd(id);
    getImage(id);
    document.title = prod ? prod.nama + " - Gie Komputer" : "Gie Komputer";
  }, []);

  if (!prod) return <Loading />;

  return (
    <>
      <Breadcrumb />
      <div className="container">
        <div
          className="card"
          style={{
            marginTop: "20px",
            borderTop: "blue 5px solid",
            borderRadius: "10px",
          }}
        >
          <div className="row">
            <aside className="col-sm-5 border-right">
              <article className="gallery-wrap">
                <div className="img-big-wrap" style={{padding:"40px 0 0 10px"}}>
                  <div>
                    {" "}
                    <a href="#">
                      <img
                        src={
                          !image
                            ? base_url + "defaultImage.jpg"
                            : image.filename
                        }
                        alt={!prod ? "foto produk" : prod.nama}
                      />
                    </a>
                  </div>
                </div>
                <div className="img-small-wrap">
                  {/* <div className="item-gallery">
                    {" "}
                    <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" />{" "}
                  </div>
                  <div className="item-gallery">
                    {" "}
                    <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" />{" "}
                  </div>
                  <div className="item-gallery">
                    {" "}
                    <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" />{" "}
                  </div>
                  <div className="item-gallery">
                    {" "}
                    <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" />{" "}
                  </div> */}
                </div>
              </article>
            </aside>
            <aside className="col-sm-7">
              <article className="card-body p-5">
                <h3 className="title mb-3">{prod.nama}</h3>

                <p className="price-detail-wrap">
                  <span className="price h3 text-warning">
                    <span className="num">{formatter.format(prod.harga)}</span>
                  </span>
                </p>
                <dl className="item-property">
                  <dt>Description</dt>
                  <dd>
                    {isTruncate ? (
                      <p>
                        {truncate(prod.deskripsi)}
                        <a
                          href="#"
                          onClick={() => setIsTruncate(false)}
                          style={{ color: "blue" }}
                        >
                          see more
                        </a>
                      </p>
                    ) : (
                      <p>
                        {prod.deskripsi}{" "}
                        <a
                          href="#"
                          onClick={() => setIsTruncate(true)}
                          style={{ color: "blue" }}
                        >
                          see less
                        </a>
                      </p>
                    )}
                  </dd>
                </dl>
                <dl className="param param-feature">
                  <dt>Stok</dt>
                  <dd>{prod.stock}</dd>
                </dl>
                <dl className="param param-feature">
                  <dt>Berat</dt>
                  <dd>{prod.berat} gram</dd>
                </dl>
                <dl className="param param-feature">
                  <dt>Kategori</dt>
                  <dd>{!prod.category ? null : prod.category.nama}</dd>
                </dl>
                <dl className="param param-feature">
                  <dt>Merek</dt>
                  <dd>{!prod.brand ? null : prod.brand.nama}</dd>
                </dl>

                <hr />
                <dl className="param param-feature">
                  <dt>Bagikan ke:</dt>
                  <dd>
                    <a
                      class="btn"
                      data-share="facebook"
                      href={
                        "https://www.facebook.com/sharer/sharer.php?u=" +
                        window.location.href
                      }
                      style={{
                        backgroundColor: "#3b5999",
                        color: "white",
                        padding: "12px 12px 9px",
                        borderRadius: "9px",
                        marginRight: "5px",
                      }}
                      target="facebook-share-dialog"
                    >
                      <i
                        class="fab fa-facebook"
                        style={{ fontSize: "17pt" }}
                      ></i>
                    </a>
                    <a
                      class="btn"
                      data-share="twitter"
                      href={
                        "http://twitter.com/share?text=Product: " +
                        prod.nama +
                        " &url=" +
                        window.location.href
                      }
                      style={{
                        backgroundColor: "#55acee",
                        color: "white",
                        padding: "12px 12px 9px",
                        borderRadius: "9px",
                        marginRight: "5px",
                      }}
                      target="twitter-share-dialog"
                    >
                      <i
                        class="fab fa-twitter"
                        style={{ fontSize: "17pt" }}
                      ></i>
                    </a>
                    <a
                      href={
                        "whatsapp://send?text=" +
                        prod.nama +
                        " - " +
                        window.location.href
                      }
                      className="btn btn-wa"
                      target="whatsapp-share-dialog"
                      style={{
                        backgroundColor: "#128c7e",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "9px",
                        marginRight: "5px",
                      }}
                      data-share="whatsapp"
                    >
                      <i
                        className="fab fa-whatsapp"
                        style={{ fontSize: "19pt" }}
                      ></i>
                    </a>
                  </dd>
                </dl>
                {/* <dl className="param param-feature">
                  <dt>Beli:</dt>
                  <dd>
                    <a
                      href={
                        "https://api.whatsapp.com/send?phone=+6281316521725&text=" +
                        prod.nama +
                        ": " +
                        window.location.href
                      }
                      className="btn btn-wa"
                      target="_blank"
                      style={{
                        backgroundColor: "#128c7e",
                        color: "white",
                        borderRadius: "9px",
                      }}
                    >
                      <i class="fab fa-whatsapp"></i> Whatsapp
                    </a>
                  </dd>
                </dl> */}
              </article>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
