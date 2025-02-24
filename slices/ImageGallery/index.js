/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @type {import("react").FC<ImageGalleryProps>}
 */
const ImageGallery = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_gallery (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImageGallery;
