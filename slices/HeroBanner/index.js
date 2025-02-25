import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const HeroBanner = ({ slice }) => {
  const components = {
    paragraph: ({ children }) => (
      <p className="font-body !text-18 capitalize">{children}</p>
    ),
  };
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative h-[480px] w-full">
        <div className="absolute inset-0">
          <PrismicNextImage
            alt="image"
            field={slice.primary.hero_image}
            fetchPriority="high"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004D43] to-transparent"></div>
        </div>
        <div
          className={`relative z-2 flex ${!slice.primary.spacing_between_content ? "" : "gap-11 lgscreen2:gap-14"}  h-full w-full flex-col items-center justify-center`}
        >
          <div className="max-w-3xl text-center text-white">
            <PrismicRichText field={slice.primary.heading} />
          </div>
          <div className="flex !text-18 gap-1 max-w-3xl text-center text-white">
            {slice.primary.sub_heading_prefix?.url &&
              slice.primary.sub_heading_prefix?.text && (
                <p className="font-body !text-18">
                  <Link href={slice.primary.sub_heading_prefix.url}>
                    {slice.primary.sub_heading_prefix.text}
                  </Link>
                </p>
              )}
            {slice.primary.sub_heading_prefix_2?.url &&
              slice.primary.sub_heading_prefix_2?.text && (
                <p className="font-body !text-18">
                  <Link href={slice.primary.sub_heading_prefix_2?.url}>
                    {slice.primary.sub_heading_prefix_2?.text}
                  </Link>
                </p>
              )}
            <PrismicRichText
              components={components}
              field={slice.primary.sub_heading}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
