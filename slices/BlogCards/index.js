"use client";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { useState, useEffect } from "react";

const BlogCards = ({ slice }) => {
  const [blogPostDetails, setBlogPostDetails] = useState([]);
  const [blogSettings, setBlogSettings] = useState({
    titleColor: "#000",
    contentColor: "#000",
  });
  const client = createClient();

  const fetchblogDetails = async (type, uid) => {
    const result = await client.getByUID(type, uid);
    return result;
  };

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const blogPosts = slice.primary.blog_relation;
        if (blogPosts?.length) {
          const results = await Promise.all(
            blogPosts.map((blog) => {
              return fetchblogDetails(blog.blog_rel.type, blog.blog_rel.uid);
            })
          );
          setBlogPostDetails(results);
        }
        const data = await client.getByUID("blog", "blogs");
        setBlogSettings({
          titleColor: data.data.title_color,
          contentColor: data.data.content_color,
        });
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [slice]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container-lg py-60 lgscreen2:py-40"
    >
      <div className="flex items-center justify-between mb-40 text-green font-semibold xlscreen2:flex-wrap xlscreen2:gap-20">
        <div className="flex items-center gap-4 w-2/3 xlscreen2:w-full flex-wrap">
          <h5 className="!text-24">Categorised By</h5>
          <div className="flex items-center justify-start flex-wrap gap-4 text-body">
            <button className="font-body bg-[#F9F4EF] leading-[normal] rounded-full px-16 py-8 border-1 border-green border-solid">
              All
            </button>
            <button className="font-body bg-[#F9F4EF] leading-[normal] rounded-full px-16 py-8">
              Strain Reviews
            </button>
            <button className="font-body bg-[#F9F4EF] leading-[normal] rounded-full px-16 py-8">
              Lifestyle Articles
            </button>
            <button className="font-body bg-[#F9F4EF] leading-[normal] rounded-full px-16 py-8">
              Product Tips
            </button>
          </div>
        </div>
        <div className="w-2/6 xlscreen2:w-full">
          <div className="flex justify-end xlscreen2:justify-start">
            <input
              type="text"
              placeholder="Search Keywords"
              className="border border-green rounded-full px-16 py-8 font-normal w-[275] min-w-72"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 xlscreen:grid-cols-2 smscreen:!grid-cols-1 gap-6 mt-8">
        {blogPostDetails?.map((post) => (
          <div key={post?.uid} className="rounded-lg p-4">
            <div className="relative">
              <img
                src={post?.data?.featured_image?.url}
                alt={"blog"}
                className="w-full h-full relative object-cover rounded-[20px]"
              />
              <div className="absolute bottom-10 right-10 bg-white text-green px-16 py-8 rounded-full">
                {post?.data?.category}
              </div>
            </div>
            <div className="text-green py-16">{post?.data?.publish_date}</div>
            <div className={`text-[${blogSettings.titleColor}]`}>
              <PrismicRichText field={post?.data?.title} />
            </div>
            <div
              className={`mt-10 text-[${blogSettings.contentColor}] line-clamp-2`}
            >
              <PrismicRichText field={post?.data?.content} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCards;
