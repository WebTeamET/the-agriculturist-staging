const Style = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for style (variation: {slice.variation}) Slices
    </section>
  );
};

export default Style;
