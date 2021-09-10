import {
  ArrowDropDown,
  LaptopWindowsOutlined,
  Notifications,
  Search,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "nav_bar scrolled" : "nav_bar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt=""
          ></img>
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kid</span>
          <Notifications className="icon" />
          <img src="https://img4.thuthuatphanmem.vn/uploads/2020/12/25/avt-chibi-doc_115941237.jpg"></img>
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Log out</span>
              <span>MyList</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
