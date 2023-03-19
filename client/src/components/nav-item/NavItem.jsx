import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

function NavItem(props) {
  return (
    <Link
      to={props.address}
      className={props.className}
      onClick={props.onClick}
    >
      <span style={{ marginRight: "6px" }}>{props.leftIcon}</span>
      {props.text}
    </Link>
  );
}

function NavDropdown() {
  return <div>NavDropdown</div>;
}

export default NavItem;
