import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const IconWIthText = ({ slice }) => {
  return (
    <section
      className="container-lg container-py"
      style={{ backgroundColor: slice.primary.section_bg_color }}
    >
      <div className="text-center text-gray-600">
        {/* Title Section */}
        <div className="max-w-2xl mx-auto">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading3: ({ children }) => (
                <h3 className="text-green text-center font-700">{children}</h3>
              ),
            }}
          />
        </div>

        {/* Features List */}
        <div className="mt-40">
          <ul className="grid smscreen:!grid-cols-1 xlscreen:grid-cols-2 grid-cols-3 place-items-center gap-30">
            {slice.primary.strengths.map((item, idx) => (
              <li key={idx} className="flex flex-col gap-[16px]">
                {/* Icon with Background */}
                <div
                  className="w-auto h-auto px-[62px] py-[62px] mx-auto rounded-full flex items-center justify-center"
                  style={{ backgroundColor: slice.primary.icon_bg_color }}
                >
                  <PrismicNextImage
                    field={item.icon}
                    className="w-[76px] h-[73px]"
                    alt="image"
                  />
                </div>

                <div className="flex flex-col gap-[12px] min-h-[110px]">
                  {/* Title */}
                  <PrismicRichText
                    field={item.title}
                    components={{
                      heading6: ({ children }) => (
                        <h6 className="text-20 leading-24 text-green font-500">
                          {children}
                        </h6>
                      ),
                    }}
                  />

                  {/* Description */}
                  <PrismicRichText
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-dark_gray max-w-[346px] xlscreen:max-w-full mx-auto">
                          {children}
                        </p>
                      ),
                    }}
                    field={item.description}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IconWIthText;
