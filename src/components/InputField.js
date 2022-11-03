/** @format */

import React from "react";

const InputField = ({ title, type, placeholder }) => {
  return (
    <div className="w-full">
      <h4 className="w-full mb-[6px] font-medium text-[14px] text-[#344054] leading-[20px]">
        {title}
      </h4>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] text-[16px] leading-[24px] text-[#667085] outline-[#84CAFF]"
      />
    </div>
  );
};

export default InputField;