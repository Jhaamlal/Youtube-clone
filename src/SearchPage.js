import React from "react";
import "./SerchPage.css";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Tablets/Samsung/A7-Lite/Gateway/D24267156_IN_PC_Tablets-Samsung-Launch-A7-Lite-RUSH_TallHero_1500x600._CB667709440_.jpg"
        channel="sleeping guide"
        verified
        subs="55k"
        noOfVideos={345}
        discription="sleep well"
      />

      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do know how to sleep"
        timestamp="59 second ago"
        channel="sleepy programmer"
        title="let's sleep"
        image="https://images.hindustantimes.com/img/2021/06/13/550x309/ITBP_jawans_scaling_Himalayas_1623577544487_1623577548814.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do know how to sleep"
        timestamp="59 second ago"
        channel="sleepy programmer"
        title="let's sleep"
        image="https://images.hindustantimes.com/img/2021/06/13/550x309/ITBP_jawans_scaling_Himalayas_1623577544487_1623577548814.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do know how to sleep"
        timestamp="59 second ago"
        channel="sleepy programmer"
        title="let's sleep"
        image="https://images.hindustantimes.com/img/2021/06/13/550x309/ITBP_jawans_scaling_Himalayas_1623577544487_1623577548814.jpg"
      />
    </div>
  );
}

export default SearchPage;
