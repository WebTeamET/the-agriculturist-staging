"use client";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React, { useEffect, useState } from "react";

const AgeVerification = ({ data }) => {
  const [showVerification, setShowVerification] = useState(false);

  useEffect(() => {
    // If the user hasn't been verified, show the verification overlay.
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
      // If "Yes" is clicked, save the flag and remove the overlay.
      localStorage.setItem("ageVerified", "true");
      setShowVerification(false);
    } else {
      // If "No" is clicked, redirect the user (or handle it as needed).
      window.location.href = "about:blank"; // Replace with your exit URL
    }
  };

  // If verification is not needed or the module is hidden, don't render the overlay.
  if (!showVerification || data.hide_module) return null;

  return (
    <div
      className="fixed z-10 inset-0 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('${data.background_image.url}')`,
      }}
    >
      <div className="absolute my-[46px] top-0 left-0 right-0 p-8 text-center">
        <PrismicNextImage
          alt="Logo"
          className="mx-auto mb-4 max-w-80"
          field={data.logo}
        />
      </div>

      <div className="p-[20px] rounded-lg text-center max-w-lg w-full">
        <h2 className="text-5xl text-white mb-[24px] !font-400">
          {data.heading}
        </h2>
        <PrismicRichText components={components} field={data.agreement_text} />
        <div className="flex justify-center gap-[40px]">
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
              no
            </button>
          </div>
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
