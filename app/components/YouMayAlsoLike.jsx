import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const YouMayAlsoLike = () => {
  return (
    <div>
      <ProductCard />
      <div className="w-full flex justify-center">
        <button className="green-btn mb-[60px] -mt-[20px] lgscreen2:mt-0 uppercase">
          <Link href="/shop">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
