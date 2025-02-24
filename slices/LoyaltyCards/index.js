"use client";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { useState, useEffect } from "react";

const LoyaltyCards = ({ slice }) => {
  const [loyaltyCards, setLoyaltyCards] = useState([]);
  const [loyaltyCardSettings, setLoyaltyCardSettings] = useState({});
  const [loyaltyCardGeneral, setLoyaltyCardGeneral] = useState([]);
  const client = createClient();

  const fetchLoyaltyCard = async (type, uid) => {
    const result = await client.getByUID(type, uid);
    return result;
  };

  useEffect(() => {
    const fetchLoyaltyCards = async () => {
      try {
        const loyaltyCards = slice.primary.loyalty_card;
        if (loyaltyCards?.length) {
          const results = await Promise.all(
            loyaltyCards.map((loyaltyCard) => {
              return fetchLoyaltyCard(
                loyaltyCard.loyalty_card.type,
                loyaltyCard.loyalty_card.uid
              );
            })
          );
          setLoyaltyCards(results);
        }
        const data = await client.getSingle("loyalty");
        setLoyaltyCardGeneral(data?.data);
        setLoyaltyCardSettings({
          titleColor: data.data.title_color,
          subtitleColor: data.data.subtitle_color,
          contentColor: data.data.content_color,
          iconColor: data.data.icon_color,
        });
      } catch (error) {
        console.error("Error fetching loyalty card details:", error);
      }
    };

    fetchLoyaltyCards();
  }, [slice]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container-lg py-60 lgscreen2:py-40"
    >
      <div
        className={`text-center mb-40 text-[${loyaltyCardSettings.titleColor}]`}
      >
        <PrismicRichText field={loyaltyCardGeneral.heading} />
      </div>
      <div className="grid grid-cols-3 xlscreen:grid-cols-2 smscreen:!grid-cols-1 gap-7 mt-8">
        {loyaltyCards?.map((loyaltyCard) => (
          <div
            key={loyaltyCard?.uid}
            className="rounded-[20px] px-20 py-55 bg-[#F9F4EF]"
          >
            <div className="w-full flex items-center gap-14">
              <div
                className={`w-1/4 h-[90px] rounded-full bg-green/50 bg-[${loyaltyCardSettings.iconColor}]`}
              >
                <img
                  src={loyaltyCard?.data?.icon?.url}
                  alt={"loyaltyCard"}
                  className="w-full object-cover p-20"
                />
              </div>
              <div className="w-[75%]">
                <div className={`text-[${loyaltyCardSettings.titleColor}]`}>
                  <PrismicRichText field={loyaltyCard?.data?.title} />
                </div>
                <div
                  className={`mt-1 text-[${loyaltyCardSettings.subtitleColor}]`}
                >
                  <PrismicRichText field={loyaltyCard?.data?.subtitle} />
                </div>
              </div>
            </div>
            <div
              className={`mt-8 !text-14 text-[${loyaltyCardSettings.contentColor}] line-clamp-2`}
            >
              <PrismicRichText field={loyaltyCard?.data?.content} />
            </div>
          </div>
        ))}
      </div>
      <button
        className={`w-fit m-auto py-14 px-32 rounded-full flex justify-center mt-40 uppercase bg-[${loyaltyCardGeneral?.button_background_color}] text-[${loyaltyCardGeneral?.button_text_color}]`}
      >
        {loyaltyCardGeneral.button_text}
      </button>
    </section>
  );
};

export default LoyaltyCards;
