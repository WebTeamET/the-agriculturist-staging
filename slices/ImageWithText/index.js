import Heading from "@/app/components/Heading";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

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
  } = slice.primary;

  const textStyle = { color: text_color || "#ffffff" };

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
        className="lgscreen:!text-18 lgscreen:leading-28 smscreen:!text-16 !mt-0 font-opensans lgscreen:text-left text-center"
        style={textStyle}
      >
        {children}
      </p>
    ),
  };

  if (slice.primary.hide_module) return null;

  return (
    <section
      className="py-100 lgscreen2:pb-40 lgscreen2:pt-0"
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
          className={`lgscreen:w-1/2 w-full space-y-8 px-20 lgscreen:max-w-[705px] ${
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
            <PrismicNextLink
              field={button_link}
              className="white-btn-xl"
              // style={{
              //   backgroundColor: button_background_color || "#2563eb",
              //   color: button_text_color || "#ffffff",
              // }}
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
  );
};

export default ImageWithText;
