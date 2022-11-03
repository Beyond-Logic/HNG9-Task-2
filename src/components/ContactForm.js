/** @format */

import React from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

const ContactForm = () => {
  const name = "BeyondLogic";
  return (
    <div className="md:mt-[156px] mt-[64px] xl:px-[360px] lg:px-[180px] md:px-[90px] px-[16px]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full">
          <h1 className="text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-[#101828]">
            Contact Me
          </h1>
          <p className="mt-[20px] mb-[48px] text-[20px] font-normal text-[#475467] leading-[30px]">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <div className="w-full">
          <div className="flex md:flex-row flex-col md:space-x-[24px] md:space-y-0 space-y-[24px]">
            <InputField
              title="First name"
              type="text"
              placeholder="Enter your first name"
            />
            <InputField
              title="Last name"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mt-[24px]">
            <InputField
              title="Email"
              type="email"
              placeholder="yourname@email.com"
            />
          </div>
          <div className="mt-[24px]">
            <TextAreaField
              title="Message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>
          <div className="mt-[24px] flex space-x-[12px] cursor-pointer">
            <input
              type="checkbox"
              width="24px"
              height="24px"
              className="rounded-[6px] border border-[#D0D5DD]"
            />
            <p className="text-[#475467] font-normal text-[16px] leading-[24px]">
              You agree to providing your data to {name} who may contact you.
            </p>
          </div>
          <button
            id="btn__submit"
            className="submit__button mt-[32px] md:mb-[236px] mb-[146px] py-[12px] text-center bg-[#1570EF] border border-[#1570EF] rounded-[8px] w-full text-white"
          >
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
