import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
// icons down
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar Bro</h2>

      <SidebarRow selected title="Home" Icon={HomeOutlinedIcon} />
      <SidebarRow title="Explore" Icon={ExploreOutlinedIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsOutlinedIcon} />
      <hr />
      {/*  */}
      <SidebarRow title="Library" Icon={VideoLibraryOutlinedIcon} />
      <SidebarRow title="History" Icon={HistoryOutlinedIcon} />
      <SidebarRow title="Your Videos" Icon={OndemandVideoIcon} />
      <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpIcon} />
      <SidebarRow title="Show more" Icon={ExpandMoreIcon} />
      <hr />
    </div>
  );
}

export default Sidebar;
