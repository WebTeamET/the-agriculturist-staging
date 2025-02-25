import React from "react";
import Insta from "./Icons/Insta";
import DownAerrow from "./Icons/DownAerrow";
import Sale from "./Icons/Sale";
import Classification from "./Icons/Classification";
import Price from "./Icons/Price";
import THC from "./Icons/Thc";
import Effects from "./Icons/Effects";
import Brands from "./Icons/Brands";
import FilterIcon from "./Icons/FilterIcon";
import Star from "./Icons/Star";
import Warning from "./Icons/Warning";
import Play from "./Icons/Play";
import Twitter from "./Icons/Twitter";
import Facebook from "./Icons/Facebook";
import Whatsapp from "./Icons/Whatsapp";
import VideoPlay from "./Icons/VideoPlay";
import LinkedIn from "./Icons/LinkedIn";

const Icon = ({ type, fill }) => {
  const fillColor = fill || "";
  return (
    <div>
      {type === "downArrow" && <DownAerrow fillColor={fillColor} />}
      {type === "sale" && <Sale fillColor={fillColor} />}
      {type === "classification" && <Classification fillColor={fillColor} />}
      {type === "price" && <Price fillColor={fillColor} />}
      {type === "thc" && <THC fillColor={fillColor} />}
      {type === "effects" && <Effects fillColor={fillColor} />}
      {type === "brands" && <Brands fillColor={fillColor} />}
      {type === "filter" && <FilterIcon fillColor={fillColor} />}
      {type === "star" && <Star fillColor={fillColor} />}
      {type === "warning" && <Warning fillColor={fillColor} />}
      {type === "play" && <Play fillColor={fillColor} />}
      {type === "facebook" && <Facebook fillColor={fillColor} />}
      {type === "twitter" && <Twitter fillColor={fillColor} />}
      {type === "whatsapp" && <Whatsapp fillColor={fillColor} />}
      {type === "insta" && <Insta fillColor={fillColor} />}
      {type === "videoPlay" && <VideoPlay fillColor={fillColor} />}
      {type === "linkedin" && <LinkedIn fillColor={fillColor} />}
    </div>
  );
};

export default Icon;
