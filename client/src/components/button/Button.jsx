import React from "react";
import "./Button.css";

export function Button({ text, variant, leftIcon, rightIcon }) {
  if (leftIcon) {
    return (
      <button type={"submit"} className={variant}>
        <span style={{ marginRight: "6px" }}>{leftIcon}</span>
        {text}
      </button>
    );
  }
  if (rightIcon) {
    console.log(rightIcon);
    return (
      <button type={"submit"} className={variant}>
        {rightIcon.icon} {text}
      </button>
    );
  }

  return (
    <button type={"submit"} className={variant}>
      {text}
    </button>
  );
}

export function IconButton({ icon }) {
  return (
    <button type={"submit"} className="icon-button">
      <span>{icon}</span>
    </button>
  );
}
