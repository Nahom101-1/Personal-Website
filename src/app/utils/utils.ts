
"use client";
export const scrollByAmount = (amount: number) => {
  window.scrollBy({ top: amount, behavior: "smooth" });
};

