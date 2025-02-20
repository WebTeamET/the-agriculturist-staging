"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Icons/Logo";
const Navigation = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Listen for scroll events to update the sticky state
  useEffect(() => {
    const handleScroll = () => {
      // Adjust the threshold as needed
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data || data.hide_module) return null;

  return (
    <nav
      className={`header bg-[#F9F4EF] px-20 mdscreen6:px-75 sticky top-[-1px] z-9 transition-all duration-500 ${
        isSticky ? "py-[10px] shadow-md" : "py-[20px]"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden minxlscreen:flex items-center justify-between">
        {/* Left nav items */}
        <ul className="flex gap-40 uppercase text-black items-center xlscreen1:w-max xlscreen1:mr-auto">
          {data.nav_items.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
              <PrismicNextLink className="font-body" field={item.nav_link}>
                {item.nav_link?.text}
              </PrismicNextLink>
              {item.nav_item_image?.url && (
                <PrismicNextImage
                  field={item.nav_item_image}
                  alt="social-icon"
                  className="w-[16px] h-[16px] object-contain cursor-pointer"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <div className="flex-shrink-0 mx-auto grid">
          <Link href="/">
            <PrismicNextImage
              field={data.nav_logo}
              alt="logo"
              className="w-[160px] h-[31px]"
            />
          </Link>
        </div>

        {/* Right search and actions */}
        <div className="flex gap-15 items-center xlscreen1:ml-auto">
          <input
            type="text"
            placeholder="Search here"
            aria-label="Search here"
            className="w-[235px] font-body border-b mr-20 bg-transparent border-green placeholder-meant px-2 focus:outline-none text-[#004D43]"
          />
          <div className="flex items-center gap-14">
            {data.nav_actions.map((item, index) => (
              <PrismicNextLink key={index} field={item.action_link}>
                <PrismicNextImage
                  field={item.action_image}
                  alt="action-logo"
                  className="w-auto h-[16px]"
                />
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation */}
      <div className="minxlscreen:hidden flex items-center justify-between">
        {/* Hamburger on left */}
        <button
          className="text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo in center */}
        <div className="grid">
          <Link href="/">
            <PrismicNextImage
              field={data.nav_logo}
              alt="logo"
              className="w-[160px] h-[31px]"
            />
          </Link>
        </div>

        {/* Action items on right */}
        <div className="flex items-center gap-6 mdscreen:gap-15">
          {data.nav_actions.map((item, index) => (
            <PrismicNextLink key={index} field={item.action_link}>
              <PrismicNextImage
                field={item.action_image}
                alt="action-logo"
                className="w-auto h-[16px]"
              />
            </PrismicNextLink>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu with smooth transition */}
      <div
        className={`minxlscreen:hidden flex flex-col items-center gap-6 overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <ul className="menus flex flex-col gap-4 uppercase text-black items-center">
          {data.nav_items.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
              <PrismicNextLink field={item.nav_link}>
                {item.nav_link?.text}
              </PrismicNextLink>
              {item.nav_item_image?.url && (
                <PrismicNextImage
                  field={item.nav_item_image}
                  alt={item.nav_item_image.alt || "img"}
                  className="w-[16px] h-[16px] object-contain"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
