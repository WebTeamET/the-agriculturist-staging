import ProductDetail from "@/app/components/ProductDetail";


const ProductDetails = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ProductDetail />
    </section>
  );
};

export default ProductDetails;
