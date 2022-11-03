/** @format */

import React, { useState } from "react";
import { Formik } from "formik";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import InputCheckBoxOff from "../assets/InputCheckBox1.svg";
import InputCheckBoxOn from "../assets/InputCheckBox2.svg";
import ErrorMessage from "./ErrorMessage";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  };

  const [contactFormData, setContactFormData] = useState(initialState);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleToggleCheckBox = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  const name = "BeyondLogic";
  console.log("object,", contactFormData);

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
        <Formik
          initialValues={initialState}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Please enter a email";
              if (!values.first_name) {
                errors.first_name = "Please enter first name";
              }
              if (!values.last_name) {
                errors.last_name = "Please enter last name";
              }

              if (!values.message) {
                errors.message = "Please enter message";
              }
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "enter a valid email";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            try {
              setTimeout(() => {
                setContactFormData(values);
                setSubmitting(false);
                resetForm({ values: "" });
                setToggleCheckBox(false);
                toast.success(`Message Sent`);
              }, 2000);
            } catch (error) {
              toast.error("Something went Wrong");
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex md:flex-row flex-col md:space-x-[24px] md:space-y-0 space-y-[24px]">
                <div>
                  <InputField
                    title="First name"
                    type="text"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your first name"
                    id="first_name"
                  />
                  <ErrorMessage
                    error={
                      errors.first_name &&
                      touched.first_name &&
                      errors.first_name
                    }
                  />
                </div>
                <div>
                  <InputField
                    title="Last name"
                    type="text"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your last name"
                    id="last_name"
                  />
                  <ErrorMessage
                    error={
                      errors.last_name && touched.last_name && errors.last_name
                    }
                  />
                </div>
              </div>
              <div className="mt-[24px]">
                <InputField
                  title="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="yourname@email.com"
                  id="email"
                />
                <ErrorMessage
                  error={errors.email && touched.email && errors.email}
                />
              </div>
              <div className="mt-[24px]">
                <TextAreaField
                  title="Message"
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  error={errors.message && touched.message && errors.message}
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
                  You agree to providing your data to {name} who may contact
                  you.
                </p>
              </div>
              <button
                id="btn__submit"
                type="submit"
                disabled={isSubmitting}
                className={`submit__button mt-[32px] md:mb-[236px] mb-[146px] py-[12px] text-center  border border-[#1570EF] rounded-[8px] w-full text-white ${
                  toggleCheckBox
                    ? "bg-[#175CD3]"
                    : "bg-[#1570EF] pointer-events-none "
                }`}
              >
                {isSubmitting ? "Sending" : "Send message"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
