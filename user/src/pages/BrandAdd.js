import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BrandAdd = ({ access_token, loading, client }) => {
  const history = useNavigate();

  const [values, setValues] = useState({
    nama: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(values);
    const data = values;
    const response = await client.post("/brands/add/", data, {
      headers: {
        "Content-Type": "application/json",
        access_token,
      },
    });

    console.log(response);

    history("/admin/brand");
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleReset = () => {
    setValues({
      nama: "",
    });
  };

  useEffect(() => {}, []);

  return (
    <main className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Brand</h1>
      </div>
      <h4>Tambah Brand</h4>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="form-floating">
          <input
            name="nama"
            className="form-control"
            type="text"
            defaultValue={values.nama}
            onChange={handleChange("nama")}
          />
          <label htmlFor="floatingPassword">Nama Brand</label>
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
