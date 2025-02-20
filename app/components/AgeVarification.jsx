"use client";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React, { useEffect, useState } from "react";

const AgeVerification = ({ data }) => {
  const [showVerification, setShowVerification] = useState(false);
  const [showSorryMessage, setShowSorryMessage] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("ageVerified")) {
      setShowVerification(true);
    }
    const fetchData = async () => {
      const client = createClient();
      const response = await client.getByUID(
        "age_verification",
        "age_verification-uid"
      );
    };
    fetchData();
  }, []);

  if (!data) return null;

  const components = {
    paragraph: ({ children }) => (
      <p className="mb-[48px] font-grillsans !text-26 text-white font-300">
        {children}
      </p>
    ),
  };

  const handleVerification = (choice) => {
    if (choice) {
      localStorage.setItem("ageVerified", "true");
      setShowVerification(false);
    } else {
      setShowSorryMessage(true);
    }
  };

  const handleRedirect = () => {
    window.location.href = "https://www.google.com"; // Redirect to Google
  };

  if (!showVerification || data.hide_module) return null;
  return (
    <div
      className="fixed z-10 age-popup inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${data.background_image.url.split("?")[0]}')`,
      }}
    >
      <div className="absolute my-[46px] top-0 left-0 right-0 p-8 text-center">
        <PrismicNextImage
          alt="Logo"
          className="mx-auto mb-4 max-w-80"
          field={data.logo}
        />
      </div>

      <div className="p-[20px] rounded-lg text-center max-w-max w-full">
        <h2 className="text-5xl text-white mb-[24px] !font-400">
          {data.heading}
        </h2>
        {!showSorryMessage && (
          <PrismicRichText
            components={components}
            field={data.agreement_text}
          />
        )}
        <div className="flex justify-center gap-[40px] smscreen:flex-wrap smscreen:gap-20">
          {showSorryMessage ? (
            <>
              <div className="rounded-full">
                <button className="font-body max-w-max uppercase leading-[normal] px-[48px] py-[11px] m-[1px] text-white rounded-full bg-transparent border-1 border-white hover:bg-white hover:text-[#004D43] hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 transition">
                  Sorry, you must be 21+
                </button>
              </div>
              <div className="rounded-full">
                <PrismicNextLink
                  className="font-body uppercase leading-[normal] px-[48px] py-[11px] m-[1px] text-white rounded-full bg-transparent border-1 border-white hover:bg-white hover:text-[#004D43] hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 transition"
                  field={data.to_redirect}
                />
              </div>
            </>
          ) : (
            <>
              <div className="rounded-full">
                <button
                  onClick={() => handleVerification(true)}
                  className="font-body capitalize leading-[normal] px-[48px] py-[11px] m-[1px] text-white rounded-full bg-transparent border-1 border-white hover:bg-white hover:text-[#004D43] hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 transition "
                >
                  Yes
                </button>
              </div>
              <div className="rounded-full">
                <button
                  onClick={() => handleVerification(false)}
                  className="font-body capitalize leading-[normal] px-[48px] py-[11px] m-[1px] text-white rounded-full bg-transparent border-1 border-white hover:bg-white hover:text-[#004D43] hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 transition "
                >
                  No
                </button>
              </div>
            </>
          )}
        </div>
        <div className="vertical-line absolute bottom-0 left-[50%]">
          <img
            className="relative max-w-max"
            src="/Line1.png"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
