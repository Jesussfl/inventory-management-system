import React from "react";
import {
  RiBellLine,
  RiMessageLine,
  RiUser2Line,
  RiAddLine,
} from "react-icons/ri";
import SearchBar from "../search-bar/SearchBar";

import { Button, IconButton } from "../button/Button";

import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <SearchBar />
        </div>
        <div className="topRight">
          <Button
            text={"Create"}
            iconLeft={<RiAddLine />}
            variant={"primary"}
          ></Button>
          <IconButton icon={<RiMessageLine />} />
          <IconButton icon={<RiUser2Line />} />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
