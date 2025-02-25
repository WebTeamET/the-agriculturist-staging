"use client";
import React, { useState, useEffect, useRef } from "react";

const Ingrediants = () => {
  const [maxHeight, setMaxHeight] = useState(0);
  const terpenesRef = useRef(null);
  const cannabinoidsRef = useRef(null);

  useEffect(() => {
    const calculateMaxHeight = () => {
      const terpenesHeight = terpenesRef.current?.offsetHeight || 0;
      const cannabinoidsHeight = cannabinoidsRef.current?.offsetHeight || 0;
      const newMaxHeight = Math.max(terpenesHeight, cannabinoidsHeight);
      setMaxHeight(newMaxHeight);
    };

    calculateMaxHeight();
    window.addEventListener("resize", calculateMaxHeight);

    return () => window.removeEventListener("resize", calculateMaxHeight);
  }, []);

  return (
    <div className="flex items-start justify-between gap-[50px] lgscreen2:flex-wrap">
      {/* Terpenes Section */}
      <div
        className="w-1/2 lgscreen2:w-full bg-dark_cream rounded-[20px] px-20 py-40"
        ref={terpenesRef}
        style={{ height: maxHeight > 0 ? `${maxHeight}px` : "auto" }}
      >
        <h3 className="text-3xl font-semibold text-green">Terpenes</h3>
        <div className="border-t border-green/20 my-[16px]"></div>
        <div className="flex flex-col gap-[16px] px-12">
          {[
            {
              name: "Beta Caryophyllene",
              percentage: "1.001%",
              category: "Peppery",
              description: "Anti-Inflammatory, Analgesic, Calming",
            },
            {
              name: "Beta Pinene",
              percentage: "0.1032%",
              category: "Pine",
              description: "Focus, Relief, Alert, Balanced",
            },
            {
              name: "Alpha Bisabolol",
              percentage: "0.00%",
              category: "Floral",
              description: "Soothing, Anti-Inflammatory",
            },
            {
              name: "Terpinolene",
              percentage: "0.00%",
              category: "Fruity",
              description: "Cerebral, Focused, Energetic",
            },
            {
              name: "Alpha Humulene",
              percentage: "0.4019%",
              category: "Hoppy",
              description: "Pain Relief, Appetite Suppression",
            },
          ].map((terpene, index) => (
            <div key={index} className="flex flex-col gap-[8px]">
              <div className="flex items-center">
                <p className="text-xl text-green font-700 font-body">
                  {terpene.name}
                </p>
                <span className="ml-20 leading-[normal] px-16 py-2.5 font-body text-12 bg-green font-400 tracking-[0.5px] text-white rounded-full">
                  {terpene.percentage}
                </span>
              </div>
              <p className="text-sm text-green">
                <span className="font-500">{terpene.category}:</span>{" "}
                {terpene.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cannabinoids Section */}
      <div
        className="w-1/2 lgscreen2:w-full bg-dark_cream rounded-[20px] px-20 py-40 h-[531px]"
        ref={cannabinoidsRef}
        style={{ height: maxHeight > 0 ? `${maxHeight}px` : "auto" }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-green mb-4">
          Cannabinoids
        </h3>
        <div className="border-t border-green/20 my-[16px]"></div>

        {/* Responsive two-column grid (stacks on small screens) */}
        <div className="grid grid-cols-1 smscreen1:grid-cols-2 gap-x-[150px] xlscreen:gap-x-[30px] lg:gap-y-2 ">
          <div className="px-12">
            {[
              { name: "THC", percentage: "27.99%", padding: "13" },
              { name: "THCA", percentage: "28.2151%" },
              { name: "THCV", percentage: "0.00%", padding: "19" },
            ].map((cannabinoid, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="text-green !font-body text-base md:text-lg">
                  {cannabinoid.name}
                </p>
                <p
                  className={`text-green !font-body text-base md:text-lg ${index == 0 ? "pr-[13px]" : index == 1 ? "" : "pr-[20px]"}`}
                >
                  {cannabinoid.percentage}
                </p>
              </div>
            ))}
          </div>
          <div className="px-12">
            {[
              { name: "CBD", percentage: "0.0303%" },
              { name: "CBDA", percentage: "0.0345%" },
              { name: "CBC", percentage: "0.00%", padding: "18" },
              { name: "CBG", percentage: "0.00%", padding: "18" },
              { name: "CBN", percentage: "0.00%", padding: "18" },
            ].map((cannabinoid, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-1"
              >
                <p className="text-green !font-body text-base md:text-lg">
                  {cannabinoid.name}
                </p>
                <p
                  className={`text-green !font-body text-base md:text-lg ${index == 2 ? "pr-[18px]" : index == 3 ? "pr-[18px]" : index == 4 ? "pr-[18px]" : ""}`}
                >
                  {cannabinoid.percentage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingrediants;
