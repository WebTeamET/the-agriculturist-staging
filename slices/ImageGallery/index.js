import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @type {import("react").FC<ImageGalleryProps>}
 */
const ImageGallery = ({ slice }) => {
  const components = {
    heading2: ({ children }) => (
      <h2 className="text-green font-700 text-center">{children}</h2>
    ),
  };
  if (slice.primary.hide_module) return null;
  return (
    <section className="meet-team container-lg container-py">
      <div className="team-main">
        <div className="team-title mb-40">
          <PrismicRichText components={components} field={slice.primary.title} />
        </div>
        <div className="team-inner">
          <div className="grid grid-cols-9 lgscreen2:grid-cols-2 smscreen:!grid-cols-1 gap-[27px]">
            {slice.primary.imagegrid?.map((member, i) => {
              const rowIndex = Math.floor(i / 3);
              const colIndex = i % 3;
              const colSpanClass =
                rowIndex % 2 === 0
                  ? colIndex < 2
                    ? "mx-auto lgscreen2:col-span-1 smscreen1:col-span-2 lgscreen:col-span-2"
                    : "mx-auto lgscreen2:col-span-1 smscreen1:col-span-2 lgscreen:col-span-5"
                  : colIndex === 0
                    ? "mx-auto lgscreen2:col-span-1 smscreen1:col-span-2 lgscreen:col-span-5"
                    : "mx-auto lgscreen2:col-span-1 smscreen1:col-span-2 lgscreen:col-span-2";

              return (
                <div
                  className={`w-full grid-zoom overflow-hidden ${colSpanClass}`}
                  key={i}
                >
                  <div className="w-full h-[400px] smscreen:!h-[350px] object-cover flex flex-col gap-[27px]">
                    <div className="team-img w-full h-full relative overflow-hidden">
                      <PrismicNextImage
                        className="rounded-[20px]"
                        field={member.gallery_image}
                        alt={member.founder_name}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/0 to-green rounded-[20px]"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                        <div className="tree-img flex items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70px] h-[35px] bg-dark_cream rounded-t-full overflow-hidden">
                          <img
                            src="https://the-agriculturist-staging.cdn.prismic.io/the-agriculturist-staging/Z7w4Lp7c43Q3gHTw_Vector.svg"
                            alt="Leaf"
                            className="w-[20px] h-[20px] top-3 mx-auto relative z-10"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="team-title">
                      <h5 className="text-center text-green font-700 capitalize">
                        {member.founder_name}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
