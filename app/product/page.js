import React from "react";

const Prod1 = () => {
  return (
    <div className="container-lg container-py bg-white">
      <div className="grid grid-cols-1 lgscreen:grid-cols-2 gap-[50px]">
        {/* Left Image Section */}
        <div className="relative">
          <img
            src="
https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg
 "
            alt="Product"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Side Product Info */}
        <div className="flex flex-col gap-16 py-40 product-details">
          <span className="bg-dark_cream w-max font-body text-16 font-400 text-green rounded-full px-12 py-2">
            30% Off
          </span>
  <div className="flex flex-col gap-[8px] lgscreen:px-8">
  <p className="text-green font-body leading-[normal]">Brand</p>
  <h3 className="text-green font-500">Product Name</h3>
  </div>
  <div className="pdp-Categories lgscreen:px-8">
          <a href="#" className="text-green font-bodytext-green font-body underline">
            Categories
          </a>
          </div>

          {/* Details */}
          <div className="pdp-details flex flex-col gap-[8px] lgscreen:px-8">
            <span className="text-2xl text-green font-500 font-body">Details</span>
            <div className="text-[#6E6B68] flex items-center gap-14">
              <div className="flex gap-[8px] items-center">
              <PlaceholderSvg />
              THC 00.00%
              </div>
              <div className="flex gap-[8px] items-center">
              <PlaceholderSvg /> CBD 0.000%
              </div>
            </div>
            <div className="ctm-pdp-details">
              <p>*This % may represent an aggregate of THC/CBD, THCa/CBDa, THCb/CBDb within the product. Consumers should review the actual product label for exact % of THC/CBD.</p>
            </div>
          </div>

          {/* Description */}
          <div className="gap-line w-full h-1 bg-[#EEEEEE]"></div>
          <div className="flex flex-col gap-[8px] lgscreen:px-8"> 
            <h5 className="text-green font-500">Product Description</h5>
            <p>
            This full gram 510 Vape Cartridge is ready to smoke out of the bag. Like a tart blueberry popsicle, this Blue Dream sativa vape's quality ceramic coil means big flavor and bigger clouds. Battery not included. Rip to unlock Gramlin Mode.----- Proper Disposal: A spent cannabis cartridge shall be properly disposed of as hazardous waste at a household hazardous waste facility or other approved facility.
            </p>
          </div>

          {/* Warning Section */}
          <div className="bg-dark_cream p-20 rounded-[20px]">
            <div className=" lgscreen:px-8 flex flex-col gap-[8px]">
            <div className="flex gap-[10px] items-center">
              {/* SVG Placeholder */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M9.99991 14.5812C9.66192 14.5812 9.3885 14.3022 9.3885 13.9589C9.3885 13.6272 9.67332 13.3379 9.99991 13.3379C10.3265 13.3379 10.6126 13.6272 10.6126 13.9589C10.6126 14.2906 10.3265 14.5812 9.99991 14.5812ZM9.98814 0C9.49065 0 8.99444 0.249428 8.71342 0.748286L0.197998 15.7667C-0.364043 16.7644 0.337242 18 1.46132 18H18.5162C19.6631 18 20.3644 16.7644 19.8023 15.7667L11.2629 0.748286C10.9831 0.249428 10.4856 0 9.98814 0ZM9.98814 1.02857C10.0679 1.02857 10.2666 1.05043 10.3856 1.26257L18.9238 16.2771C19.0377 16.4803 18.9732 16.6539 18.9251 16.74C18.8757 16.8261 18.7567 16.9714 18.5162 16.9714H1.46132C1.23727 16.9714 1.1246 16.83 1.07524 16.7451C1.02587 16.659 0.960044 16.4829 1.07397 16.2797L9.59319 1.25871C9.70965 1.05043 9.90839 1.02857 9.98814 1.02857Z" fill="#004D43"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9.99991 12.1974C9.66192 12.1974 9.3885 11.9184 9.3885 11.5752V5.78559C9.3885 5.45387 9.67332 5.16459 9.99991 5.16459C10.3265 5.16459 10.6126 5.45387 10.6126 5.78559V11.5752C10.6126 11.9069 10.3265 12.1974 9.99991 12.1974Z" fill="#004D43"/>
</svg>
              <h5 className="text-[#004D43] font-500">Warning</h5>
            </div>
            <div className="warning-details">
              <p className="font-700">Proposition 65 Warning for California Consumers</p>
            <p>
            This product can expose you to chemicals including β-myrcene and cannabis smoke, which are known to the State of California to cause cancer, and chemicals including cannabis smoke and 9-tetrahydrocannabinol, which are known to the State of California to cause birth defects or other reproductive harm.
            For more information go to <a className="a-link-hover" href="#">www.P65Warnings.ca.gov</a>
            </p>
            </div>
            </div>

          </div>

          <div className="gap-line w-full h-1 bg-[#EEEEEE]"></div>

          {/* Price & Buttons */}
          <div>
            <h3 className="text-green">$28.40</h3>
            <div className="flex space-x-4 mt-2">
              <button className="green-btn">ADD TO CART</button>
              <button className="green-btn">WISHLIST</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prod1;

const PlaceholderSvg = () => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2159 4.27977L5.14287 11.255L5.78386 11.7213L10.8569 4.74602L10.2159 4.27977Z"
        fill="#004D43"
      />
      <path
        d="M7.24691 6.37497V5.42376C7.24691 4.59324 6.5714 3.91769 5.74094 3.91769C4.91047 3.91769 4.23496 4.59324 4.23496 5.42376V6.37497C4.23496 7.20549 4.91047 7.88105 5.74094 7.88105C6.5714 7.88105 7.24691 7.20549 7.24691 6.37497ZM5.02758 6.37497V5.42376C5.02758 5.0304 5.3476 4.71036 5.74094 4.71036C6.13427 4.71036 6.45429 5.0304 6.45429 5.42376V6.37497C6.45429 6.76834 6.13427 7.08838 5.74094 7.08838C5.3476 7.08838 5.02758 6.76834 5.02758 6.37497Z"
        fill="#004D43"
      />
      <path
        d="M10.2589 8.11885C9.4284 8.11885 8.75289 8.79441 8.75289 9.62493V10.5761C8.75289 11.4067 9.4284 12.0822 10.2589 12.0822C11.0893 12.0822 11.7648 11.4067 11.7648 10.5761V9.62493C11.7648 8.79441 11.0893 8.11885 10.2589 8.11885ZM10.9722 10.5761C10.9722 10.9695 10.6522 11.2895 10.2589 11.2895C9.86553 11.2895 9.54551 10.9695 9.54551 10.5761V9.62493C9.54551 9.23157 9.86553 8.91152 10.2589 8.91152C10.6522 8.91152 10.9722 9.23157 10.9722 9.62493V10.5761Z"
        fill="#004D43"
      />
      <path
        d="M15.5538 9.07719C15.8415 8.78945 16 8.40679 16 7.99995C16 7.59311 15.8415 7.21045 15.5538 6.92271L15.1063 6.47524C14.9222 6.29115 14.8497 6.02065 14.9173 5.76917L15.0814 5.15762C15.2989 4.34613 14.8158 3.50906 14.0046 3.29147L13.3913 3.127C13.14 3.05962 12.9421 2.86145 12.8747 2.61017L12.7104 1.99724C12.6052 1.60407 12.3532 1.27551 12.0006 1.07199C11.6481 0.868472 11.2376 0.814372 10.8446 0.9196L10.2319 1.08368C9.98046 1.15106 9.70998 1.07853 9.52609 0.894432L9.07727 0.445581C8.4832 -0.148527 7.5168 -0.148527 6.92273 0.445581L6.4753 0.893045C6.29121 1.07714 6.02053 1.14947 5.76927 1.0821L5.15777 0.918014C4.34652 0.700426 3.50932 1.18356 3.29175 1.99486L3.12728 2.60799C3.0599 2.85947 2.86175 3.05744 2.61049 3.12462L1.9974 3.2889C1.60426 3.39413 1.27572 3.6462 1.07222 3.99874C0.86871 4.35128 0.814614 4.76168 0.919834 5.15485L1.0841 5.76778C1.15148 6.01926 1.07895 6.28976 0.894867 6.47366L0.446244 6.92231C0.158524 7.21005 0 7.59271 0 7.99955C0 8.40639 0.158524 8.78906 0.446244 9.0768L0.893678 9.52426C1.07776 9.70836 1.15029 9.97886 1.08272 10.2303L0.918645 10.8419C0.701071 11.6534 1.18417 12.4904 1.99542 12.708L2.60851 12.8725C2.85977 12.9399 3.05772 13.1381 3.1251 13.3893L3.28937 14.0025C3.39459 14.3956 3.64664 14.7242 3.99916 14.9277C4.35148 15.1312 4.76205 15.1853 5.15519 15.0801L5.76809 14.9158C6.01935 14.8484 6.28983 14.921 6.47391 15.1051L6.92253 15.5537C7.21026 15.8415 7.59289 16 7.9997 16C8.40651 16 8.78915 15.8415 9.07687 15.5537L9.52431 15.1063C9.70839 14.9222 9.97907 14.8496 10.2303 14.9172L10.8418 15.0813C11.6531 15.2989 12.4903 14.8157 12.7079 14.0044L12.8723 13.3913C12.9397 13.14 13.1379 12.9421 13.3891 12.8747L14.0022 12.7104C14.3953 12.6052 14.7239 12.3531 14.9274 12.0006C15.1309 11.648 15.185 11.2376 15.0796 10.8445L14.9155 10.2317C14.8481 9.98024 14.9207 9.70975 15.1047 9.52585L15.5538 9.07719ZM14.5446 8.96562C14.1609 9.34928 14.0099 9.91307 14.1502 10.4372L14.3143 11.05C14.3648 11.2386 14.3389 11.4356 14.2412 11.6046C14.1435 11.7737 13.986 11.8945 13.7973 11.9451L13.1842 12.1094C12.6603 12.2497 12.2475 12.6625 12.1069 13.1864L11.9424 13.7995C11.838 14.1887 11.4365 14.4206 11.0471 14.3162L10.4356 14.1521C9.9115 14.0116 9.34735 14.1626 8.96373 14.5462L8.51629 14.9937C8.37818 15.1318 8.19469 15.2077 7.99951 15.2077C7.80432 15.2077 7.62083 15.1316 7.48272 14.9937L7.0341 14.545C6.74519 14.2561 6.35423 14.0992 5.95494 14.0992C5.82396 14.0992 5.69219 14.116 5.5628 14.1507L4.9499 14.315C4.76126 14.3655 4.5643 14.3395 4.39527 14.2419C4.22624 14.1442 4.10537 13.9866 4.05484 13.798L3.89057 13.1848C3.75028 12.6609 3.33752 12.2479 2.8136 12.1074L2.20051 11.9429C1.81133 11.8385 1.57949 11.437 1.68392 11.0476L1.84799 10.436C1.98848 9.91188 1.83749 9.34769 1.45386 8.96404L1.00643 8.51657C0.868314 8.37845 0.792421 8.19495 0.792421 7.99975C0.792421 7.80456 0.868512 7.62105 1.00643 7.48293L1.45505 7.03428C1.83868 6.65062 1.98967 6.08683 1.84938 5.56268L1.68511 4.94975C1.63458 4.76109 1.66054 4.56411 1.75823 4.39507C1.85592 4.22604 2.01345 4.10515 2.20209 4.05462L2.81518 3.89034C3.3391 3.75004 3.75206 3.33725 3.89255 2.81329L4.05702 2.20016C4.16145 1.81096 4.56291 1.5791 4.95228 1.68354L5.56379 1.84762C6.08791 1.98812 6.65205 1.83712 7.03568 1.45346L7.48311 1.006C7.76806 0.721035 8.23174 0.721035 8.51669 1.006L8.96551 1.45485C9.34914 1.83851 9.91308 1.98951 10.437 1.84921L11.0497 1.68512C11.2383 1.63459 11.4353 1.66055 11.6043 1.75825C11.7734 1.85594 11.8942 2.01349 11.9448 2.20214L12.109 2.81528C12.2493 3.33923 12.6621 3.75202 13.186 3.89272L13.7993 4.0572C14.1885 4.16163 14.4203 4.56312 14.3159 4.95252L14.1518 5.56407C14.0113 6.08822 14.1623 6.65241 14.5459 7.03606L14.9934 7.48352C15.1315 7.62165 15.2074 7.80515 15.2074 8.00035C15.2074 8.19554 15.1313 8.37905 14.9934 8.51717L14.5446 8.96562Z"
        fill="#004D43"
      />
    </svg>
  );
};
