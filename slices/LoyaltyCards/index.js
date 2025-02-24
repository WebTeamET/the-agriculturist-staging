/**
 * @typedef {import("@prismicio/client").Content.LoyaltyCardsSlice} LoyaltyCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LoyaltyCardsSlice>} LoyaltyCardsProps
 * @type {import("react").FC<LoyaltyCardsProps>}
 */
const LoyaltyCards = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for loyalty_cards (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LoyaltyCards;
