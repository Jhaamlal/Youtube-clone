import React from "react";
import "./Recommended.css";

import VideoCard from "./Videocard";

function Recommended() {
  return (
    <div className="recommendedvideos">
      <h2>Recomended Videos</h2>
      <div className="recommendedvideos_videos">
        <VideoCard
          title="bew brew"
          views="2.3M Views"
          timestamp="3 days"
          channelImage="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"
          channel="rohit kumar"
          image="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
        />
        <VideoCard
          title="bew sadfjkjfdasfdsafsk"
          views="2.3M Views"
          timestamp="3 days"
          channelImage="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"
          channel="rohit kumar"
          image="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
        />
        <VideoCard
          title="bew brew"
          views="2.3M Views"
          timestamp="3 days"
          channelImage="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"
          channel="rohit kumar"
          image="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
        />
        <VideoCard
          title="ROHit"
          views="2.3M Views"
          timestamp="3 days"
          channelImage="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"
          channel="rohit kumar"
          image="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
        />
        <VideoCard
          title="Bijasdf"
          views="2.3M Views"
          timestamp="3 days"
          channelImage="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"
          channel="rohit kumar"
          image="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
        />
      </div>
    </div>
  );
}

export default Recommended;
