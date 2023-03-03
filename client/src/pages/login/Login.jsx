import React from "react";
import TextInput from "../../components/text-input/Text-Input";
import Divider from "../../components/divider/Divider";
import Button from "../../components/button/Button";
import { RiGoogleFill, RiFacebookFill, RiAppleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
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
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "90%",
        }}
      >
        <TextInput variant={1} />
        <TextInput variant={2} />
        <Button text={"Login"} variant={"primary"} />
      </form>
      <p style={{ fontSize: "0.75rem", color: "#5c626a" }}>
        Don't have an account?{" "}
        <Link to="/signup">
          <a>Sign up</a>
        </Link>
      </p>
      <caption style={{ fontSize: "0.7rem", width: "80%", color: "#5c626a" }}>
        This site is protected by reCaptcha and the Google Privacy Policy
      </caption>
    </div>
  );
}

export default Login;
