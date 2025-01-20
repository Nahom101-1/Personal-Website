"use client";

import React from "react";
import { ButtonProps } from "../../types/types";


const Button = ({ href, label, primary }: ButtonProps) => (
  <a
    href={href}
    target="_blank"
    className={`inline-block px-6 py-3 text-base md:text-lg font-medium rounded-md transition-colors duration-300 ${
      primary
        ? "bg-[#123529] text-white hover:bg-[#85A947]"
        : "border border-[#3E7B27] text-[#3E7B27] hover:bg-[#EFE3C2] hover:text-white"
    }`}
  >
    {label}
  </a>
);

export default Button;
