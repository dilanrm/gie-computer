import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const client = axios.create({
  baseURL: "/",
});

export const AddProd = () => {
  const history = useNavigate();

  const [user, setUser] = useState(null);

  // useEffect(() => {
  async function getUser() {
    const response = await client.get("/users");
    setUser(response.data);
    console.log(response.data);
  }
  // }, []);

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 1,
    category: "",
    sold: 0,
    rating: 0,
    view: 0,
    userId: 1,
  });

  console.log(values);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(values);
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    const data = values;
    const response = await client.post("/products/add/", data, {
        headers: { 
            'Content-Type': "application/json",
            access_token: token 
        },
      });
  
      console.log(response);

    history("/product");
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return null;

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Products</h1>
      </div>
      <h4>Product Edit</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            name="name"
            className="form-control"
            type="text"
            defaultValue={values.name}
            onChange={handleChange("name")}
          />
          <label htmlFor="floatingPassword">Product Name</label>
        </div>
        <div className="form-floating">
          <input
            name="description"
            className="form-control"
            type="text"
            defaultValue={values.description}
            onChange={handleChange("description")}
          />
          <label htmlFor="floatingPassword">Product Description</label>
        </div>
        <div className="form-floating">
          <input
            name="price"
            className="form-control"
            type="number"
            defaultValue={values.price}
            onChange={handleChange("price")}
          />
          <label htmlFor="floatingPassword">Product Price</label>
        </div>
        <div className="form-floating">
          <input
            name="stock"
            className="form-control"
            type="number"
            defaultValue={values.stock}
            onChange={handleChange("stock")}
          />
          <label htmlFor="floatingPassword">Product Stock</label>
        </div>
        <div className="form-floating">
          <input
            name="rating"
            className="form-control"
            type="number"
            defaultValue={values.rating}
            onChange={handleChange("rating")}
          />
          <label htmlFor="floatingPassword">Product rating</label>
        </div>
        <div className="form-floating">
          <input
            name="view"
            className="form-control"
            type="number"
            defaultValue={values.view}
            onChange={handleChange("view")}
          />
          <label htmlFor="floatingPassword">Product Views</label>
        </div>
        <div className="form-floating">
          <select
            name="category"
            className="form-control"
            onChange={handleChange("category")}
          >
            <option>Choose Category</option>
            <option value="painting">Painting</option>
            <option value="fanart">Fanart</option>
            <option value="comics">Comics</option>
          </select>
          <label htmlFor="floatingPassword">Select user</label>
        </div>
        <div className="form-floating">
          <select
            name="userId"
            className="form-control"
            onChange={handleChange("userId")}
          >
            <option>Choose User</option>
            {user.map((users, key) => {
              return (
                <option key={key} defaultValue={users.id}>
                  {users.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="floatingPassword">Select user</label>
        </div>

        <button type="submit" className="btn btn-sm btn-warning" title="add">
          Submit
        </button>
      </form>
    </main>
  );
};
