/** @format */

import React from "react";
import { LinkCard, SocialLinks } from "./index";

const Links = [
  {
    title: "Twitter Link",
    link: "https://twitter.com/_beyond_logic",
    id: "twitter",
    fontWeight: false,
    key: 1,
  },
  {
    title: "Zuri Team",
    link: "https://training.zuri.team/",
    id: "btn__zuri",
    fontWeight: true,
    key: 2,
  },
  {
    title: "Zuri Books",
    link: "http://books.zuri.team/",
    id: "books",
    subtext: "Books on design and coding",
    fontWeight: true,
    dataFor: "zuriBooks",
    key: 3,
  },

  {
    title: "Python Books",
    link: `https://books.zuri.team/python-for-beginners?ref_id=BeyondLogic`,
    id: "book__python",
    fontWeight: true,
    key: 4,
  },

  {
    title: "Background Check for Coders",
    link: "https://background.zuri.team/",
    id: "pitch",
    fontWeight: true,
    key: 5,
  },

  {
    title: "Design Books",
    link: "https://books.zuri.team/design-rules",
    id: "book__design",
    fontWeight: true,
    key: 6,
  },

  {
    title: "Contact Me",
    link: "/contact",
    id: "contact",
    fontWeight: true,
    key: 6,
  },
];

const MainSection = () => {
  return (
    <div>
      <div className="flex flex-col space-y-[24px] mt-[56px] mb-[48px] justify-center ">
        {Links &&
          Links.map((item, key) => (
            <LinkCard
              key={key}
              title={item.title}
              link={item.link}
              id={item.id}
              fontweight={item.fontWeight}
              subtext={item.subtext}
              dataFor={item.dataFor}
            />
          ))}
      </div>
      <SocialLinks />
    </div>
  );
};

export default MainSection;
