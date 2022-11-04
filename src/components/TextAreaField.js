/** @format */

import React from "react";

const TextAreaField = ({
  title,
  type,
  placeholder,
  id,
  name,
  onChange,
  value,
  onBlur,
  onClick,
  errorColor,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="w-full font-medium text-[14px] text-[#344054] leading-[20px]"
      >
        {title}
      </label>
      <textarea
        id={id}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        className={`w-full mt-[6px] border-[#D0D5DD] rounded-[8px] py-[12px] px-[14px] outline-[#84CAFF] border-[1px] text-[#101828] ${errorColor}`}
        style={{ height: "132px", resize: "none" }}
        onClick={onClick}
      />
    </div>
  );
};

export default TextAreaField;
