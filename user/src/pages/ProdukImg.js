import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProdukImg = ({ client, access_token, loading, base_url }) => {
  const history = useNavigate();
  const { id } = useParams();

  const [image, setImage] = useState({
    preview: base_url + "defaultImage.jpg",
    raw: "",
  });
  const [user, setUser] = useState(null);

  const avatarStyle = {
    // width: "350px",
    height: "350px",
  };

  const getUser = async () => {
    const response = await client.get("/product-images/getOne/" + id, {
      headers: { access_token },
    });

    setUser(response.data);
    if (response.data) {
      setImage({ preview: response.data.filename, raw: "" });
    }
  };

  const handleChange = (e) => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
    console.log(e.target.files);
    console.log(image);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("prodImg", image.raw);
    formData.append("primary", true);
    formData.append("productId", id);
    const config = {
      headers: { "Content-Type": "multipart/form-data", access_token },
    };
    const response = await client.post("/uploads/products", formData, config);
    if (response) {
      history("/admin/produk");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Produk</h1>
      </div>
      <h4>Edit Gambar Produk</h4>
      <div class="container py-5">
        {/* <!-- For demo purpose --> */}
        <header class="text-white text-center">
          {image.preview ? (
            <img
              src={image.preview}
              alt="..."
              class="img-fluid my-5"
              style={avatarStyle}
            />
          ) : (
            <>
              <img
                src={user.filename}
                alt="..."
                class="img-fluid my-5"
                style={avatarStyle}
              />
            </>
          )}
        </header>

        <div class="row py-4">
          <div class="col-lg-6 mx-auto">
            {/* <!-- Upload image input--> */}
            <form onSubmit={handleUpload} encType="multipart/form-data">
              <div class="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                <input
                  id="upload"
                  type="file"
                  name="prodImg"
                  onChange={handleChange}
                  class="form-control border-0"
                />
                <label
                  id="upload-label"
                  htmlFor="upload"
                  class="font-weight-light text-muted"
                >
                  Choose file
                </label>
                <div class="input-group-append">
                  <label
                    htmlFor="upload"
                    class="btn btn-light m-0 rounded-pill px-4"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <i class="fa fa-cloud-upload mr-2 text-muted"></i>
                    <small class="text-uppercase font-weight-bold text-muted">
                      Choose file
                    </small>
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="Upload Gambar"
                className="form-control btn"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
