"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import Icon from "@/app/components/Icon";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const BlogCards = ({ slice }) => {
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blogSettings, setBlogSettings] = useState({
    titleColor: "#000",
    contentColor: "#000",
  });
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const client = createClient();

  // Fetch individual blog details
  const fetchBlogDetails = async (type, uid) => {
    try {
      return await client.getByUID(type, uid);
    } catch (error) {
      console.error(`Error fetching blog details for ${type}/${uid}:`, error);
      return null;
    }
  };

  // Fetch blog posts and settings concurrently
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const blogRelations = slice.primary.blog_relation || [];
        const blogDetailsPromises = blogRelations.map((blog) =>
          fetchBlogDetails(blog.blog_rel.type, blog.blog_rel.uid)
        );
        const blogResults = await Promise.all(blogDetailsPromises);
        setAllBlogPosts(blogResults.filter(Boolean)); // Filter out any null responses

        // Fetch blog settings concurrently
        const settingsData = await client.getByUID("blog", "blogs");
        setBlogSettings({
          titleColor: settingsData.data.title_color,
          contentColor: settingsData.data.content_color,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slice]);

  // Filter blogs based on selected category and search keyword
  const filteredBlogs = useMemo(() => {
    return allBlogPosts.filter((post) => {
      let matchesCategory = true;
      let matchesSearch = true;

      if (selectedCategory !== "All") {
        const category = post?.data?.category?.toLowerCase().replace(/\s/g, "");
        if (selectedCategory === "Strains") {
          matchesCategory = category === "strains";
        } else if (selectedCategory === "Product") {
          matchesCategory = category === "product";
        } else if (selectedCategory === "Lifestyle Articles") {
          matchesCategory = category === "lifestyle";
        }
      }

      if (searchKeyword.trim()) {
        const titleText = post?.data?.title?.[0]?.text?.toLowerCase() || "";
        matchesSearch = titleText.includes(searchKeyword.toLowerCase());
      }

      return matchesCategory && matchesSearch;
    });
  }, [allBlogPosts, selectedCategory, searchKeyword]);

  // Determine the blogs to display based on visible count
  const displayedBlogs = useMemo(
    () => filteredBlogs.slice(0, visibleCount),
    [filteredBlogs, visibleCount]
  );

  // Increase the number of visible blogs
  const loadMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 6);
  }, []);

  const categoryButtons = ["All", "Strains", "Product", "Lifestyle Articles"];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container-lg py-60 lgscreen2:py-40"
    >
      <div className="flex items-center justify-between mb-40 text-green font-semibold xlscreen2:flex-wrap xlscreen2:gap-20">
        <div className="flex items-center gap-4 w-2/3 xlscreen2:w-full flex-wrap">
          <h5 className="text-24">Categorized By</h5>
          <div className="flex items-center flex-wrap gap-4 text-body">
            {categoryButtons.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-body bg-[#F9F4EF] leading-normal rounded-full px-16 py-8 border border-solid ${
                  selectedCategory === category
                    ? "border-green"
                    : "border-transparent"
                }`}
              >
                {category === "Strains"
                  ? "Strain Reviews"
                  : category === "Product"
                    ? "Product Tips"
                    : category === "Lifestyle Articles"
                      ? "Life Style"
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
              className="border border-green rounded-full px-16 py-8 font-normal w-[275px] min-w-[72px]"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="mx-auto w-full flex justify-">
         Loading ...
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="text-center text-gray-500 text-green font-body text-2xl mt-20">
          No blogs found for the selected category or search.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 xlscreen:grid-cols-2 smscreen:grid-cols-1 gap-6 mt-8">
            {displayedBlogs.map((post) => (
              <div key={post.uid} className="rounded-lg p-4">
                <div className="relative">
                  <PrismicNextImage
                    alt="blog-image"
                    field={post.data.featured_image}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                  <div className="absolute bottom-10 right-10 bg-white text-green px-16 py-8 rounded-full">
                    {post.data.category}
                  </div>
                </div>
                <div className="flex justify-between items-center text-green py-16">
                  <div>
                    {post.data.publish_date &&
                      new Date(post.data.publish_date).toLocaleDateString(
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
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        `https://the-agriculturist-staging.vercel.app/${post.uid}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon type="facebook" />
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        `${post.data.title[0].text} https://the-agriculturist-staging.vercel.app/${post.uid}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon type="whatsapp" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        `https://the-agriculturist-staging.vercel.app/${post.uid}`
                      )}&text=${encodeURIComponent(post.data.title[0].text)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon type="twitter" />
                    </a>
                  </div>
                </div>
                <div style={{ color: blogSettings.titleColor }}>
                  <PrismicRichText field={post.data.title} />
                </div>
                <div
                  style={{ color: blogSettings.contentColor }}
                  className="mt-10 line-clamp-2"
                >
                  <PrismicRichText field={post.data.content} />
                </div>
              </div>
            ))}
          </div>

          {visibleCount < filteredBlogs.length && (
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
