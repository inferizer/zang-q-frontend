import React, { useState } from "react";
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiEyeFill,
  RiMapPinFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAdmin } from "../../hook/useAdmin";
import RejectModal from "../modals/RejectModal";
import ApprovedModal from "../modals/ApprovedModal";

export default function AdminManagementMain() {
  const {
    hdl_approved_submit,
    hdl_view_pending_detail,
    hdl_reject_application,
    pendingVendor,
  } = useAdmin();

  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);

  const handleRejectModalOpen = () => {
    setIsRejectModalOpen(true);
  };

  const handleRejectModalClose = () => {
    setIsRejectModalOpen(false);
  };

  const handleApproveModalOpen = () => {
    setIsApproveModalOpen(true);
  };

  const handleApproveModalClose = () => {
    setIsApproveModalOpen(false);
  };

  return (
    <>
      <section className="w-screen bg-gray-50 px-4">
        <div className="max-w-[800px] m-auto desktop:max-w-[1024px]">
          <div className="mobile:justify-center items-center h-screen flex">
            <div className="mobile:px-7 py-2 mx-auto top-20 float-none text-white flex flex-col fixed bg-primary-300 text-center rounded-2xl">
              <p className="text-lg">ร้านรอการตรวจสอบ</p>
              {pendingVendor.map((el) => (
                <div
                  key={el.id}
                  className="mobile:col-start-2 col-span-4 bg-primaryWhite shadow-lg shadow-gray20 rounded-lg py-2 px-6 mb-4"
                >
                  <div className="mobile:text-gray-700 font-semibold py-2">
                    {el.shopName}
                  </div>
                  <div className="mobile:gap-2 flex justify-start">
                    <RiMapPinFill className="mobile:text-primary-600 w-4 h-4 cursor-pointer" />
                    <div className="mobile:font-bold text-xs text-gray-700">
                      {el.address}
                    </div>
                  </div>
                  <div className="mobile:flex justify-end gap-6 py-2 px-6">
                    <Link
                      to={`admin/restaurant/details/${el.id}`}
                      onClick={() => hdl_view_pending_detail()}
                    >
                      <RiEyeFill className="mobile:text-primary-600 w-4 h-4 cursor-pointer" />
                    </Link>

                    <RiCloseCircleFill
                      className="mobile:text-primary-600 w-4 h-4 cursor-pointer"
                      onClick={() => {
                        hdl_reject_application();
                        handleRejectModalOpen();
                      }}
                    />

                    <RiCheckboxCircleFill
                      className="mobile:text-primary-600 w-4 h-4 cursor-pointer"
                      onClick={() => {
                        hdl_approved_submit();
                        handleApproveModalOpen();
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {isRejectModalOpen && <RejectModal onClose={handleRejectModalClose} />}
      {isApproveModalOpen && (
        <ApprovedModal onClose={handleApproveModalClose} />
      )}
    </>
  );
}
