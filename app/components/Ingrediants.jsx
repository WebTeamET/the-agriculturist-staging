import React from "react";

const Ingrediants = () => {
  return (
    <div className="flex items-start justify-between gap-[50px] lgscreen2:flex-wrap">
      {/* Terpenes Section */}
      <div className="w-1/2 lgscreen2:w-full bg-dark_cream rounded-[20px] px-20 py-40">
        <h3 className="text-3xl font-semibold text-green">Terpenes</h3>
        <div className="border-t border-green/20 my-[16px]"></div>
        <div className="flex flex-col gap-[16px] px-12">
          {[
            {
              name: "Beta Caryophyllene",
              percentage: "1.001%",
              description: "Peppery: Anti-Inflammatory, Analgesic, Calming",
            },
            {
              name: "Beta Pinene",
              percentage: "1.001%",
              description: "Pine: Focus, Relief, Alert, Balanced",
            },
            {
              name: "Alpha Bisabolol",
              percentage: "1.001%",
              description: "Floral: Soothing, Anti-Inflammatory",
            },
            {
              name: "Terpinolene",
              percentage: "1.001%",
              description: "Fruity: Cerebral, Focused, Energetic",
            },
            {
              name: "Alpha Humulene",
              percentage: "1.001%",
              description: "Hoppy: Pain Relief, Appetite Suppression",
            },
          ].map((terpene, index) => (
            <div key={index} className="flex flex-col gap-[8px]">
              <div className="flex items-center">
                <p className="text-xl text-green font-700 font-body">
                  {terpene.name}
                </p>
                <span className="ml-20 px-16 py-3 font-body text-12 bg-green font-400 tracking-[0.5px] text-white rounded-full">
                  {terpene.percentage}
                </span>
              </div>
              <p className="text-sm text-green">{terpene.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cannabinoids Section */}
      {/* <div className="w-1/2 lgscreen2:w-full bg-[#F9F4EF] rounded-[20px] p-40 h-full">
        <h3 className="text-3xl font-semibold text-green">Cannabinoids</h3>
        <div className="border-t border-green/20 my-[16px]"></div>
        <div className="flex flex-row">
          <div className="w-1/2">
            {[
              { name: "THC", percentage: "27.99%" }, 
              { name: "THCA", percentage: "28.2151%" }, 
              { name: "THCV", percentage: "0.00%" }
            ].map((cannabinoid, index) => (
              <div key={index} className="flex justify-start items-center">
                <p className="w-1/2 text-xl text-green">{cannabinoid.name}</p>
                <p className="w-1/2 text-lg text-green">{cannabinoid.percentage}</p>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            {[
              { name: "CBD", percentage: "0.0303%" }, 
              { name: "CBDA", percentage: "0.0345%" }, 
              { name: "CBC", percentage: "0.00%" }, 
              { name: "CBG", percentage: "0.00%" }, 
              { name: "CBN", percentage: "0.00%" }
            ].map((cannabinoid, index) => (
              <div key={index} className="flex justify-start items-center">
                <p className="text-xl text-green">{cannabinoid.name}</p>
                <p className="text-lg text-green">{cannabinoid.percentage}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Cannabinoids Section */}
      <div className="w-1/2 lgscreen2:w-full bg-dark_cream rounded-[20px] px-20 py-40">
        <h3 className="text-2xl md:text-3xl font-semibold text-green mb-4">
          Cannabinoids
        </h3>
        <div className="border-t border-green/20 my-[16px]"></div>

        {/* Responsive two-column grid (stacks on small screens) */}
        <div className="grid grid-cols-1 lgscreen:grid-cols-2 gap-x-6 gap-y-2 ">
          <div className="px-12">
            {[
              { name: "THC", percentage: "27.99%" },
              { name: "THCA", percentage: "28.2151%" },
              { name: "THCV", percentage: "0.00%" },
            ].map((cannabinoid, index) => (
              <div
                key={index}
                className="flex justify-start items-center"
              >
                <p className="text-green min-w-[200px] !font-body text-base md:text-lg">
                  {cannabinoid.name}
                </p>
                <p className="text-green min-w-[200px] !font-body text-base md:text-lg">
                  {cannabinoid.percentage}
                </p>
              </div>
            ))}
          </div>
          <div className="px-12">
            {[
              { name: "CBD", percentage: "0.0303%" },
              { name: "CBDA", percentage: "0.0345%" },
              { name: "CBC", percentage: "0.00%" },
              { name: "CBG", percentage: "0.00%" },
              { name: "CBN", percentage: "0.00%" },
            ].map((cannabinoid, index) => (
              <div
                key={index}
                className="flex justify-start items-center py-1"
              >
                <p className="text-green min-w-[200px] !font-body text-base md:text-lg">
                  {cannabinoid.name}
                </p>
                <p className="text-green min-w-[200px] !font-body text-base md:text-lg">
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
