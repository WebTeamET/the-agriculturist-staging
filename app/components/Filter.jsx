"use client";
import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import useFilter from "../hooks/useFilter";

const Page = () => {
  const filterOptions = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Price: Low to High", value: "low-high" },
    { label: "Price: High to Low", value: "high-low" },
  ];
  const { filter, setFilter } = useFilter();
  const [isOpen, setIsOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOption, setSelectedOption] = useState(filterOptions[0]);

  useEffect(() => {
    const current = filterOptions.find((option) => option.value === filter);
    if (current) setSelectedOption(current);
  }, [filter]);

  return (
    <section className="shop-page">
      <div className="flex items-center justify-between mb-40 text-green font-semibold xlscreen2:gap-[12px] small_desktop1:flex-wrap mdscreen3:!flex-nowrap">
        <div className="flex items-center gap-4 w-2/3 xlscreen2:w-full flex-wrap">
          <div className="flex items-center justify-start smscreen:flex-wrap gap-[12] font-body mdscreen3:relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-white text-14 font-body leading-[normal] font-400 border border-green rounded-full px-12 py-13 flex items-center gap-x-2"
            >
              <Icon type="filter" />
              FILTER
            </button>
            <div
              className={`flex items-center justify-start gap-[12px] w-full ${showFilters ? "mdscreen3:block" : "mdscreen3:hidden"} mdscreen3:absolute mdscreen3:bg-white mdscreen3:shadow-lg mdscreen3:z-10 mdscreen3:top-[50px] mdscreen3:p-10 mdscreen3:rounded-lg mdscreen3:border mdscreen3:border-green mdscreen3:flex-col mdscreen3:flex mdscreen3:justify-start mdscreen3:items-start mdscreen3::w-full mdscreen3:min-w-40`}
            >
              <button className="bg-[#F9F4EF] text-14 font-body leading-[normal] font-400 rounded-full px-12 py-12 flex items-center gap-x-2">
                <Icon type="sale" />
                On Sale
              </button>
              <button className="bg-[#F9F4EF] text-14 font-body leading-[normal] font-400 rounded-full px-12 py-12 flex items-center gap-x-2">
                <Icon type="classification" /> Classification
              </button>
              <button className="bg-[#F9F4EF] text-14 font-body leading-[normal] font-400 rounded-full px-12 py-12 flex items-center gap-x-2">
                <Icon type="price" /> Price
              </button>
              <button className="bg-[#F9F4EF] text-14 font-body leading-[normal] font-400 rounded-full px-12 py-12 flex items-center gap-x-2">
                <Icon type="thc" /> THC
              </button>
              <button className="bg-[#F9F4EF] text-14 font-body leading-[normal] font-400 rounded-full px-12 py-12 flex items-center gap-x-2">
                <Icon type="effects" /> Effects
              </button>
              <button className="bg-[#F9F4EF] text-14 font-body leading-[normal] font-400 rounded-full px-12 py-12 flex items-center gap-x-2">
                <Icon type="brands" /> Brands
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="whitespace-nowrap bg-white justify-between w-full min-w-[130px] border font-body leading-[normal] font-400 border-green rounded-full px-12 py-13 flex items-center gap-x-2"
          >
            {selectedOption.label}
            <Icon type="downArrow" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-green rounded-lg shadow-lg z-10 p-12">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  className={`w-full flex justify-between items-center px-4 py-2 hover:bg-gray-100 font-body font-400 ${
                    selectedOption.value === option.value ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setSelectedOption(option);
                    setFilter(option.value);
                    window.dispatchEvent(
                      new CustomEvent("filterChange", {
                        detail: { filter: option.value },
                      })
                    );
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                  {selectedOption.value === option.value && <DummyIcons />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;

const DummyIcons = () => {
  return (
    <>
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5374 2.87435H5.90507C5.65606 2.87435 5.44263 2.65035 5.44263 2.38902C5.44263 2.12769 5.65606 1.90369 5.90507 1.90369H17.5374C17.7864 1.90369 17.9999 2.12769 17.9999 2.38902C17.9999 2.65035 17.7864 2.87435 17.5374 2.87435Z"
          fill="#004D43"
        />
        <path
          d="M2.27691 2.87448H0.462692C0.213682 2.87448 0.000244141 2.65048 0.000244141 2.38914C0.000244141 2.12781 0.213682 1.90381 0.462692 1.90381H2.27691C2.52592 1.90381 2.73936 2.12781 2.73936 2.38914C2.73936 2.65048 2.56149 2.87448 2.27691 2.87448Z"
          fill="#004D43"
        />
        <path
          d="M17.5376 7.46713H14.4783C14.2293 7.46713 14.0159 7.24313 14.0159 6.98179C14.0159 6.72046 14.2293 6.49646 14.4783 6.49646H17.5376C17.7866 6.49646 18 6.72046 18 6.98179C18 7.24313 17.7866 7.46713 17.5376 7.46713Z"
          fill="#004D43"
        />
        <path
          d="M10.8497 7.46713H0.462448C0.213438 7.46713 0 7.24313 0 6.98179C0 6.72046 0.213438 6.49646 0.462448 6.49646H10.8497C11.0987 6.49646 11.3122 6.72046 11.3122 6.98179C11.3122 7.24313 11.0987 7.46713 10.8497 7.46713Z"
          fill="#004D43"
        />
        <path
          d="M17.5374 12.097H5.90507C5.65606 12.097 5.44263 11.873 5.44263 11.6117C5.44263 11.3503 5.65606 11.1263 5.90507 11.1263H17.5374C17.7864 11.1263 17.9999 11.3503 17.9999 11.6117C17.9999 11.873 17.7864 12.097 17.5374 12.097Z"
          fill="#004D43"
        />
        <path
          d="M2.27667 12.0964H0.462448C0.213438 12.0964 0 11.8724 0 11.611C0 11.3124 0.213438 11.0884 0.462448 11.0884H2.27667C2.52568 11.0884 2.73911 11.3124 2.73911 11.5737C2.77469 11.8724 2.56125 12.0964 2.27667 12.0964Z"
          fill="#004D43"
        />
        <path
          d="M4.09063 4.77903C2.84558 4.77903 1.81396 3.69637 1.81396 2.3897C1.81396 1.08303 2.84558 0.000366211 4.09063 0.000366211C5.33568 0.000366211 6.3673 1.08303 6.3673 2.3897C6.3673 3.69637 5.37126 4.77903 4.09063 4.77903ZM4.09063 0.971033C3.3436 0.971033 2.73886 1.6057 2.73886 2.3897C2.73886 3.1737 3.3436 3.80837 4.09063 3.80837C4.83766 3.80837 5.4424 3.1737 5.4424 2.3897C5.4424 1.6057 4.83766 0.971033 4.09063 0.971033Z"
          fill="#004D43"
        />
        <path
          d="M12.6639 9.37083C11.4188 9.37083 10.3872 8.28816 10.3872 6.9815C10.3872 5.67483 11.4188 4.59216 12.6639 4.59216C13.9089 4.59216 14.9405 5.67483 14.9405 6.9815C14.9405 8.28816 13.9445 9.37083 12.6639 9.37083ZM12.6639 5.56283C11.9168 5.56283 11.3121 6.1975 11.3121 6.9815C11.3121 7.7655 11.9168 8.40016 12.6639 8.40016C13.4109 8.40016 14.0156 7.7655 14.0156 6.9815C14.0156 6.1975 13.4109 5.56283 12.6639 5.56283Z"
          fill="#004D43"
        />
        <path
          d="M4.09063 13.9997C2.84558 13.9997 1.81396 12.9171 1.81396 11.6104C1.81396 10.2664 2.84558 9.22107 4.09063 9.22107C5.33568 9.22107 6.3673 10.3037 6.3673 11.6104C6.40287 12.9171 5.37126 13.9997 4.09063 13.9997ZM4.09063 10.1917C3.3436 10.1917 2.73886 10.8264 2.73886 11.6104C2.73886 12.3944 3.3436 13.0291 4.09063 13.0291C4.83766 13.0291 5.4424 12.3944 5.4424 11.6104C5.4424 10.8264 4.83766 10.1917 4.09063 10.1917Z"
          fill="#004D43"
        />
      </svg>
    </>
  );
};
