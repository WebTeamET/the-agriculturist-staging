"use client";
import { useState } from "react"; // Import useState for managing tab state
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import StarIcon from "../../public/star.svg";
import Image from "next/image";

const productsData = {
  bestSellers: [
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
  ],
  newArrivals: [
    {
      name: "New Arrival 1",
      price: 550,
      oldPrice: 750,
      discount: 27,
      rating: 5,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
    {
      name: "New Arrival 2",
      price: 620,
      oldPrice: 820,
      discount: 24,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
    {
      name: "New Arrival 3",
      price: 620,
      oldPrice: 820,
      discount: 24,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
    {
      name: "New Arrival 4",
      price: 620,
      oldPrice: 820,
      discount: 24,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
  ],
  seasonalDrops: [
    {
      name: "Seasonal Drop 1",
      price: 480,
      oldPrice: 680,
      discount: 30,
      rating: 5,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
    {
      name: "Seasonal Drop 2",
      price: 510,
      oldPrice: 710,
      discount: 28,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
    {
      name: "Seasonal Drop 3",
      price: 510,
      oldPrice: 710,
      discount: 28,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
    {
      name: "Seasonal Drop 4",
      price: 510,
      oldPrice: 710,
      discount: 28,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
    },
  ],
};

const ProductGrid = ({ products }) => {
  return (
    <div className="grid smscreen:!grid-cols-1 xlscreen:grid-cols-2 md:grid-cols-4 place-items-center gap-30">
      {products.map((product, index) => (
        <div
          key={index}
          className="relative p-10 flex w-full max-full flex-col overflow-hidden rounded-[20px] hover:border hover:border-[#CDBAA7] bg-white shadow-[0px_6px_40px_0px_rgba(0,0,0,0.1)] hover:shadow-none"
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
                // <svg
                //   key={idx}
                //   aria-hidden="true"
                //   className={`h-5 w-5 ${idx < product.rating ? "text-yellow-300" : "text-gray-300"}`}
                //   fill="currentColor"
                //   viewBox="0 0 20 20"
                //   xmlns="http://www.w3.org/2000/svg"
                // >
                //   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                // </svg>

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
  );
};

const FeaturedProducts = ({ slice }) => {
  const [activeTab, setActiveTab] = useState("bestSellers");
  const [products, setProducts] = useState(productsData.bestSellers);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setProducts(productsData[tab]);
  };

  if (slice.primary.hide_module) return null;

  return (
    <section
      style={{
        backgroundColor: slice.primary.background_color || "#F8F5F1",
      }}
      className="lgscreen:py-60 py-40"
    >
      <div className="product-container container-lg">
        {/* Optional Title/Sub-Title */}
        {slice.primary.sub_title && (
          <div className="flex justify-center">
            <PrismicRichText
              field={slice.primary.sub_title}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-opensans tracking-[0.15em] text-meant font-medium sm:text-left text-center mb-14">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        )}

        {slice.primary.title && (
          <div className="flex justify-center mb-4">
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-green mobile-br lgscreen:text-48 smscreen:text-32 lgscreen:leading-[52px] smscreen:leading-[36px] leading-[42px] text-38 font-bold text-center">
                    {children}
                  </h2>
                ),
              }}
            />
          </div>
        )}

        {/* Tabs */}
        <div className="tabs flex mdscreen:flex-wrap justify-between lgscreen:py-[45px] py-30 max-w-[600px] mx-auto mdscreen:px-20">
          <button
            onClick={() => handleTabClick("bestSellers")}
            className={`font-body smscreen:!w-full mdscreen:w-1/2 px-32 py-16 mdscreen:px-28 mdscreen:py-14 text-16 rounded-full text-meant font-500 ${
              activeTab === "bestSellers" && "active"
            }`}
          >
            BEST SELLERS
          </button>
          <button
            onClick={() => handleTabClick("newArrivals")}
            className={`font-body smscreen:!w-full mdscreen:w-1/2 px-32 py-16 mdscreen:px-28 mdscreen:py-14 text-16 rounded-full text-meant font-500 ${
              activeTab === "newArrivals" && "active"
            }`}
          >
            NEW ARRIVALS
          </button>
          <button
            onClick={() => handleTabClick("seasonalDrops")}
            className={`font-body smscreen:!w-full mdscreen:w-1/2 px-32 py-16 mdscreen:px-28 mdscreen:py-14 text-16 rounded-full text-meant font-500 ${
              activeTab === "seasonalDrops" && "active"
            }`}
          >
            SEASONAL DROPS
          </button>
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} />

        {slice.primary.button_text && slice.primary.button_link && (
          <div className="flex justify-center px-20 mt-55">
            <PrismicNextLink
              field={slice.primary.button_link}
              className="green-btn-xl"
            >
              {slice.primary.button_text}
            </PrismicNextLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
