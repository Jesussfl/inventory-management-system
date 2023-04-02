import React from "react";
import { RiSearchLine, RiCloseCircleLine } from "react-icons/ri";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="left">
        <span className="left-icon">
          <RiSearchLine />
        </span>
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <span className="right-icon">
        <RiCloseCircleLine />
      </span>
    </div>
  );
}

export default SearchBar;
