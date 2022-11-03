/** @format */

import React, { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import InputCheckBoxOff from "../assets/InputCheckBox1.svg";
import InputCheckBoxOn from "../assets/InputCheckBox2.svg";

const ContactForm = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  };

  const [contactFormData, setContactFormData] = useState(initialState);

  const { first_name, last_name, email, message } = contactFormData;

  // const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleToggleCheckBox = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const { name, value } = e.target;
      if (first_name && last_name && validateEmail(email)) {
        setContactFormData({
          [name]: value,
        });
      } else {
        // setError(true);
      }
    } catch (error) {
      console.log("error");
    }
  };

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
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col md:space-x-[24px] md:space-y-0 space-y-[24px]">
            <InputField
              title="First name"
              type="text"
              name="first_name"
              value={first_name}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              id="first_name"
              // errorMessage={
              //   error && (
              //     <ErrorMessageContainer errorMessage="Please enter your first name" />
              //   )
              // }
            />
            <InputField
              title="Last name"
              type="text"
              name="last_name"
              value={last_name}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              id="last_name"
              // errorMessage={
              //   error && (
              //     <ErrorMessageContainer errorMessage="Please enter your last name" />
              //   )
              // }
            />
          </div>
          <div className="mt-[24px]">
            <InputField
              title="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="yourname@email.com"
              id="email"
              // errorMessage={
              //   error && (
              //     <ErrorMessageContainer errorMessage="Please enter your email" />
              //   )
              // }
            />
          </div>
          <div className="mt-[24px]">
            <TextAreaField
              title="Message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id="message"
              name="message"
              value={message}
              onChange={handleInputChange}
              // errorMessage={
              //   error && (
              //     <ErrorMessageContainer errorMessage="Please enter your message" />
              //   )
              // }
            />
          </div>
          <div
            className="mt-[24px] flex space-x-[12px] cursor-pointer w-fit"
            onClick={handleToggleCheckBox}
          >
            {toggleCheckBox ? (
              <img src={InputCheckBoxOn} alt="Input CheckBox On" />
            ) : (
              <img src={InputCheckBoxOff} alt="Input CheckBox Off" />
            )}
            <p className="text-[#475467] font-normal text-[16px] leading-[24px]">
              You agree to providing your data to {name} who may contact you.
            </p>
          </div>
          <button
            id="btn__submit"
            className={`submit__button mt-[32px] md:mb-[236px] mb-[146px] py-[12px] text-center  border border-[#1570EF] rounded-[8px] w-full text-white ${
              toggleCheckBox
                ? "bg-[#175CD3]"
                : "bg-[#1570EF] pointer-events-none "
            }`}
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
