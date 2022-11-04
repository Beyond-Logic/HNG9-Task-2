/** @format */

import React from "react";

import ZuriInternshipLogo from "../assets/ZuriInternshipLogo.svg";
import I4Glogo from "../assets/I4GLogo.svg";
import "../";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t border-[#EAECF0] flex md:flex-row flex-col md:justify-between justify-start items-start pt-[42px] md:pb-[40px] pb-[32px]  md:space-y-0 space-y-[16.21px]">
      <img
        src={ZuriInternshipLogo}
        alt="Zuri Internship logo"
        className="lg:w-auto  w-[138.77px]"
      />
      <Link to="/">
        <h4 className="font-normal md:text-[16px] text-[14px] text-[#667085] md:leading-[24px] leading-[20px]">
          HNG Internship 9 Frontend Task
        </h4>
      </Link>
      <img src={I4Glogo} alt="I4G logo" className="lg:w-auto w-[99.1px]" />
    </div>
  );
};

export default Footer;
