/** @format */

import React from "react";

const TextAreaField = ({ title, type, placeholder, id }) => {
  return (
    <div className="w-full">
      <h4 className="w-full mb-[6px] font-medium text-[14px] text-[#344054] leading-[20px]">
        {title}
      </h4>
      <textarea
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full border border-[#D0D5DD] rounded-[8px] py-[12px] px-[14px] outline-[#84CAFF] text-[#101828]"
        style={{ height: "132px", resize: "none" }}
      />
    </div>
  );
};

export default TextAreaField;
