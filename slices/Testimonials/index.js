import Ingrediants from "@/app/components/Ingrediants";
import ProductCard from "@/app/components/ProductCard";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import Icon from "@/app/components/Icon";

const Testimonials = async ({ slice }) => {
  const client = createClient();

  const components = {
    heading: ({ children }) => (
      <h2 className="text-green font-bold font-body">{children}</h2>
    ),
    paragraph: ({ children }) => (
      <p className="text-green font-body">{children}</p>
    ),
  };

  const testimonials = await Promise.all(
    slice.primary.testimonialcards.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        console.log("item.testimonial.uid:,", item.testimonial.uid);
        return client.getByUID("testimonial", item.testimonial.uid);
      }
    })
  );

  console.log("testimonials232323:,", testimonials);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container-lg container-py">
        <div className="container-lg">
          <div className="max-w-2xl mx-auto text-center">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-lg:gap-12 max-md:justify-center text-center max-lg:max-w-3xl max-md:max-w-lg mx-auto mt-16">
            {testimonials.map((item, index) => (
              <div key="{index}">
                <div className="flex justify-center space-x-1 mt-2.5">
                  {[...Array(item.data.rating_count)].map((_, starIndex) => (
                    <Icon key={starIndex} type="star" />
                  ))}
                </div>
                <div className="mt-4">
                  <PrismicRichText field={item.data.review_content} />
                </div>
                <div className="mt-6">
                  <span className="font-body font-semibold text-green">
                    {item.data.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProductCard />
    </section>
  );
};

export default Testimonials;
