import React, { useState } from "react";
import TextInput from "../../components/text-input/Text-Input";
import Divider from "../../components/divider/Divider";
import { Button, IconButton } from "../../components/button/Button";
import { RiGoogleFill, RiFacebookFill, RiAppleFill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    return fetch("http://localhost:3000/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        if (data.token) {
          setLoggedIn(true);
        }
      });
  };
  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <div
        className="header"
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        <h1>Login</h1>
        <p style={{ fontSize: "0.85rem" }}>Login with open account</p>
        <div className="social" style={{ display: "flex", gap: "16px" }}>
          <Button
            text={"Google"}
            variant={"secondary"}
            leftIcon={<RiGoogleFill />}
          />
          <Button
            text={"Facebook"}
            variant={"secondary"}
            leftIcon={<RiFacebookFill />}
          />
        </div>
      </div>
      <Divider />
      <p style={{ fontSize: "0.85rem" }}>Or continue with email</p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "90%",
        }}
      >
        <TextInput variant={1} onChange={(e) => setEmail(e.target.value)} />
        <TextInput variant={2} onChange={(e) => setPassword(e.target.value)} />
        <Button text={"Login"} variant={"primary"} />
      </form>
      <p style={{ fontSize: "0.75rem", color: "#5c626a" }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
      <p style={{ fontSize: "0.7rem", width: "80%", color: "#5c626a" }}>
        This site is protected by reCaptcha and the Google Privacy Policy
      </p>
    </div>
  );
}

export default Login;
