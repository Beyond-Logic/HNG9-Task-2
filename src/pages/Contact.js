/** @format */

import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Footer } from "../components";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Toaster />
      <ContactForm />
      <div className="md:px-[114px] px-[16px]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
