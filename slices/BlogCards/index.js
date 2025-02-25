"use client";
import Icon from "@/app/components/Icon";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useState, useEffect } from "react";

const BlogCards = ({ slice }) => {
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [blogSettings, setBlogSettings] = useState({
    titleColor: "#000",
    contentColor: "#000",
  });
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const client = createClient();

  const fetchblogDetails = async (type, uid) => {
    const result = await client.getByUID(type, uid);
    return result;
  };

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true); // Set loading to true when fetching starts
        const blogPosts = slice.primary.blog_relation;
        if (blogPosts?.length) {
          const results = await Promise.all(
            blogPosts.map((blog) =>
              fetchblogDetails(blog.blog_rel.type, blog.blog_rel.uid)
            )
          );
          setAllBlogPosts(results);
          setFilteredBlogs(results);
          setDisplayedBlogs(results.slice(0, 6));
        }
        const data = await client.getByUID("blog", "blogs");
        setBlogSettings({
          titleColor: data.data.title_color,
          contentColor: data.data.content_color,
        });
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false); // Set loading to false when fetching is done
      }
    };

    fetchBlogDetails();
  }, [slice]);

  useEffect(() => {
    let updatedBlogs = allBlogPosts;

    if (selectedCategory !== "All") {
      updatedBlogs = updatedBlogs.filter((post) => {
        const category = post?.data?.category?.toLowerCase();
        if (selectedCategory === "Strains") return category === "strains";
        if (selectedCategory === "Lifecycle") return category === "lifecycle";
        if (selectedCategory === "Product") return category === "product";
        return true;
      });
    }

    if (searchKeyword.trim()) {
      updatedBlogs = updatedBlogs.filter((post) =>
        post?.data?.title[0]?.text
          .toLowerCase()
          .includes(searchKeyword.toLowerCase())
      );
    }

    setFilteredBlogs(updatedBlogs);
    setDisplayedBlogs(updatedBlogs.slice(0, 6));
    setVisibleCount(6);
  }, [selectedCategory, searchKeyword, allBlogPosts]);

  const loadMore = () => {
    const newVisibleCount = visibleCount + 6;
    setVisibleCount(newVisibleCount);
    setDisplayedBlogs(filteredBlogs.slice(0, newVisibleCount));
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container-lg py-60 lgscreen2:py-40"
    >
      <div className="flex items-center justify-between mb-40 text-green font-semibold xlscreen2:flex-wrap xlscreen2:gap-20">
        <div className="flex items-center gap-4 w-2/3 xlscreen2:w-full flex-wrap">
          <h5 className="!text-24">Categorized By</h5>
          <div className="flex items-center justify-start flex-wrap gap-4 text-body">
            {["All", "Strains", "Lifecycle", "Product"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-body bg-[#F9F4EF] leading-[normal] rounded-full px-16 py-8 border-1 border-solid ${
                  selectedCategory === category
                    ? "border-green"
                    : "border-transparent"
                }`}
              >
                {category === "Strains"
                  ? "Strain Reviews"
                  : category === "Lifecycle"
                    ? "Lifestyle Articles"
                    : category === "Product"
                      ? "Product Tips"
                      : "All"}
              </button>
            ))}
          </div>
        </div>
        <div className="w-2/6 xlscreen2:w-full">
          <div className="flex justify-end xlscreen2:justify-start">
            <input
              type="text"
              placeholder="Search Keywords"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="border border-green rounded-full px-16 py-8 font-normal w-[275] min-w-72"
            />
          </div>
        </div>
      </div>

      {/* Show loading message while blogs are being fetched */}
      {loading ? (
        <div className="text-center text-gray-500 mt-20">Loading blogs...</div>
      ) : filteredBlogs.length === 0 ? (
        <div className="text-center text-gray-500 text-green font-body text-2xl mt-20">
          No blogs found for the selected category or search.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 xlscreen:grid-cols-2 smscreen:!grid-cols-1 gap-6 mt-8">
            {displayedBlogs?.map((post) => (
              <div key={post?.uid} className="rounded-lg p-4">
                <div className="relative">
                  <PrismicNextImage
                    alt="blog-image"
                    field={post?.data?.featured_image}
                    className="w-full h-full relative object-cover rounded-[20px]"
                  />
                  <div className="absolute bottom-10 right-10 bg-white text-green px-16 py-8 rounded-full">
                    {post?.data?.category}
                  </div>
                </div>
                <div className="flex justify-between items-center text-green py-16">
                  <div>
                    {post?.data?.publish_date &&
                      new Date(post?.data?.publish_date).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://the-agriculturist-staging.vercel.app/${post?.uid}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon type="facebook" />
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post?.data?.title[0]?.text + " " + `https://the-agriculturist-staging.vercel.app/${post?.uid}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon type="whatsapp" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://the-agriculturist-staging.vercel.app/${post?.uid}`)}&text=${encodeURIComponent(post?.data?.title[0]?.text)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon type="twitter" />
                    </a>
                  </div>
                </div>
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

          {visibleCount < filteredBlogs.length && displayedBlogs.length > 0 && (
            <button
              onClick={loadMore}
              className="green-btn w-fit m-auto flex justify-center mt-40 uppercase bg-green text-white"
            >
              Load More
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default BlogCards;
