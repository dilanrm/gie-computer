import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Admin = ({ Login, error, loading, access_token }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    type: "admin",
  });

  let history = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")).access_token !== "")
      history("/admin/produk");
  }, [JSON.parse(localStorage.getItem("user"))]);

  return (
    <>
      {access_token === "" ? (
        <div className="container">
          <br />
          <br />
          <br />
          <main className="form-signin">
            <form onSubmit={submitHandler}>
              <h1 className="h3 mb-3 fw-normal">Login</h1>
              {error !== "" ? <div className="error">{error}</div> : ""}
              <div class="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  value={details.password}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
              <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
            </form>
          </main>
        </div>
      ) : (
        <div class="container-fluid">
          <div class="row">
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};
