/** @format */

import React from "react";
import { Footer } from "../components";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <ContactForm />
      <div className="md:px-[114px] px-[16px]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
