"use client";
import React, { useEffect, useState } from "react";

const AgeVerification = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("ageVerified")) {
      setIsVerified(true);
    }
  }, []);

  const handleVerification = (isVerified) => {
    localStorage.setItem("ageVerified", isVerified);
    setIsVerified(false);
  };

  if (!isVerified) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/green-bg.png')",
      }}
    >
      <div className="absolute top-0 left-0 right-0 p-8 text-center">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="mx-auto mb-4 max-w-80"
        />
      </div>

      <div className="p-8 rounded-lg text-center max-w-lg w-full">
        <h2 className="text-5xl text-white mb-4">Age Verification</h2>
        <p className="mb-6 text-white">Are you 21 years of age or older?</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleVerification(true)}
            className="px-6 py-2 text-white rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-[#004D43] hover:outline hover:outline-2 hover:outline-white hover:outline-offset-4 transition"
          >
            Yes
          </button>
          <button
            onClick={() => handleVerification(false)}
            className="px-6 py-2 text-white rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-[#004D43] hover:outline hover:outline-2 hover:outline-white hover:outline-offset-4 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>

    //     <div
    //       className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
    //       style={{
    //         backgroundImage: "url('/assets/green-bg.png')",
    //       }}
    //     >
    //       <div className="absolute top-0 left-0 right-0 p-8 text-center">
    //         <img
    //           src="/assets/logo.png"
    //           alt="Logo"
    //           className="mx-auto mb-4 max-w-80"

    //         />
    //       </div>

    //       <div className="p-8 rounded-lg text-center max-w-lg w-full">
    //         <h2 className="text-5xl text-white mb-4">Age Verification</h2>

    //         <div className="flex justify-center space-x-4">

    //     <button
    //   onClick={() => handleVerification(true)}
    //   className="px-6 py-2 text-white rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-[#004D43] hover:outline hover:outline-2 hover:outline-white hover:outline-offset-4 transition"
    // >
    // Sorry,you must be 21+
    // </button>
    // <button
    //   onClick={() => handleVerification(false)}
    //   className="px-6 py-2 text-white rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-[#004D43] hover:outline hover:outline-2 hover:outline-white hover:outline-offset-4 transition"
    // >
    // Exit the site
    // </button>

    //       </div>
    //       </div>
    //     </div>
  );
};

export default AgeVerification;
