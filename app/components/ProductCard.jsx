import React from "react";
import StarIcon from "../../public/star.svg";
import Image from "next/image";

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

const ProductCard = () => {
  return (
    <div className="container-lg container-py">
      <h2 className="text-3xl font-semibold text-green">You may also like</h2>
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
    </div>
  );
};

export default ProductCard;
