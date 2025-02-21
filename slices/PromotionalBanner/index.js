"use client";

import Filter from "@/app/components/Filter";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import StarIcon from "../../public/star.svg";
import useFilter from "@/app/hooks/useFilter";

const PromotionalBanner = ({ slice }) => {
  if (slice.primary.hide_module) return null;

  console.log(slice.primary.promotional_items, 123);

  const components = {
    heading5: ({ children }) => (
      <h5 className="text-green font-700">{children}</h5>
    ),
    paragraph: ({ children }) => (
      <p className="font-body text-white !text-18">{children}</p>
    ),
  };

  const products = [
    {
      name: "Product Name",
      price: 855,
      oldPrice: 742,
      discount: 19,
      rating: 5,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
      date: "2023-08-01",
    },
    {
      name: "Product Name",
      price: 632,
      oldPrice: 452,
      discount: 49,
      rating: 5,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
      date: "2024-08-01",
    },
    {
      name: "Product Name",
      price: 449,
      oldPrice: 699,
      discount: 39,
      rating: 5,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
      date: "2023-10-01",
    },
    {
      name: "Product Name",
      price: 499,
      oldPrice: 799,
      discount: 38,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
      date: "2024-03-01",
    },
    {
      name: "Product Name",
      price: 499,
      oldPrice: 799,
      discount: 38,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
      date: "2023-08-04",
    },
    {
      name: "Product Name",
      price: 499,
      oldPrice: 799,
      discount: 38,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
      date: "2023-02-25",
    },
    {
      name: "Product Name",
      price: 345,
      oldPrice: 245,
      discount: 18,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
      date: "2023-02-16",
    },
    {
      name: "Product Name",
      price: 456,
      oldPrice: 231,
      discount: 20,
      rating: 4,
      imageUrl:
        "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
      date: "2024-12-18",
    },
  ];

  const { filter } = useFilter();

  const sortedProducts = [...products].sort((a, b) => {
    if (filter === "newest") return new Date(b.date) - new Date(a.date);
    if (filter === "oldest") return new Date(a.date) - new Date(b.date);
    if (filter === "low-high") return a.price - b.price;
    if (filter === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.container && "container-lg container-py"}`}
    >
      <div className="deals">
        <PrismicRichText
          components={components}
          className="font-body text-green"
          field={slice.primary.heading}
        />
        <div className="grid desktop:grid-cols-4 grid-cols-3 lgscreen2:grid-cols-2 smscreen:!grid-cols-1 gap-[15px] mt-18 pb-40">
          {slice.primary.promotional_items.map((item, index) => (
            <div key={index} className="deals-inner relative w-full h-full">
              <div className="ctm-deals-inner relative w-full h-full">
                <div className="deals-img relative h-full">
                  <PrismicNextImage
                    className="rounded-[20px]"
                    alt="img"
                    field={item.image}
                  />
                  <div className="gradiant rounded-[20px] absolute inset-0 bg-gradient-to-t from-[#004D43] to-transparent"></div>
                </div>
                <div className="deals-main w-full h-full absolute top-0 flex flex-col justify-between">
                  <div className="deals-descount flex flex-col justify-between w-full h-full px-25 py-32 relative top-0 left-0">
                    <div className="flex justify-between">
                      <h4 className="text-white font-700">
                        {item.percentage_offer}% off
                      </h4>
                      <div className="deals-btn">
                        <PrismicNextLink
                          className="white-btn"
                          field={item.button_link}
                        />
                      </div>
                    </div>
                    <div className="deals-details">
                      <PrismicRichText
                        components={components}
                        className="text-white"
                        field={item.content}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Filter />
      <div className="grid smscreen:!grid-cols-1 xlscreen:grid-cols-2 md:grid-cols-4 place-items-center gap-30">
        {sortedProducts?.map((product, index) => (
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
    </section>
  );
};

export default PromotionalBanner;
