/** @format */

import React from "react";

import ZuriInternshipLogo from "../assets/ZuriInternshipLogo.svg";
import I4Glogo from "../assets/I4GLogo.svg";
import "../"

const Footer = () => {
  return (
    <div className="border-t border-[#EAECF0] flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center pt-[42px] pb-[40px]  md:space-y-0 space-y-4">
      <img
        src={ZuriInternshipLogo}
        alt="Zuri Internship logo"
        className="lg:w-auto xs:w-1/5 w-1/3"
      />
      <h4 className="font-normal text-[16px] text-[#667085] leading-[24px]">
        HNG Internship 9 Frontend Task
      </h4>
      <img src={I4Glogo} alt="I4G logo" className="lg:w-auto xs:w-1/5 w-1/3" />
    </div>
  );
};

export default Footer;

