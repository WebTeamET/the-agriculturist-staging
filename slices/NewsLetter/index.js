import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const NewsLetter = ({ slice }) => {
  if (slice.primary.hide_module) return null;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden text-center lgscreen:py-60 py-40 space-y-6"
      style={{
        backgroundColor: slice.primary.background_color || "#F8F5F1",
      }}
    >
      <div className="subscription-container max-w-[770px] mx-auto mdscreen:px-20">
        {/* Background Images */}
        {slice.primary.background_image?.url && (
          <>
            {/* Bottom Left Image */}
            <PrismicNextImage
              field={slice.primary.background_image}
              className="absolute bottom-[-20px] left-[-20px] h-auto max-w-[200px] object-contain"
              alt="background"
            />
            {/* Top Right Rotated Image */}
            <PrismicNextImage
              field={slice.primary.background_image}
              className="absolute top-[-20px] right-[-20px] h-auto max-w-[200px] object-contain rotate-180"
              alt="background rotated"
            />
          </>
        )}

        {/* Preheading */}
        {slice.primary.preheading && (
          <p
            className="text-base font-opensans tracking-[0.15em] text-meant font-medium text-center mb-14"
            // style={{
            //   color: slice.primary.preheading_color || "white",
            // }}
          >
            {slice.primary.preheading}
          </p>
        )}

        {/* Title */}
        {slice.primary.title && (
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2
                  className="lgscreen:text-48 smscreen:text-32 leading-[52px] smscreen:leading-[36px] leading-[42px] text-38 font-bold text-center !mt-0 !mb-15"
                  style={{
                    color: slice.primary.title_color || "#004D43",
                  }}
                >
                  {children}
                </h2>
              ),
            }}
          />
        )}

        {/* Description */}
        {slice.primary.description && (
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p
                  className="text-16 mb-4 !mt-0 !mb-15"
                  style={{
                    color: slice.primary.description_color || "#004D43",
                  }}
                >
                  {children}
                </p>
              ),
            }}
          />
        )}

        {/* Email Input & Button */}
        <div className="relative mt-4!mt-0 !mb-0 smscreen:flex flex-col gap-20 justify-center items-center">
          <input
            type="email"
            placeholder={slice.primary.placeholder_text || "Enter your email"}
            className="font-body w-full pr-[10px] pl-20 py-[10px] rounded-full border-2 outline-none text-16 text-[#004D43] bg-transparent placeholder-green"
            style={{
              borderColor: slice.primary.border_color || "#004D43",
            }}
          />

          <button
            className="btn-green-xxl absolute !px-50 right-[5px] top-1/2 transform -translate-y-1/2 rounded-full text-white text-16 smscreen:relative smscreen:transform-unset smsreen:right:0 smsreen:inline-block smscreen:mt-20"
            // style={{
            //   backgroundColor:
            //     slice.primary.button_background_color || "#1E3932",
            // }}
          >
            {slice.primary.button_text || "Subscribe"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
