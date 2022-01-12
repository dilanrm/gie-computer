import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Routes, Route, useNavigate } from "react-router-dom";

import { LoginForm } from "./pages/LoginForm";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Loading } from "./components/Loading";
import { Footer } from "./components/Footer";
import { Contact } from "./pages/Contact";
import { Regist } from "./pages/Regist";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Profile } from "./pages/Profile";
import { Product } from "./pages/Product";
import { Admin } from "./pages/Admin";
import { Navbar } from "./components/Admin/Navbar";
import { ProdukList } from "./pages/ProdukList";
import { Navigate } from "react-router-dom";
import { KateList } from "./pages/KateList";
import { BrandList } from "./pages/BrandList";
import { BrandAdd } from "./pages/BrandAdd";
import { BrandEdit } from "./pages/BrandEdit";
import { KateAdd } from "./pages/KateAdd";
import { KateEdit } from "./pages/KateEdit";
import { ProdukAdd } from "./pages/ProdukAdd";
import { ProdukEdit } from "./pages/ProdukEdit";
import { ProdukImg } from "./pages/ProdukImg";

const base_url = "http://localhost:3000/static/images/";
const client = axios.create({
  baseURL: "http://localhost:3000",
});

if (!JSON.parse(localStorage.getItem("user"))) {
  localStorage.setItem("user", JSON.stringify({ access_token: "" }));
}

function App() {
  const access_token = !JSON.parse(localStorage.getItem("user"))
    ? ""
    : JSON.parse(localStorage.getItem("user")).access_token;
  const [user, setUser] = useState({ access_token: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const history = useNavigate();

  const currRoute = useLocation().pathname;

  if (!JSON.parse(localStorage.getItem("user"))) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  const Login = async (details) => {
    console.log(details);
    details.type = "admin";

    const result = await client.post("/users/login", details);

    if (result.data.access_token) {
      console.log("Logged in, token:" + result.data.access_token);
      setUser({ access_token: result.data.access_token });
      localStorage.setItem(
        "user",
        JSON.stringify({ access_token: result.data.access_token }),
      );
      console.log(JSON.parse(localStorage.getItem("user")));
      // window.location.reload();
      // this.props.history.push('/admin/produk')
    } else {
      console.log(result.data.message);
      setError(result.data.message);
    }
  };

  const Logout = () => {
    console.log("Logged out");
    localStorage.removeItem("user");
    setUser({ access_token: "" });
    localStorage.setItem("user", JSON.stringify({ access_token: "" }));
    console.log(JSON.parse(localStorage.getItem("user")));
    // history('/admin');
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="App">
          {access_token === "" || currRoute.split("/")[1] !== "admin" ? (
            <Header Logout={Logout} client={client} />
          ) : (
            <Navbar Logout={Logout} />
          )}

          <Routes>
            <Route exact path="/" element={<Home />} loading={loading} />
            <Route
              path="/admin"
              element={
                <Admin
                  Login={Login}
                  error={error}
                  loading={loading}
                  access_token={access_token}
                />
              }
            />
            <Route
              path="/admin/produk"
              element={
                <ProdukList
                  access_token={access_token}
                  client={client}
                  loading={loading}
                />
              }
            />
            <Route
              path="/admin/produk/add"
              element={
                <ProdukAdd
                  access_token={access_token}
                  client={client}
                  loading={loading}
                />
              }
            />
            <Route
              path="/admin/produk/edit/:id"
              element={
                <ProdukEdit
                  access_token={access_token}
                  client={client}
                  loading={loading}
                />
              }
            />
            <Route
              path="/admin/produk/image/:id"
              element={
                <ProdukImg
                  access_token={access_token}
                  client={client}
                  loading={loading}
                  base_url={base_url}
                />
              }
            />
            <Route
              path="/admin/kategori"
              element={
                <KateList
                  access_token={access_token}
                  client={client}
                  loading={loading}
                />
              }
            />
            <Route
              path="/admin/kategori/add"
              element={
                <KateAdd
                  access_token={access_token}
                  client={client}
                  loading={loading}
                />
              }
            />
            <Route
              path="/admin/kategori/edit/:id"
              element={
                <KateEdit
                  access_token={access_token}
                  client={client}
                  loading={loading}
                />
              }
            />
            <Route
              path="/admin/brand"
              element={
                <BrandList
                  access_token={access_token}
                  client={client}
                  loading={loading}
                />
              }
            />
            <Route
              path="/admin/brand/add"
              element={
                <BrandAdd
                  access_token={access_token}
                  client={client}
                  loading={loading}
                />
              }
            />
            <Route
              path="/admin/brand/edit/:id"
              element={
                <BrandEdit
                  access_token={access_token}
                  client={client}
                  loading={loading}
                />
              }
            />
            <Route
              path="/search"
              element={<Shop base_url={base_url} client={client} loading={loading} />}
            />
            <Route
              path="/search/:category"
              element={<Shop base_url={base_url} client={client} loading={loading} />}
            />
            <Route
              path="/search/:category/:brand"
              element={<Shop base_url={base_url} client={client} loading={loading} />}
            />
            <Route
              path="/product/:slug/:id"
              element={<Product base_url={base_url} client={client} loading={loading} />}
            />
            <Route path="/contact" element={<Contact />} loading={loading} />
          </Routes>

          {access_token === "" || currRoute.split("/")[1] !== "admin" ? (
            <Footer />
          ) : null}
        </div>
      )}
    </>
  );
}

export default App;
