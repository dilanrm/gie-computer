import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { TableProd } from "./TableProd";

const client = axios.create({
  baseURL: "/",
});

export const Product = () => {
  const [prod, setProd] = useState(null);
  const [values, setValues] = useState(null);
  const [user, setUser] = useState(null);
  const token = JSON.parse(localStorage.getItem("user")).access_token;

  // const getUser = async () => {
  //   const response = await client.get("/users");
  //   setUser(response.data);
  // };

  const getProd = async () => {
    const response = await client.get("/products", {
      headers: { access_token: token },
    });
    setProd(response.data);
  };


  // getUser();

  // getProd();

  async function deleteData(id) {
    let result = window.confirm("Are you sure?");
    if (result) {
      await client.delete("/products/delete/" + id, {
        headers: { access_token: token },
      });
      alert("Post deleted!");
      getProd();
    }
  }

  useEffect(() => {
    getProd();
    // console.log(prod);
  }, [prod]);

  if (!prod) return null;

  return (
    <>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Products</h1>
          <Link className="btn btn-primary" to="/product/add">
            Add Item
          </Link>
        </div>
        <h4>Products List</h4>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Rating</th>
                <th scope="col">View</th>
                <th scope="col">UserID</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {prod.map((prods, key) => {
                return (
                  // <TableProdEdit
                  //   prods={prods}
                  //   num={key}
                  //   handleSubmit={handleSubmit}
                  //   user={user}
                  // />
                  <tr>
                    <td>{key + 1}</td>
                    <td>{prods.name}</td>
                    <td>{prods.description}</td>
                    <td>{prods.price}</td>
                    <td>{prods.stock}</td>
                    <td>{prods.rating}</td>
                    <td>{prods.view}</td>
                    <td>{prods.user.name}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        title="delete"
                        onClick={() => deleteData(prods.id)}
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                      <Link
                        to={"/product/edit/" + prods.id}
                        className="btn btn-sm btn-warning"
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
