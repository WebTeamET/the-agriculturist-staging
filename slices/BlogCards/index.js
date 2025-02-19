/**
 * @typedef {import("@prismicio/client").Content.BlogCardsSlice} BlogCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogCardsSlice>} BlogCardsProps
 * @type {import("react").FC<BlogCardsProps>}
 */
const BlogCards = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_cards (variation: {slice.variation}) Slices
    </section>
  );
};

export default BlogCards;
