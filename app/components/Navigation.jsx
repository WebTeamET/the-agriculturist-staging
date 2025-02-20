"use client";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Logo from "./Icons/Logo";

const Navigation = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!data) return null;
  if (data.hide_module) return null;
  return (
    <div>
      <nav className="header bg-[#F9F4EF] py-[20px] px-20 mdscreen6:px-75">
        {/* Top row: Left side nav items (on desktop), center logo, right side actions */}
        <div className="xlscreen1:grid xlscreen1:grid-cols-3 flex items-center justify-between">
          {/* Left nav (desktop) */}
          <ul className="hidden minxlscreen:flex gap-40 uppercase text-black items-center xlscreen1:w-max xlscreen1:mr-auto">
            {data?.nav_items.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                {/* Text link */}
                <PrismicNextLink className="font-body" field={item.nav_link}>
                  {item.nav_link?.text}
                </PrismicNextLink>
                {/* Icon (if any) */}
                {index == 0 ? (
                  <img
                    src="/home.svg"
                    alt="wishlist"
                    className="w-[16px] object-contain h-[16px]"
                  />
                ) : (
                  <Fragment>
                    {item.nav_item_image?.url && (
                      <PrismicNextImage
                        alt={item.nav_item_image.alt || "img"}
                        height={16}
                        width={16}
                        field={item.nav_item_image}
                      />
                    )}
                  </Fragment>
                )}
              </li>
            ))}
          </ul>

          <div className="flex-shrink-0 mx-4 xlscreen1:w-max xlscreen1:mx-auto grid">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Right nav actions (desktop) */}
          <div className="menu-right">
          <div className="nav-right hidden minxlscreen:flex gap-15 items-center w-max xlscreen1:ml-auto">
            <input
              type="text"
              placeholder="Search here..."
              className="w-[235px] font-body border-b mr-20 bg-transparent border-green placeholder-meant px-2 focus:outline-none text-[#004D43]"
            />
            <div className="flex items-center gap-14 w-full max-w-max">
              <img
                src="/bag.svg"
                alt="wishlist"
                className="w-[16px] object-contain h-[16px]"
              />
              <img
                src="/wishlist.svg"
                alt="wishlist"
                className="w-[16px] object-contain h-[16px]"
              />
              <img
                src="/user.svg"
                alt="wishlist"
                className="w-[16px] object-contain h-[16px]"
              />
            </div>
          </div>
          </div>
          {/* Hamburger button (mobile only) */}
          <button
            className="minxlscreen:hidden block text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {/* Simple hamburger icon (SVG) */}
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
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="minxlscreen:hidden mt-30 flex flex-col items-center gap-6">
            {/* Nav items (mobile) */}
            <ul className="menus flex flex-col gap-4 uppercase text-black items-center">
              {data?.nav_items.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <PrismicNextLink field={item.nav_link}>
                    {item.nav_link?.text}
                  </PrismicNextLink>
                  {item.nav_item_image?.url && (
                    <PrismicNextImage
                      alt={item.nav_item_image.alt || "img"}
                      height={16}
                      width={16}
                      field={item.nav_item_image}
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* Actions (mobile) */}
            <ul className="menu-icone flex flex-row gap-6 items-center">
              {data.nav_actions.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer flex items-center gap-2"
                >
                  {item.action_image?.url && (
                    <PrismicNextImage
                      height={16}
                      width={16}
                      alt={item.action_image.alt || "Action icon"}
                      field={item.action_image}
                    />
                  )}
                  <PrismicNextLink field={item.action_link} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
