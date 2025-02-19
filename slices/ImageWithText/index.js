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
        className="lg:!text-18 lg:leading-28 !mt-0 font-opensans lg:text-left text-center"
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
      <div className="flex flex-col lg:flex-row items-center lg:gap-0 gap-30">
        {image_position === "Left" && (
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <PrismicNextImage
              field={image}
              className="w-full h-auto object-cover rounded-lg lgscreen2:rounded-none"
              alt="image"
            />
          </div>
        )}
        <div
          className={`lg:w-1/2 w-full space-y-8 px-20 lg:max-w-[705px] ${
            image_position === "Left" ? "lg:px-60" : "lg:pr-12"
          } text-center lg:text-left`}
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
          <div className="lg:w-1/2 w-full">
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
