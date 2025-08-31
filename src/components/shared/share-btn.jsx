"use client"
import React from 'react'
import { FaShareAlt } from "react-icons/fa";

const ShareBtn = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("ggwtpi")
      .then(() => {
        alert("Copied: ggwtpi ✅"); // ممكن تستبدلها بتوست من shadcn/ui أو أي حاجة ألطف
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <button
      onClick={handleCopy}
      className="group size-10 max-lg:mx-auto bg-main-light-navy text-main-navy px-3 py-2 rounded-full text-sm font-semibold flex w-fit items-center justify-center gap-2"
    >
      <FaShareAlt size={20} className="group-hover:-rotate-45 transition-all duration-300" />
      <p className='lg:hidden'>Share</p>
    </button>
  )
}

export default ShareBtn
