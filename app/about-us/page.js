import React from "react";

const Page = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[76px] h-[73px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "Fast Refresh",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[76px] h-[73px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "Analytics",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[76px] h-[73px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "Datacenter security",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
    },
  ];

  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              The fastest way to launch a product
            </h3>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="w-[200px] h-[200px] mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="meet-team container-lg container-py">
        <div className="team-main">
          <div className="team-title mb-40">
            <h2 className="text-green font-700 text-center">Meet our team</h2>
          </div>
          <div className="team-inner">
            <div className="grid desktop:grid-cols-4 grid-cols-3 lgscreen2:grid-cols-2 smscreen:!grid-cols-1 gap-[27px]">
              <div className="grid-zoom overflow-hidden">
                <div className="flex flex-col gap-[27px]">
                  <div className="team-img relative overflow-hidden">
                    <img
                      className="rounded-[20px]"
                      src="https://images.prismic.io/the-agriculturist-staging/Z7w1V57c43Q3gHSO_img.png?auto=format,compress"
                    ></img>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/0 to-green rounded-[20px]"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <div className="tree-img flex items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70px] h-[35px] bg-dark_cream rounded-t-full overflow-hidden">
                        <img
                          src="https://the-agriculturist-staging.cdn.prismic.io/the-agriculturist-staging/Z7w4Lp7c43Q3gHTw_Vector.svg"
                          alt="Leaf"
                          className="w-[20px] h-[20px] top-3 mx-auto relative z-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="team-title">
                    <h5 className="text-center text-green font-700 capitalize">
                      Founder Name
                    </h5>
                  </div>
                </div>
              </div>
              <div className="grid-zoom overflow-hidden">
                <div className="flex flex-col gap-[27px]">
                  <div className="team-img relative overflow-hidden">
                    <img
                      className="rounded-[20px]"
                      src="https://images.prismic.io/the-agriculturist-staging/Z7w1V57c43Q3gHSO_img.png?auto=format,compress"
                    ></img>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/0 to-green rounded-[20px]"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <div className="tree-img flex items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70px] h-[35px] bg-dark_cream rounded-t-full overflow-hidden">
                        <img
                          src="https://the-agriculturist-staging.cdn.prismic.io/the-agriculturist-staging/Z7w4Lp7c43Q3gHTw_Vector.svg"
                          alt="Leaf"
                          className="w-[20px] h-[20px] top-3 mx-auto relative z-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="team-title">
                    <h5 className="text-center text-green font-700 capitalize">
                      Founder Name
                    </h5>
                  </div>
                </div>
              </div>
              <div className="grid-zoom desktop:col-span-2 col-span-1 overflow-hidden">
                <div className="flex flex-col gap-[27px]">
                  <div className="team-img relative overflow-hidden">
                    <img
                      className="rounded-[20px]"
                      src="https://images.prismic.io/the-agriculturist-staging/Z7xCuZ7c43Q3gHba_img.png?auto=format,compress"
                    ></img>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/0 to-green rounded-b-[20px]"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <div className="tree-img flex items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70px] h-[35px] bg-dark_cream rounded-t-full overflow-hidden">
                        <img
                          src="https://the-agriculturist-staging.cdn.prismic.io/the-agriculturist-staging/Z7w4Lp7c43Q3gHTw_Vector.svg"
                          alt="Leaf"
                          className="w-[20px] h-[20px] top-3 mx-auto relative z-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="team-title">
                    <h5 className="text-center text-green font-700 capitalize">
                      Founder Name
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="store-locator container-lg container-py">
        <div className="store-locator-main">
          <div className="store-locator-inner">
            <div className="flex flex-col lgscreen:flex-row items-center lgscreen:gap-50 gap-30">
              <div className="lgscreen:w-2/5 w-full">
                <div className="store-search relative mb-[16px]">
                  <input
                    className="border border-green border-solid rounded-full w-full py-12 pr-16 pl-[42px] placeholder:text-14 placeholder:font-opensans focus:outline-none"
                    type="text"
                    class="search-input"
                    placeholder="Find our strores"
                  />
                  <div className="icone absolute top-1/2 -translate-y-1/2 left-[16px]">
                    <img src="https://the-agriculturist-staging.cdn.prismic.io/the-agriculturist-staging/Z7xkXJ7c43Q3gIA-_Group1.svg"></img>
                  </div>
                </div>
                <div className="store-detail">
                  <div className="p-16 bg-dark_cream rounded-[20px] flex flex-col gap-16">
                    <div className="srore-img">
                      <img src="https://images.prismic.io/the-agriculturist-staging/Z7xj5J7c43Q3gIAt_image.png?auto=format,compress"></img>
                    </div>
                    <div className="store flex flex-col gap-[8px]">
                      <div className="store-title">
                        <h6 className="text-green font-700 text-left">
                          The Agriculturalist - Fall River MA
                        </h6>
                      </div>
                      <div className="flex gap-10 items-center justify-start w-full flex-wrap">
                        <div className="flex gap-[8px] items-center justify-start w-full max-w-max">
                          <div className="icone">
                            <img src="https://the-agriculturist-staging.cdn.prismic.io/the-agriculturist-staging/Z7xkXJ7c43Q3gIA-_Group1.svg"></img>
                          </div>
                          <div className="detail">
                            <span className="text-green text-12 font-400 font-opensans">
                              1 Lewiston St, Fall River, MA 02721
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-[8px] items-center justify-start w-full max-w-max">
                          <div className="icone">
                            <img src="https://the-agriculturist-staging.cdn.prismic.io/the-agriculturist-staging/Z7xkcZ7c43Q3gIBA_Vector.svg"></img>
                          </div>
                          <div className="detail">
                            <span className="text-green text-12 font-400 font-opensans">
                              10:00 to 10:00
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lgscreen:w-3/5 w-full">
                <div about="map">
                  <iframe
                    className="rounded-[20px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127070.44296822473!2d70.73889502810258!3d22.27346616693709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1740398719263!5m2!1sen!2sin"
                    width="100%"
                    height="480"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
