import React, { useState } from "react";
import NavItem from "../nav-item/NavItem";
import { RiHomeFill, RiFacebookFill, RiAppleFill } from "react-icons/ri";
import "./LeftNavbar.css";

function LeftNavbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
    console.log(path);
  };
  return (
    <>
      <nav>
        <div>
          <div
            style={{ background: "#fff", width: "36px", height: "36px" }}
          ></div>
          <ul>
            <li>
              <NavItem
                text={"Home"}
                address={"/dashboard/home"}
                leftIcon={<RiHomeFill />}
                onClick={() => handleSetActiveLink("/dashboard/home")}
                className={`navbarLink ${
                  activeLink == "/dashboard/home" ? "active" : ""
                }`}
              />
            </li>
            <li>
              <NavItem
                text={"Products"}
                address={"/dashboard/products"}
                leftIcon={<RiHomeFill />}
                className={`navbarLink ${
                  activeLink === "/dashboard/products" ? "active" : ""
                }`}
                onClick={() => handleSetActiveLink("/dashboard/products")}
              />
            </li>
            <li>
              <NavItem
                text={"Employees"}
                address={"/dashboard/employees"}
                leftIcon={<RiHomeFill />}
                className={`navbarLink ${
                  activeLink === "/dashboard/employees" ? "active" : ""
                }`}
                onClick={() => handleSetActiveLink("/dashboard/employees")}
              />
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <NavItem
                text={"Help & Getting Started"}
                address={"/dashboard/help"}
                leftIcon={<RiHomeFill />}
                className={`navbarLink ${
                  activeLink === "/dashboard/help" ? "active" : ""
                }`}
                onClick={() => handleSetActiveLink("/dashboard/help")}
              />
            </li>
            <li>
              <NavItem
                text={"Settingss"}
                address={"/dashboard/settings"}
                leftIcon={<RiHomeFill />}
                className={`navbarLink ${
                  activeLink === "/dashboard/settings" ? "active" : ""
                }`}
                onClick={() => handleSetActiveLink("/dashboard/settings")}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default LeftNavbar;
