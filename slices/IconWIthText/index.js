/**
 * @typedef {import("@prismicio/client").Content.IconWIthTextSlice} IconWIthTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IconWIthTextSlice>} IconWIthTextProps
 * @type {import("react").FC<IconWIthTextProps>}
 */

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const IconWIthText = ({ slice }) => {
  return (
    <section
      className="py-14"
      style={{ backgroundColor: slice.primary.section_bg_color }}
    >
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        {/* Title Section */}
        <div className="max-w-2xl mx-auto">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading3: ({ children }) => (
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  {children}
                </h3>
              ),
            }}
          />
        </div>

        {/* Features List */}
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {slice.primary.strengths.map((item, idx) => (
              <li key={idx} className="space-y-3">
                {/* Icon with Background */}
                <div
                  className="w-[200px] h-[200px] mx-auto rounded-full flex items-center justify-center"
                  style={{ backgroundColor: slice.primary.icon_bg_color }}
                >
                  <PrismicNextImage
                    field={item.icon}
                    className="w-[76px] h-[73px]"
                  />
                </div>

                {/* Title */}
                <PrismicRichText
                  field={item.title}
                  components={{
                    heading4: ({ children }) => (
                      <h4 className="text-lg text-gray-800 font-semibold">
                        {children}
                      </h4>
                    ),
                  }}
                />

                {/* Description */}
                <PrismicRichText
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-dark_gray">{children}</p>
                    ),
                  }}
                  field={item.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IconWIthText;
