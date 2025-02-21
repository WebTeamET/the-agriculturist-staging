import Image from "next/image";
import React from "react";
import StarIcon from "../../public/star.svg";

const Prod1 = () => {
  // Array of review data
  const reviews = [
    {
      rating: 5,
      text: "Very happy with engraved bottle of Jack Daniels it makes a great present and is something a bit different. Brilliant service and arrived on time.",
      reviewer: "CARRIE, WIGAN",
    },
    {
      rating: 5,
      text: "Very happy with engraved bottle of Jack Daniels it makes a great present and is something a bit different. Brilliant service and arrived on time.",
      reviewer: "CARRIE, WIGAN",
    },
    {
      rating: 5,
      text: "Very happy with engraved bottle of Jack Daniels it makes a great present and is something a bit different. Brilliant service and arrived on time.",
      reviewer: "CARRIE, WIGAN",
    },
  ];

  const products = [
    {
      name: "Product Name",
      price: 449,
      oldPrice: 699,
      discount: 39,
      rating: 5,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
    {
      name: "Product Name",
      price: 499,
      oldPrice: 799,
      discount: 38,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
    {
      name: "Product Name",
      price: 499,
      oldPrice: 799,
      discount: 38,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
    {
      name: "Product Name",
      price: 499,
      oldPrice: 799,
      discount: 38,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
  ];

  return (
    <div className="container-lg">
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Terpenes Section */}
          <div className="space-y-6 bg-[#F9F4EF] rounded-lg p-40">
            <h2 className="text-3xl font-semibold text-green">Terpenes</h2>
            <div className="border-t border-green/20 mt-8"></div>
            {[
              {
                name: "Beta Caryophyllene",
                percentage: "1.001%",
                description: "Peppery: Anti-Inflammatory, Analgesic, Calming",
              },
              {
                name: "Beta Pinene",
                percentage: "1.001%",
                description: "Pine: Focus, Relief, Alert, Balanced",
              },
              {
                name: "Alpha Bisabolol",
                percentage: "1.001%",
                description: "Floral: Soothing, Anti-Inflammatory",
              },
              {
                name: "Terpinolene",
                percentage: "1.001%",
                description: "Fruity: Cerebral, Focused, Energetic",
              },
              {
                name: "Alpha Humulene",
                percentage: "1.001%",
                description: "Hoppy: Pain Relief, Appetite Suppression",
              },
            ].map((terpene, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center">
                  <p className="text-xl text-green">{terpene.name}</p>
                  <span className="ml-20 green-btn">{terpene.percentage}</span>
                </div>
                <p className="text-sm text-green">{terpene.description}</p>
              </div>
            ))}
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
                  { name: "THCV", percentage: "0.00%" },
                ].map((cannabinoid, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <p className="text-xl text-green">{cannabinoid.name}</p>
                    <p className="text-lg text-green">
                      {cannabinoid.percentage}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  { name: "CBD", percentage: "0.0303%" },
                  { name: "CBDA", percentage: "0.0345%" },
                  { name: "CBC", percentage: "0.00%" },
                  { name: "CBG", percentage: "0.00%" },
                  { name: "CBN", percentage: "0.00%" },
                ].map((cannabinoid, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <p className="text-xl text-green">{cannabinoid.name}</p>
                    <p className="text-lg text-green">
                      {cannabinoid.percentage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-green font-bold font-body">Making memories</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-lg:gap-12 max-md:justify-center text-center max-lg:max-w-3xl max-md:max-w-lg mx-auto mt-16">
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="flex justify-center space-x-1 mt-2.5">
              {/* Map over stars based on rating */}
              {[...Array(review.rating)].map((_, starIndex) => (
                <StarSvg key={starIndex} />
              ))}
            </div>
            <div className="mt-4">
              <p className="text-green font-body text-base">{review.text}</p>
            </div>
            <div className="mt-6">
              <span className="font-body font-semibold text-green">
                {review.reviewer}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-green font-bold font-body">You may also like</h2>
        <div className="grid smscreen:!grid-cols-1 xlscreen:grid-cols-2 md:grid-cols-4 place-items-center gap-30">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative p-10 flex w-full max-full flex-col overflow-hidden rounded-[20px] hover:border hover:border-[#CDBAA7] bg-white shadow-md"
            >
              <a
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  className="object-cover mx-auto w-full h-full"
                  src={product.imageUrl}
                  alt="product image"
                />
              </a>

              <div className="flex flex-col justify-center items-center gap-15 mt-4 px-5 pb-5 space-y-4">
                <div className="flex items-center justify-center mt-15">
                  {[...Array(5)].map((_, idx) => (
                    <Image
                      alt="star-icon"
                      src={StarIcon}
                      height={15}
                      width={14}
                      key={idx}
                      className="mx-2"
                    />
                  ))}
                </div>

                <a href="#" className="text-center !mt-0">
                  <h5 className="text-24 tracking-tight text-slate-900">
                    {product.name}
                  </h5>
                </a>

                <div className="text-center !mt-0">
                  <p>
                    <span className="text-20 font-body mr-10 font-400 text-slate-900">
                      ${product.price}
                    </span>
                    <span className="text-12 font-body text-slate-900 line-through !text-gray">
                      ${product.oldPrice}
                    </span>
                  </p>
                </div>

                <button className="green-btn">Add to cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center px-20 mt-55">
          <button className="green-btn-xl">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Prod1;

const StarSvg = () => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6755 6.3433L11.8833 8.99407L12.5295 12.7744C12.5991 13.1704 12.4348 13.5626 12.1017 13.7985C11.7686 14.0332 11.3357 14.0646 10.9711 13.8776L7.5212 12.1104C7.50832 12.1042 7.49221 12.1042 7.48062 12.1104L4.03009 13.8783C3.87097 13.9598 3.69896 14 3.52888 14C3.30661 14 3.08693 13.9322 2.89818 13.7992C2.56511 13.5632 2.40148 13.171 2.4717 12.7757L3.13011 9.03293L0.325094 6.34328C0.0300296 6.0634 -0.0736905 5.65172 0.0532344 5.27017C0.180793 4.88862 0.513222 4.61564 0.920368 4.5579L4.77924 4.01194L6.53732 0.583618C6.719 0.22403 7.08749 0 7.4998 0C7.91146 0 8.28061 0.223403 8.46292 0.583618L10.1882 3.98929L14.0787 4.55786C14.4865 4.61559 14.8196 4.88858 14.9465 5.27013C15.0741 5.65168 14.9697 6.06272 14.6746 6.34261L14.6755 6.3433Z"
        fill="#FDCC0D"
      />
    </svg>
  );
};
