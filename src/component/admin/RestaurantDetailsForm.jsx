import React from "react";
import { Link } from "react-router-dom";
import TimePicker from "../TimePicker";

export default function RestaurantDetails({
  name,
  shopMobile,
  ShopsCategories,
  picture,
  address,
  openingTimes,
  closingTimes,
}) {
  return (
    <>
      <div className=" mobile mt-20 bg-gray-200">
        <div className=" mobile container mx-auto ">
          <div className="mobile items-center justify-center mx-auto">
            <section className="bg-white rounded-lg shadow-md">
              <div className="mobile flex flex-wrap">
                <div className=" mobile w-full mx-auto flex flex-col">
                  <div className="mobile items-center justify-center">
                    <img src={picture} alt={name} />
                  </div>
                </div>
                <div className="mobile w-full flex flex-col p-6 items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {name}
                  </h2>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {shopMobile}
                  </h2>
                  <p className="text-md font-semibold text-gray-800 mb-2 leading-loose">
                    {ShopsCategories.join(", ")}
                  </p>
                  <p className="text-gray-600 text-md mb-2 leading-loose">
                    {address}
                  </p>
                  <div className="mt-4 text-gray-600">
                    <strong>Opening Times:</strong>
                    <TimePicker selectedTime={openingTimes} />
                  </div>
                  <div className="mt-4 text-gray-600">
                    <strong>Closing Times:</strong>
                    <TimePicker selectedTime={closingTimes} />
                  </div>
                  <div>
                    <button className="mobile: mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ">
                      confirm edited
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
