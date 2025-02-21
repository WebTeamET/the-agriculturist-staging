/**
 * @typedef {import("@prismicio/client").Content.TestimonialSliceSlice} TestimonialSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSliceSlice>} TestimonialSliceProps
 * @type {import("react").FC<TestimonialSliceProps>}
 */
const TestimonialSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for testimonial_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TestimonialSlice;
