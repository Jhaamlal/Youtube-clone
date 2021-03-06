import React, { useState } from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import MicOutlinedIcon from "@material-ui/icons/MicOutlined";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuOutlinedIcon />

        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </Link>
      </div>
      <div className="outer">
        <div className="header_input">
          <input
            placeholder="Search"
            type="text"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            className="header_inputSearch"
          />
          <Link to={`/search/${inputSearch}`}>
            <SearchOutlinedIcon className="header_inputButton" />
          </Link>
        </div>

        <div className="header_mic_1">
          <MicOutlinedIcon className="header_mic" />
        </div>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsOutlinedIcon className="header_icon" />
        <NotificationsNoneOutlinedIcon className="header_icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://assets.shortpedia.com/uploads/2021/04/05/1617622401.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
