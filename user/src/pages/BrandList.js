import React from "react";
import { Navigate, useNavigate as history, Link } from "react-router-dom";

export const BrandList = ({ client, loading, access_token }) => {
  const [brands, setBrand] = React.useState(null);

  const getCat = async () => {
    const response = await client.get("/brands");
    setBrand(response.data);
  };

  async function deleteData(id) {
    let result = window.confirm("Yakin menghapus data ini?");
    if (result) {
      await client.delete("/brands/delete/" + id, {
        headers: { access_token },
      });
      alert("Post deleted!");
      getCat();
    }
  }

  React.useEffect(() => {
    getCat();
  }, []);

  if (!brands) return null;

  if (access_token === "") {
    return <Navigate to="/admin" />;
  }

  return (
    <>
      <main class="container">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Brand</h1>
          <Link className="btn btn-primary" to="/admin/brand/add">
            Tambah Brand Baru
          </Link>
        </div>
        <h4>Brand List</h4>
        <div class="table-responsive-sm">
          <table class="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {!brands
                ? null
                : brands.map((prod, key) => {
                    return (
                      <tr>
                        <td>{key + 1}</td>
                        <td>{prod.nama}</td>
                        <td>
                          <button
                            className="btn btn-sm"
                            title="delete"
                            onClick={() => deleteData(prod.id)}
                          >
                            <i class="far fa-trash-alt"></i>
                          </button>
                          <Link
                            to={"/admin/brand/edit/" + prod.id}
                            className="btn btn-sm"
                            title="edit"
                          >
                            <i class="fas fa-edit"></i>
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
