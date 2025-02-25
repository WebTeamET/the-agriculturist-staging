"use client";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AgeVerification = ({ data }) => {
  const [showVerification, setShowVerification] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("ageVerified")) {
      setShowVerification(true);
    }
    (async () => {
      const client = createClient();
      await client.getByUID("age_verification", "age_verification-uid");
    })();
  }, []);

  const handleVerification = (isVerified) => {
    if (isVerified) {
      localStorage.setItem("ageVerified", "true");
      setShowVerification(false);
    }
  };

  if (!data || !showVerification || data.hide_module) return null;

  return (
    <div
      className="fixed z-50 age-popup inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat"
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
        <div className="flex justify-center gap-[40px] smscreen:flex-wrap smscreen:gap-20">
          <button
            className="font-body max-w-max uppercase leading-[normal] px-[48px] py-[11px] m-[1px] text-white rounded-full bg-transparent border-1 border-white hover:bg-white hover:text-[#004D43] hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 transition"
            onClick={() => handleVerification(true)}
          >
            Sorry, you must be 21+
          </button>
          <PrismicNextLink
            className="font-body uppercase leading-[normal] px-[48px] py-[11px] m-[1px] text-white rounded-full bg-transparent border-1 border-white hover:bg-white hover:text-[#004D43] hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 transition"
            field={data.to_redirect}
          />
        </div>
        <div className="vertical-line absolute bottom-0 left-[50%]">
          <Image
            width={10}
            height={10}
            className="relative max-w-max"
            src="/Line1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
