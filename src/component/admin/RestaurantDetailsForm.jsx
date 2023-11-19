import React from "react";
import { RiMapPinFill, RiTimeFill } from "react-icons/ri";
import Modal from "../modal";

export default function RestaurantDetailsForm({
  shopName,
  address,
  shopMobile,
  ShopsCategories,
  openingTimes,
  closingTimes,
  picture,
}) {
  return (
    <div className="mobile:w-[800px] desktop:w-[1024px] mx-auto">
      <div className="flex flex-col items-center p-4 rounded-lg mt-4 bg-white">
        <img
          src={picture}
          alt={shopName}
          className="rounded-md shadow-lg mb-4"
        />
        <h1 className="text-2xl font-semibold">{shopName}</h1>
        <div className="flex items-center gap-2 text-gray-700 mb-2">
          <RiMapPinFill className="text-primary-500" />
          <span>{address}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 mb-2">
          <RiTimeFill className="text-primary-500" />
          <span>
            {openingTimes} - {closingTimes}
          </span>
        </div>
        <div className="text-gray-700 mb-2">{shopMobile}</div>
        <div className="text-gray-700 mb-2">{ShopsCategories}</div>
      </div>
    </div>
  );
}
