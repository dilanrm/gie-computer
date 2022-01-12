import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

export const KateEdit = ({ access_token, loading, client }) => {
  const history = useNavigate();
  const { id } = useParams();

  const getBrand = async (id) => {
    const response = await client.get("/categories/getOne/" + id);
    setValues(response.data);
  };

  const [values, setValues] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(values);
    const data = values;
    const response = await client.put("/categories/update/" + id, data, {
      headers: {
        "Content-Type": "application/json",
        access_token,
      },
    });

    console.log(response);

    history("/admin/kategori");
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleReset = () => {
    setValues({
      nama: "",
    });
  };

  useEffect(() => {
    getBrand(id);
  }, []);

  if (!values) return <Loading />;

  return (
    <main className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Kategori</h1>
      </div>
      <h4>Edit Kategori</h4>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="form-floating">
          <input
            name="nama"
            className="form-control"
            type="text"
            defaultValue={values.nama}
            onChange={handleChange("nama")}
          />
          <label htmlFor="floatingPassword">Nama Kategori</label>
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
