import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const PromotionalBanner = ({ slice }) => {
  if (slice.primary.hide_module) return null;

  const components = {
    heading5: ({ children }) => (
      <h5 className="text-green font-700">{children}</h5>
    ),
    paragraph: ({ children }) => <p className="text-body">{children}</p>,
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.container && "container-lg container-py"}`}
    >
      <div>
        <PrismicRichText
          components={components}
          className="font-body text-green"
          field={slice.primary.heading}
        />
        <div className="grid grid-cols-4 small_desktop1:grid-cols-3 xlscreen:grid-cols-2 smscreen:!grid-cols-1 gap-[15px] mt-18">
          {slice.primary.promotional_items.map((item, index) => (
            <div key={index}>
              <PrismicNextImage
                className="rounded-[20px]"
                alt="img"
                field={item.image}
              />
              <PrismicRichText field={item.content} />
              {item.percentage_offer}
              <PrismicNextLink
                className={`${item.button_position}`}
                field={item.button_link}
              />
              <PrismicRichText field={item.content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
