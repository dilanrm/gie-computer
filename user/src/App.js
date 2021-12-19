import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  if (!JSON.parse(localStorage.getItem("user"))) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        email: details.email,
      });
      localStorage.setItem("user", JSON.stringify(details));
      console.log(JSON.parse(localStorage.getItem("user")));
    } else {
      console.log("Details didn't match!");
      setError("Details didn't match!");
    }
  };

  const Logout = () => {
    console.log("Logged out");
    setUser({ email: "" });
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem("user")));
  };

  const Signup = (details) => {
    console.log(details);
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
          <Router>
            <Header Logout={Logout} />

            <Routes>
              <Route exact path="/" element={<Home />} loading={loading} />
              <Route
                path="/login"
                element={
                  <LoginForm Login={Login} Error={error} loading={loading} />
                }
              />
              <Route
                path="/signup"
                element={
                  <Regist loading={loading} error={error} Signup={Signup} />
                }
              />
              <Route path="/shop" element={<Shop loading={loading} />} />
              <Route path="profile" element={<Profile loading={loading} />} />
              <Route path="/cart" element={<Cart loading={loading} />} />
              <Route path="/checkout" element={<Checkout loading={loading} />} />
              <Route path="/contact" element={<Contact />} loading={loading} />
            </Routes>

            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
