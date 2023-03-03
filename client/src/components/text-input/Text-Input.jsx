import React from "react";
import "./Text-Input.css";
import { RiLockFill, RiMailFill } from "react-icons/ri";
function TextInput({ text, variant, leftIcon, rightIcon }) {
  if (variant == 1) {
    return (
      <div className="text-input">
        <RiMailFill style={{ fontSize: "1.2rem" }} />
        <input
          type="email"
          placeholder={text || "Your Email"}
          className="text-field"
        />
      </div>
    );
  }
  if (variant == 2) {
    return (
      <div className="text-input">
        <RiLockFill style={{ fontSize: "1.2rem" }} />
        <input
          type="password"
          placeholder={text || "Password"}
          className="text-field"
        />
      </div>
    );
  }
}

export default TextInput;
