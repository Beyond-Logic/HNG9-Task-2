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
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        className={`outline-[#84CAFF] w-full mt-[6px] rounded-[8px] py-[10px] px-[14px] text-[16px] leading-[24px] text-[#101828]  border-[1px] ${
          errorColor ? errorColor : "border-[#D0D5DD] "
        }`}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputField;
