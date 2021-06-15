import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  discription,
  verified,
}) {
  return (
    <div className="ChannelRow">
      <Avatar className="channelRow_logo" alt="Remy Sharp" src={image} />
      <div className="channelRow_text">
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>
          {subs} subscriber . {noOfVideos} videos
        </p>
        <p>{discription}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
