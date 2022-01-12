import React from "react";
import { Navigate, useNavigate as history, Link } from "react-router-dom";

export const ProdukList = ({ access_token, client, loading }) => {
  const [prods, setProd] = React.useState(null);
  const [category, setCat] = React.useState("all");
  const [catList, setCatList] = React.useState(null);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const getProd = async (cat) => {
    const response = await client.get("/products");
    const byCat =
      category !== "all"
        ? response.data.filter((val) => val.category.slug === cat)
        : response.data;
    setProd(byCat);
    console.log(prods);
  };

  const getCat = async () => {
    const response = await client.get("/categories");
    setCatList(response.data);
  };

  async function deleteData(id) {
    let result = window.confirm("Yakin menghapus data ini?");
    if (result) {
      await client.delete("/products/delete/" + id, {
        headers: { access_token },
      });
      await client.delete("/product-images/delete/" + id, {
        headers: { access_token },
      });
      alert("Post deleted!");
      getProd();
    }
  }

  React.useEffect(() => {
    getProd(category);
    getCat();
    console.log(prods);
  }, [category]);

  if (!prods) return null;

  if (access_token === "") {
    return <Navigate to="/admin" />;
  }

  return (
    <>
      <main class="container">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Produk</h1>
          <select
            class="custom-select"
            id="inputGroupSelect04"
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="all" selected>
              Semua Kategori
            </option>
            {!catList
              ? null
              : catList.map((cate, key) => {
                  return (
                    <option value={cate.slug} key={key}>
                      {cate.nama}
                    </option>
                  );
                })}
          </select>
          <Link className="btn btn-primary" to="/admin/produk/add">
            Tambah Produk Baru
          </Link>
        </div>
        <h4>Produk List</h4>
        <div class="table-responsive-sm">
          <table class="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nama</th>
                <th scope="col">Deskripsi</th>
                <th scope="col">Stock</th>
                <th scope="col">Berat</th>
                <th scope="col">Harga</th>
                <th scope="col">Merek</th>
                <th scope="col">Kategori</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {!prods
                ? null
                : prods.map((prod, key) => {
                    return (
                      <tr>
                        <td>{prod.nama}</td>
                        <td>{prod.deskripsi}</td>
                        <td>{prod.stock}</td>
                        <td>{prod.berat} gram</td>
                        <td>{formatter.format(prod.harga)}</td>
                        <td>{prod.brand.nama}</td>
                        <td>{prod.category.nama}</td>
                        <td>
                          <button
                            className="btn btn-sm"
                            title="delete"
                            onClick={() => deleteData(prod.id)}
                          >
                            <i class="far fa-trash-alt"></i>
                          </button>
                          <Link
                            to={"/admin/produk/edit/" + prod.id}
                            className="btn btn-sm"
                            title="edit"
                          >
                            <i class="fas fa-edit"></i>
                          </Link>
                          <Link
                            to={"/admin/produk/image/" + prod.id}
                            className="btn btn-sm"
                            title="add/edit image"
                          >
                            <i class="far fa-image"></i>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};
