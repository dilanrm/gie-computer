import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

export const ProdukEdit = ({ access_token, loading, client }) => {
  const history = useNavigate();
  const { id } = useParams();

  const [brands, setBrand] = useState(null);
  const [categories, setCat] = useState(null);

  const [values, setValues] = useState(null);

  const getProd = async (id) => {
    const response = await client.get("/products/getOne/" + id);
    setValues(response.data[0]);
  };

  const getBrand = async () => {
    const response = await client.get("/brands");
    setBrand(response.data);
  };

  const getCat = async () => {
    const response = await client.get("/categories");
    setCat(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(values);
    const data = values;
    const response = await client.put("/products/update/"+id, data, {
      headers: {
        "Content-Type": "application/json",
        access_token,
      },
    });

    console.log(response);

    history("/admin/produk");
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleReset = () => {
    setValues({
      nama: "",
      deskripsi: "",
      stock: 0,
      berat: 0,
      harga: 0,
      brandId: 0,
      categoryId: 0,
    });
  };

  useEffect(() => {
    getProd(id);
    getBrand();
    getCat();
    console.log(values);
  }, []);

  if (!values) return <Loading />;

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Produk</h1>
      </div>
      <h4>Edit Produk</h4>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="form-floating">
          <input
            name="nama"
            className="form-control"
            type="text"
            defaultValue={values.nama}
            onChange={handleChange("nama")}
          />
          <label htmlFor="floatingPassword">Nama Produk</label>
        </div>
        <div className="form-floating">
          <input
            name="harga"
            className="form-control"
            type="number"
            defaultValue={values.harga}
            onChange={handleChange("harga")}
          />
          <label htmlFor="floatingPassword">Harga Produk</label>
        </div>
        <div className="form-floating">
          <textarea
            name="deskripsi"
            cols="30"
            rows="10"
            onChange={handleChange("deskripsi")}
          >
            {values.deskripsi}
          </textarea>
          <label htmlFor="floatingPassword">Deskripsi Produk</label>
        </div>
        <div className="form-floating">
          <input
            name="berat"
            className="form-control"
            type="number"
            defaultValue={values.berat}
            onChange={handleChange("berat")}
          />
          <label htmlFor="floatingPassword">Berat Produk (gram)</label>
        </div>
        <div className="form-floating">
          <input
            name="stock"
            className="form-control"
            type="stock"
            defaultValue={values.stock}
            onChange={handleChange("stock")}
          />
          <label htmlFor="stock">Stock Produk</label>
        </div>
        <div className="form-floating">
          <select
            name="categoryId"
            className="form-control"
            onChange={handleChange("categoryId")}
          >
            <option value="" selected disabled>
              Pilih kategori
            </option>
            {!categories
              ? null
              : categories.map((cat, key) => {
                  return (
                    <option
                      value={cat.id}
                      selected={cat.id === values.categoryId}
                    >
                      {cat.nama}
                    </option>
                  );
                })}
          </select>
          <label for="floatingPassword">Produk gender</label>
        </div>
        <div className="form-floating">
          <select
            name="brandId"
            className="form-control"
            onChange={handleChange("brandId")}
          >
            <option value="" selected disabled>
              Pilih brand
            </option>
            {!brands
              ? null
              : brands.map((cat, key) => {
                  return (
                    <option value={cat.id} selected={cat.id === values.brandId}>
                      {cat.nama}
                    </option>
                  );
                })}
          </select>
          <label for="floatingPassword">Produk gender</label>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-success" title="add">
            Submit
          </button>
          <button type="reset" className="btn btn-warning" title="add">
            Reset
          </button>
        </div>
      </form>
    </main>
  );
};
