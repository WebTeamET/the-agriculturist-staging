import { PrismicRichText } from "@prismicio/react";

const components = {
  paragraph: ({ children }) => <p className="text-green font-body text-base">{children}</p>,
};

const TestimonialSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-green font-bold font-body">Making memories</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-lg:gap-12 max-md:justify-center text-center max-lg:max-w-3xl max-md:max-w-lg mx-auto mt-16">
        {data.testimonialcard.map.map((review, index) => (
          <div key={index}>
            <div className="flex justify-center space-x-1 mt-2.5">
              {/* Map over stars based on rating */}
              {[...Array(item.star_count)].map((_, starIndex) => (
                <StarSvg key={starIndex} />
              ))}
            </div>
            <div className="mt-4">
              <PrismicRichText components={components} field={item.content} />
            </div>
            <div className="mt-6">
              <PrismicRichText components={components} field={item.author} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlice;

const StarSvg = () => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6755 6.3433L11.8833 8.99407L12.5295 12.7744C12.5991 13.1704 12.4348 13.5626 12.1017 13.7985C11.7686 14.0332 11.3357 14.0646 10.9711 13.8776L7.5212 12.1104C7.50832 12.1042 7.49221 12.1042 7.48062 12.1104L4.03009 13.8783C3.87097 13.9598 3.69896 14 3.52888 14C3.30661 14 3.08693 13.9322 2.89818 13.7992C2.56511 13.5632 2.40148 13.171 2.4717 12.7757L3.13011 9.03293L0.325094 6.34328C0.0300296 6.0634 -0.0736905 5.65172 0.0532344 5.27017C0.180793 4.88862 0.513222 4.61564 0.920368 4.5579L4.77924 4.01194L6.53732 0.583618C6.719 0.22403 7.08749 0 7.4998 0C7.91146 0 8.28061 0.223403 8.46292 0.583618L10.1882 3.98929L14.0787 4.55786C14.4865 4.61559 14.8196 4.88858 14.9465 5.27013C15.0741 5.65168 14.9697 6.06272 14.6746 6.34261L14.6755 6.3433Z"
        fill="#FDCC0D"
      />
    </svg>
  );
};