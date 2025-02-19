import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import React from "react";

const Footer = async () => {
  let client = createClient();
  const { data } = await client.getByUID("footer", "footer-uid");
  const settings = await client.getByUID("settings", "settings-uid");
  if (data.hide_module) return null;
  const fontBody = {
    paragraph: ({ children }) => <p className="font-body">{children}</p>,
  };

  return (
    <footer className={`fotter bg-green text-white pt-60 mdscreen:pt-30 pb-30`}>
      <div className="footer-container">
        <div className="px-20 pb-30 mdscreen6:px-75 mx-auto px-6 flex justify-between items-start flex-wrap lgscreen:flex-nowrap lgscreen2:gap-30">
          {/* Categories Section */}
          <div className="flex flex-nowrap mdscreen3:flex-wrap mdscreen3:!gap-y-50 smscreen:gap-y-30 md:flex-nowrap flex-wrap lgscreen:w-2/3 w-full lgscreen2:px-20 smscreen:text-left">
            {data.footer_categories.map((item, index) => (
              <div className="w-1/6 mdscreen3:w-1/2" key={index}>
                <h6 className="font-500 text-16 mb-15 uppercase">
                  {item.category_heading}
                </h6>
                <ul className="mt-2 space-y-2">
                  {item.category_link.map((link, index) => (
                    <li key={index}>
                      <PrismicNextLink
                        className="inline-block"
                        key={link.key}
                        field={link}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Side Paragraphs and Social Media */}
          <div className="lgscreen:w-1/3 w-full space-y-4 text-justify lgscreen2:px-20">
            <PrismicRichText components={fontBody} field={data.footer_terms} />
            <PrismicRichText
              components={fontBody}
              field={data.footer_warning}
            />
            <div className="flex flex-col gap-10 mdscreen:justify-center mdscreen:items-center !mt-[18px]">
              <h6 className="font-semibold text-16">FOLLOW US</h6>
              <div className="flex items-center gap-4 mt-2">
                <Link target="_blank" href={"https://www.instagram.com"}>
                  <img
                    src="/insta.svg"
                    alt="wishlist"
                    className="w-[16px] object-contain h-[16px]"
                  />
                </Link>
                <Link target="_blank" href={"https://www.linkedin.com"}>
                  <img
                    src="/linkedin.svg"
                    alt="wishlist"
                    className="w-[16px] object-contain h-[16px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-20 mdscreen6:px-75 text-center text-xl font-bold pb-20 footer-img-line flex items-center gap-10">
          <div className="footer-line-left w-full mx-auto"></div>
          <PrismicNextImage
            className="w-max mx-auto"
            alt="img"
            field={settings.data.site_logo}
          />
          <div className="footer-line-right w-full mx-auto"></div>
        </div>
        <div className="px-20 mdscreen6:px-75 flex justify-between smscreen:flex-wrap smscreen:text-center smscreen:justify-center smscreen:gap-5 text-sm">
          <p>Copyright © 2025. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="font-300" href="#">
              Terms & Conditions
            </a>
            <span>|</span>
            <a className="font-300" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
