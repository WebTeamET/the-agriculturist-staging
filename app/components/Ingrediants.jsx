import React from 'react'

const Ingrediants = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Terpenes Section */}
      <div className="bg-dark_cream rounded-[20px] px-20 py-40">
        <h3 className="text-3xl font-semibold text-green">Terpenes</h3>
        <div className="border-t border-green/20 my-[16px]"></div>
        <div className="flex flex-col gap-[16px]">
        {[
          { 
            name: "Beta Caryophyllene", 
            percentage: "1.001%", 
            description: "Peppery: Anti-Inflammatory, Analgesic, Calming" 
          }, 
          { 
            name: "Beta Pinene", 
            percentage: "1.001%", 
            description: "Pine: Focus, Relief, Alert, Balanced" 
          }, 
          { 
            name: "Alpha Bisabolol", 
            percentage: "1.001%", 
            description: "Floral: Soothing, Anti-Inflammatory" 
          }, 
          { 
            name: "Terpinolene", 
            percentage: "1.001%", 
            description: "Fruity: Cerebral, Focused, Energetic" 
          }, 
          { 
            name: "Alpha Humulene", 
            percentage: "1.001%", 
            description: "Hoppy: Pain Relief, Appetite Suppression" 
          }
        ].map((terpene, index) => (
          
          <div key={index} className="flex flex-col gap-[8px]">
            <div className="flex items-center">
              <p className="text-xl text-green font-700 font-body">{terpene.name}</p>
              <span className="ml-20 px-16 py-3 font-body text-12">{terpene.percentage}</span>
            </div>
            <p className="text-sm text-green">{terpene.description}</p>
          </div>
        ))}
      </div>
      </div>

      {/* Cannabinoids Section */}
      <div className="space-y-6 bg-[#F9F4EF] rounded-lg p-40 w-[620px] h-[484px]">
        <h2 className="text-3xl font-semibold text-green">Cannabinoids</h2>
        <div className="border-t border-green/20 mt-8"></div>
        <div className="flex flex-row">
          <div className="space-y-3">
            {[
              { name: "THC", percentage: "27.99%" }, 
              { name: "THCA", percentage: "28.2151%" }, 
              { name: "THCV", percentage: "0.00%" }
            ].map((cannabinoid, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="text-xl text-green">{cannabinoid.name}</p>
                <p className="text-lg text-green">{cannabinoid.percentage}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[
              { name: "CBD", percentage: "0.0303%" }, 
              { name: "CBDA", percentage: "0.0345%" }, 
              { name: "CBC", percentage: "0.00%" }, 
              { name: "CBG", percentage: "0.00%" }, 
              { name: "CBN", percentage: "0.00%" }
            ].map((cannabinoid, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="text-xl text-green">{cannabinoid.name}</p>
                <p className="text-lg text-green">{cannabinoid.percentage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ingrediants
