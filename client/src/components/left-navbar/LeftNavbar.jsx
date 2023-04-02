import React, { useState } from "react";
import NavItem from "../nav-item/NavItem";
import { NavDropdown } from "../nav-item/NavItem";
import {
  RiHomeLine,
  RiVipDiamondLine,
  RiUser3Line,
  RiQuestionAnswerLine,
  RiSettings2Line,
} from "react-icons/ri";
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
          <img src="../../../public/images/Logo.svg" />
          <ul>
            <li>
              <NavItem
                text={"Home"}
                address={"/dashboard/home"}
                leftIcon={<RiHomeLine />}
              />
            </li>
            <li>
              <NavItem
                text={"Products"}
                address={"/dashboard/products"}
                leftIcon={<RiVipDiamondLine />}
              />
            </li>
            <li>
              <NavItem
                text={"Employees"}
                address={"/dashboard/employees"}
                leftIcon={<RiUser3Line />}
              />
            </li>
            <li>
              <NavDropdown text={"Account"} leftIcon={<RiUser3Line />}>
                <NavItem
                  text={"Settings"}
                  thread={true}
                  address={"/dashboard/settings"}
                />
                <NavItem
                  text={"Settings"}
                  thread={true}
                  address={"/dashboard/settings"}
                />
                <NavItem
                  text={"Settings"}
                  thread={true}
                  last={true}
                  address={"/dashboard/settings"}
                />
              </NavDropdown>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <NavItem
                text={"Help & Getting Started"}
                address={"/dashboard/help"}
                leftIcon={<RiQuestionAnswerLine />}
              />
            </li>
            <li>
              <NavItem
                text={"Settings"}
                address={"/dashboard/settings"}
                leftIcon={<RiSettings2Line />}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default LeftNavbar;
