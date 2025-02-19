import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({params}) {
  const client = createClient();
  const page = await client.getSingle(params.uid);
  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client.getSingle(params.uid);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: isFilled.keyText(page.data.meta_title)
        ? page.data.meta_title
        : undefined,
      description: isFilled.keyText(page.data.meta_description)
        ? page.data.meta_description
        : undefined,
      images: isFilled.image(page.data.meta_image)
        ? [asImageSrc(page.data.meta_image)]
        : undefined,
    },
    icons: {
      icon: '../../public/star.svg',
    },
  };
}