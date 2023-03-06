import React from "react";
import "./Text-Input.css";
import { RiLockFill, RiMailFill } from "react-icons/ri";
function TextInput({ text, variant, leftIcon, rightIcon, onChange }) {
  if (variant == 1) {
    return (
      <div className="text-input">
        <RiMailFill style={{ fontSize: "1.2rem" }} />
        <input
          type="email"
          placeholder={text || "Your Email"}
          className="text-field"
          onChange={onChange}
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
          onChange={onChange}
        />
      </div>
    );
  }
}

export default TextInput;
