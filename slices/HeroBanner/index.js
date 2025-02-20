import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const HeroBanner = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <PrismicNextImage
            alt="image"
            field={slice.primary.hero_image}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004D43] to-transparent"></div>
        </div>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
          <div className="max-w-3xl text-center text-white">
            <PrismicRichText field={slice.primary.heading} />
          </div>
          <div className="max-w-3xl text-center text-white">
            <PrismicRichText field={slice.primary.sub_heading} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
