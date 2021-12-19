import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import { Main } from "./components/Main";
import { LoginForm } from "./components/LoginForm";
import { Header } from "./components/Header";

const client = axios.create({
  baseURL: "/",
});

function App() {
  const [user, setUser] = useState({ access_token: "" });
  const [error, setError] = useState("");

  if (!JSON.parse(localStorage.getItem("user"))) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  const Login = async (details) => {
    console.log(details);

    const result = await client.post("/users/login", details);

    if (result.data.access_token) {
      console.log("Logged in, token:" + result.data.access_token);
      setUser({ access_token: result.data.access_token });
      localStorage.setItem("user", JSON.stringify({ access_token: result.data.access_token }));
      console.log(JSON.parse(localStorage.getItem("user")));
    } else {
      console.log(result.data.message);
      setError(result.data.message);
    }

    // if (
    //   details.email === adminUser.email &&
    //   details.password === adminUser.password
    // ) {
    //   console.log("Logged in");
    //   setUser({
    //     email: details.email,
    //   });
    //   localStorage.setItem("user", JSON.stringify(details));
    //   console.log(JSON.parse(localStorage.getItem("user")));
    // } else {
    //   console.log("Details didn't match!");
    //   setError("Details didn't match!");
    // }
  };

  const Logout = () => {
    console.log("Logged out");
    setUser({ access_token: "" });
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem("user")));
  };

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("user")));
  }, [user]);

  return (
    <div className="App">
      {JSON.parse(localStorage.getItem("user")).access_token === "" ? (
        <LoginForm Login={Login} error={error} />
      ) : (
        <Router>
          <Header Logout={Logout} />
          <Main />
        </Router>
      )}
    </div>
  );
}

export default App;
