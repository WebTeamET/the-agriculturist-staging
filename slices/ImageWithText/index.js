import Heading from "@/app/components/Heading";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Fragment } from "react";

const ImageWithText = ({ slice }) => {
  const {
    image,
    title,
    description,
    button_text,
    button_link,
    background_color,
    text_color,
    button_background_color,
    button_text_color,
    image_position,
    content_alignment,
    text_above_image,
    tagline,
  } = slice.primary;

  const textStyle = {
    color: text_color || "",
    textAlign: content_alignment,
  };

  const components = {
    heading2: ({ children }) => (
      <Heading as="h2" size="md" className="mb-12" style={textStyle}>
        {children}
      </Heading>
    ),
    heading3: ({ children }) => (
      <Heading
        as="h3"
        size="sm"
        className="mb-3 font-medium sm:text-left text-center"
        style={textStyle}
      >
        {children}
      </Heading>
    ),
    paragraph: ({ children }) => (
      <p
        className={`${slice?.variation == "skewedImageWithText" ? "lgscreen:!text-16" : "lgscreen:!text-18"} lgscreen:leading-28 smscreen:!text-16 !mt-0 font-opensans lgscreen:text-left text-center`}
        style={textStyle}
      >
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className="text-[30px] text-green font-body">{children}</strong>
    ),
  };

  if (slice.primary.hide_module) return null;

  return (
    <Fragment>
      {slice?.variation === "skewedImageWithText" ? (
        <section
          className="container-lg py-60 lgscreen2:py-40 pb-60"
          style={{ backgroundColor: background_color || "white" }}
        >
          <div className="w-full relative grid grid-cols-1 lgscreen:grid-cols-2 items-center lgscreen:gap-[10px] gap-30 rounded-[20px]">
            <div className="absolute right-[960px] top-1 h-full w-[2px] border-r border-dashed border-green transform origin-top-rightrotate-[17deg] z-[99]"></div>
            {image_position === "Left" && (
              <div className="relative w-full overflow-hidden rounded-tl-[30px] rounded-bl-[20px] lgscreen2:rounded-[20px]">
                <div className="overflow-hidden clip-custom">
                  <PrismicNextImage
                    field={image}
                    className="w-full h-full object-cover rounded-tl-[30px] rounded-bl-[30px] lgscreen2:rounded-[20px]"
                    alt="image"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-b from-black/0 to-green rounded-[20px]"></div>
                </div>
                <div className="xsscreen3:whitespace-nowrap absolute bottom-40 lgscreen:left-[41%] left-[50%] transform -translate-x-1/2 text-white font-semibold text-lg text-center">
                  <PrismicRichText field={text_above_image} />
                </div>
              </div>
            )}
            <div
              className={`clip-custom-right bg-dark_cream rounded-tr-[20px] rounded-br-[20px] border border-dashed border-green h-full w-full space-y-8 px-20 ${
                image_position === "Left" ? "lgscreen:px-60" : "lgscreen:pr-12"
              } text-${content_alignment}`}
            >
              <PrismicRichText
                components={components}
                field={title}
                style={textStyle}
              />
              <PrismicRichText
                className="lgscreen:max-w-[645px]"
                components={components}
                field={description}
                style={textStyle}
              />

              {button_text && button_link && (
                <PrismicNextLink
                  field={button_link}
                  className="green-btn uppercase hover:!bg-white hover:!text-green border border-green"
                  style={{
                    backgroundColor: button_background_color || "#2563eb",
                    color: button_text_color || "#ffffff",
                  }}
                >
                  {button_text}
                </PrismicNextLink>
              )}
            </div>
            {image_position === "Right" && (
              <div className="lgscreen:w-1/2 w-full">
                <PrismicNextImage
                  field={image}
                  className="w-full h-auto object-cover rounded-lg"
                  alt="image"
                />
              </div>
            )}
          </div>
        </section>
      ) : (
        <section
          className={`py-100 lgscreen2:pb-40 lgscreen2:pt-01 ${slice.primary.container && "container-lg"}`}
          style={{ backgroundColor: background_color || "white" }}
        >
          <div className="flex flex-col lgscreen:flex-row items-center lgscreen:gap-0 gap-30">
            {image_position === "Left" && (
              <div className="lgscreen:w-1/2 w-full mb-8 lgscreen:mb-0">
                <PrismicNextImage
                  field={image}
                  className="w-full h-auto object-cover rounded-lg lgscreen2:rounded-none"
                  alt="image"
                />
              </div>
            )}
            <div
              className={`lgscreen:w-1/2 w-full space-y-8 px-20  ${
                image_position === "Left" ? "lgscreen:px-60" : "lgscreen:pr-12"
              } text-center lgscreen:text-left`}
            >
              <PrismicRichText
                components={components}
                field={title}
                style={textStyle}
              />
              <PrismicRichText
                components={components}
                field={description}
                style={textStyle}
              />

              {button_text && button_link && (
                <PrismicNextLink field={button_link} className="white-btn-xl">
                  {button_text}
                </PrismicNextLink>
              )}
            </div>
            {image_position === "Right" && (
              <div className="lgscreen:w-1/2 w-full">
                <PrismicNextImage
                  field={image}
                  className="w-full h-auto object-cover rounded-lg"
                  alt="image"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default ImageWithText;
