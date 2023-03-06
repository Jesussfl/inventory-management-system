import React, { useState } from "react";
import TextInput from "../../components/text-input/Text-Input";
import Divider from "../../components/divider/Divider";
import Button from "../../components/button/Button";
import { RiGoogleFill, RiFacebookFill, RiAppleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./Signup.css";

async function signupUser(credentials) {
  return fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await signupUser({
      username,
      email,
      password,
    });
  };

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
        <h1>Signup</h1>
        <p style={{ fontSize: "0.85rem" }}>Signup with</p>
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
        <TextInput
          text={"Enter your username"}
          variant={0}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput variant={1} onChange={(e) => setEmail(e.target.value)} />
        <TextInput variant={2} onChange={(e) => setPassword(e.target.value)} />
        <Button text={"Signup"} variant={"primary"} />
      </form>
      <p style={{ fontSize: "0.75rem", color: "#5c626a" }}>
        I already have an account{" "}
        <Link to="/login">
          <a>Sign in</a>
        </Link>
      </p>
      <caption style={{ fontSize: "0.7rem", width: "80%", color: "#5c626a" }}>
        This site is protected by reCaptcha and the Google Privacy Policy
      </caption>
    </div>
  );
}

export default Signup;
