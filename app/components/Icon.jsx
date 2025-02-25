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

const Icon = ({ type }) => {
  return (
    <div>
      {type === "downArrow" && <DownAerrow />}
      {type === "sale" && <Sale />}
      {type === "classification" && <Classification />}
      {type === "price" && <Price />}
      {type === "thc" && <THC />}
      {type === "effects" && <Effects />}
      {type === "brands" && <Brands />}
      {type === "filter" && <FilterIcon />}
      {type === "star" && <Star />}
      {type === "warning" && <Warning />}
      {type === "play" && <Play />}
      {type === "facebook" && <Facebook />}
      {type === "twitter" && <Twitter />}
      {type === "whatsapp" && <Whatsapp />}
      {type === "insta" && <Insta />}
    </div>
  );
};

export default Icon;
