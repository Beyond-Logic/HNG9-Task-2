/** @format */

import React from "react";

const InputField = ({
  title,
  type,
  placeholder,
  id,
  name,
  onChange,
  value,
  onBlur,
}) => {
  return (
    <div className="w-full">
      <h4 className="w-full mb-[6px] font-medium text-[14px] text-[#344054] leading-[20px]">
        {title}
      </h4>
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        className="w-full border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] text-[16px] leading-[24px] text-[#101828] outline-[#84CAFF]"
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputField;
