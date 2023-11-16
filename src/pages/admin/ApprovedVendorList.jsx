import React, { useState } from "react";
import Modal from "../../component/modal";
import { useAdmin } from "../../hook/useAdmin";
import { RiEyeFill, RiMapPinFill } from "react-icons/ri";

export default function ApprovedVendorList() {
  const {
    singleApprovedVendor,
    vendorAlreadyApproved,
    hdl_view_approved_detail,
  } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen)
    return (
      <Modal onClose={() => setIsOpen(false)}>
        <div className="mobile:w-[80%] desktop:w-[70%] mx-auto mt-20 inset-0 z-60">
          {singleApprovedVendor ? (
            singleApprovedVendor.map((el) => (
              <div
                key={el.id}
                className="bg-white p-4 rounded-lg shadow-xl gap-10"
              >
                <div className="flex flex-col justify-center items-center">
                  {el.registrationNumber ? (
                    <div className="items-center py-2 rounded-lg px-14 bg-primary-200 ">
                      <h1 className="text-3xl text-center text-white font-semibold">
                        {" "}
                        Juristic person
                      </h1>
                    </div>
                  ) : (
                    <div className="mb-10 items-center py-2 rounded-lg px-14 bg-primary-100">
                      <h1 className="text-3xl text-center text-gray-600 font-semibold">
                        General public
                      </h1>
                    </div>
                  )}
                </div>
                <div className="flex flex-row justify-center items-center gap-20">
                  <div className="items-center">
                    <p className="flex justify-center text-center text-lg text-gray-600 font-semibold">
                      Photo identification
                    </p>
                    <img
                      src={el.idCard}
                      alt="ID Card"
                      className="w-[250px] h-[250px] border border-md-primary-200"
                    />
                  </div>
                  <div className="items-center">
                    <p className="flex justify-center text-center text-lg text-gray-600 font-semibold">
                      Photo restaurant
                    </p>
                    <img
                      src={el.shopPicture}
                      alt="Shop Picture"
                      className="w-[250px] h-[250px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-6">
                  <p className="text-3xl font-extrabold text-gray-600">
                    Restaurant name : {el.shopName}
                  </p>
                </div>
                <div className="flex flex-col w-[500px] justify-center">
                  <div className="flex flex-col items-start justify-start mt-6">
                    <p className="text-xl font-extrabold text-gray-600">
                      phone number : {el.shopMobile}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-6">
                    <p className="text-xl font-extrabold text-gray-600">
                      Opening times : {el.openingTimes}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-6">
                    <p className="text-xl font-extrabold text-gray-600">
                      Closing times : {el.closingTimes}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-6">
                    <p className="text-xl font-extrabold text-gray-600">
                      Owner : {el.ownerFirstName} {el.ownerLastName}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-6">
                    <p className="text-xl font-extrabold text-gray-600">
                      ID number: {el.idNumber}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-xl font-extrabold text-red-500">
              Nothing selected!
            </h1>
          )}
        </div>
      </Modal>
    );

  return (
    <div className="bg-white flex justify-center items-start h-screen">
      <div className="mobile:w-[800px] desktop:w-[1024px] flex flex-col items-center p-4 rounded-lg gap-4 mt-20 bg-white w-[800px]">
        <h1 className="w-[220px] text-center bg-primary-400 text-white py-2 rounded-xl font-semibold">
          List of approved restaurant
        </h1>
        <div>
          {vendorAlreadyApproved ? (
            vendorAlreadyApproved.map((el) => (
              <div
                key={el.id}
                className="flex items-center justify-between w-[900px] py-6 px-8 shadow-xl rounded-lg"
              >
                <div className="flex flex-col items-start justify-start gap-16 mt-2">
                  <div className="text-gray-900 font-semibold text-lg">
                    {el.shopName}
                  </div>
                  <div className="gap-2 flex justify-start">
                    <div className="flex gap-2">
                      <RiMapPinFill className="mobile:text-primary-500 text-3xl cursor-pointer" />
                      <div className="font-bold text-xs text-gray-700 gap-4 mt-2">
                        <p className="text-sm">Shop location</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-end gap-6 py-2 px-6 mt-4">
                    <RiEyeFill
                      className="text-primary-500 text-3xl cursor-pointer"
                      onClick={() => {
                        setIsOpen(true);
                        hdl_view_approved_detail(el.shopAccountId);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-xl font-extrabold text-red-500">
              Nothing selected!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
