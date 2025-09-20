"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { RiImageCircleFill } from "react-icons/ri";

const ChangeImgForm = () => {
  const [image, setImage] = useState(null);

  // تغيير الصورة
  const handleChangePhoto = (e) => {
    const file = e.target.files[0];
    if (file && ["image/jpeg", "image/png", "image/gif"].includes(file.type) && file.size <= 1024 * 1024) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image (JPG, PNG, GIF) under 1MB");
    }
  };

  // حذف الصورة
  const handleRemovePhoto = () => {
    setImage(null);
  };

  return (
    <div className="bg-white  rounded-xl lg:rounded-[40px] p-6 flex flex-col md:flex-row items-center gap-6">
      {/* صورة البروفايل */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 relative p-1 size-20 rounded-full border-2 border-main-orange flex items-center justify-center overflow-hidden">
          {image ? (
            <Image width={100} height={100} src={image} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <Image src="/user/change-img.svg" alt="Profile" width={100} height={100} className="w-full h-full object-cover" />
          )}
        </div>
        <div>
          <h2 className="font-semibold text-main-navy">Abdullah Al-Walidi</h2>
          <p className="text-xs text-main-orange">Student</p>
          <p className="text-[10px] text-main-navy mt-1">
            Maximum size: 1MB. Supported formats: JPG, GIF, or PNG.
          </p>
        </div>
      </div>

      <div className="flex gap-3 ms-auto max-md:mx-auto">
        {/* زر تغيير الصورة */}
        <label className="text-xs font-medium flex items-center gap-2 bg-main-navy hover:bg-main-navy/95 text-white px-3 py-2 rounded-full cursor-pointer whitespace-nowrap">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleChangePhoto}
          />
          <span>Change Photo</span>
          <div className="w-6 h-6 flex items-center justify-center text-main-navy bg-white rounded-full">
            <RiImageCircleFill size={12} />
          </div>
        </label>

        {/* زر حذف الصورة */}
        <button
          onClick={handleRemovePhoto}
          className="text-xs font-medium flex items-center gap-2 bg-main-light-navy hover:bg-main-light-navy/95 text-main-navy px-3 py-2 rounded-full whitespace-nowrap"
        >
          <span>Remove Photo</span>
          <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
            <FaRegTrashAlt size={12} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChangeImgForm;
