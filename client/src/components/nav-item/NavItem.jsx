import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";
import { RiArrowDownSFill, RiArrowUpFill } from "react-icons/ri";

function NavItem(props) {
  const path = window.location.pathname;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={
          props.thread == true ? { display: "initial" } : { display: "none" }
        }
        className="thread"
      >
        <div
          style={props.last == true ? { display: "none" } : { height: "100%" }}
          className="line1"
        ></div>
        <div className="line2"></div>
      </div>
      <Link
        to={props.address}
        className={props.address === path ? "navbarLink active" : "navbarLink"}
        onClick={props.onClick}
      >
        <span style={{ marginRight: "6px" }}>{props.leftIcon}</span>
        {props.text}
      </Link>
    </div>
  );
}

export function NavDropdown(props) {
  return (
    <div onClick={props.onClick}>
      <button className={"navbarLink dropdown-button"}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          {props.leftIcon}
          {props.text}
        </div>

        <span style={{ marginRight: "6px" }}>
          <RiArrowDownSFill />
        </span>
      </button>
      <div className="dropdown-content">
        <div className="nav-items">{props.children}</div>
      </div>
    </div>
  );
}

export default NavItem;
