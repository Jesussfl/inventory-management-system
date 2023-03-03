import React from "react";
import "./Button.css";

function Button({ text, variant, leftIcon, rightIcon }) {
  if (leftIcon) {
    return (
      <button className={variant}>
        <span style={{ marginRight: "6px" }}>{leftIcon}</span> {text}
      </button>
    );
  }
  if (rightIcon) {
    console.log(rightIcon);
    return (
      <button className={variant}>
        {rightIcon.icon} {text}
      </button>
    );
  }

  return <button className={variant}>{text}</button>;
}

export default Button;
