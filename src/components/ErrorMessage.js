/** @format */

import React from "react";

const ErrorMessage = ({error}) => {
  return (
    <p className="font-normal text-[#F83F23] text-[14px] leading-[20px] mt-[6px]">
        {error}
    </p>
  );
};

export default ErrorMessage;
