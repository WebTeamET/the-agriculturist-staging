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
      <div className="deals">
        <PrismicRichText
          components={components}
          className="font-body text-green"
          field={slice.primary.heading}
        />
        <div className="grid grid-cols-4 small_desktop1:grid-cols-3 xlscreen:!grid-cols-2 smscreen:!grid-cols-1 gap-[15px] mt-18">
          {slice.primary.promotional_items.map((item, index) => (
            <div key={index} className="deals-inner relative">
              <div className="ctm-deals-inner relative w-full h-max">
              <div className="deals-img">
                <PrismicNextImage alt="img" field={item.image} />
              </div>
              <div className="deals-main w-full absolute flex flex-col justify-between">
              
              <div className="deals-descount w-max relative top-[55px] left-[20px]">
                <h4 className="text-white font-700">{item.percentage_offer}</h4>
              </div>
              <div className="deals-btn">
                <PrismicNextLink className="green-btn" field={item.button_link} />
              </div>
              </div>
              </div>
              <div className="deals-details">
                <PrismicRichText field={item.content} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
