/** @format */

import React from "react";
import { Link } from "react-router-dom";

import ReactTooltip from "react-tooltip";

const LinkCard = ({
  title,
  subtext,
  link,
  id,
  fontweight,
  dataFor,
  LinkRoute = false,
}) => {
  return (
    <>
      {subtext && (
        <ReactTooltip id={dataFor} place="left" effect="solid">
          {subtext}
        </ReactTooltip>
      )}
      {LinkRoute ? (
        <Link
          id={id}
          to={link}
          data-tip
          data-for={dataFor}
          className={`hover:bg-[#D0D5DD] w-full py-[24px] bg-[#EAECF0] border border-[#EAECF0] rounded-[8px] text-[18px] leading-[28px] text-[#101828] text-center ${
            fontweight ? "font-semibold" : "font-medium"
          }`}
        >
          <h2>{title}</h2>
        </Link>
      ) : (
        <a
          id={id}
          href={link}
          data-tip
          data-for={dataFor}
          className={`hover:bg-[#D0D5DD] w-full py-[24px] bg-[#EAECF0] border border-[#EAECF0] rounded-[8px] text-[18px] leading-[28px] text-[#101828] text-center ${
            fontweight ? "font-semibold" : "font-medium"
          }`}
        >
          <h2>{title}</h2>
        </a>
      )}
    </>
  );
};

export default LinkCard;
