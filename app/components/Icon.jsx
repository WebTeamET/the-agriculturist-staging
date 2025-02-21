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
    </div>
  );
};

export default Icon;
{
}
