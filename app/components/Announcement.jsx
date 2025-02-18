import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";

const Announcement = async () => {
  let client = createClient();
  const { data } = await client.getByUID(
    "announcement_bar",
    "announcement-bar-uid"
  );
  if (!data) return null
  return (
    <div className={`flex items-center  justify-between py-8 px-75 bg-[${data.background_color}]`}>
      {data.items.map((item, index) => (
        <div className="flex items-center gap-2" key={index}>
          <PrismicNextImage alt="image" field={item.icon} />
          <PrismicNextLink field={item.link} />
        </div>
      ))}
    </div>
  );
};

export default Announcement;
