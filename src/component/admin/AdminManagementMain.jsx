import React, { useState } from "react";
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiEyeFill,
  RiMapPinFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAdmin } from "../../hook/useAdmin";
import { useEffect } from "react";
import RejectModal from "../modals/RejectModal";
import ApprovedModal from "../modals/ApprovedModal";

export default function AdminManagementMain(shopName, address) {
  const {
    hdl_view_pending_detail,
    hdl_approved_submit,
    hdl_reject_application,
  } = useAdmin();

  useEffect(() => {}, []);

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
      <div key={shop} className="mobile: mx-auto container bg-white flex">
        <div className="mobile: container mx-auto flex-col gap-4 rounded-lg ">
          <div className="mobile: py-2 mx-96 items-center bg-primary-400 gap-4 rounded-2xl">
            <div className="mobile: text-white text-sm text-center">
              ร้านรอการตรวจสอบ
            </div>
          </div>
          <div className="mobile: flex-col grid grid-cols-6 gap-8 justify-center shadow-lg py-6 px-6">
            <div className="mobile: col-start-2 col-span-4 bg-primaryWhite shadow-lg shadow-gray20 rounded-lg py-2 px-6">
              <div className="mobile: text-gray-700 font-semibold py-2">
                {shopName}
              </div>
              <div className="mobile: gap-2 flex justify-start">
                <RiMapPinFill className=" mobile: text-primary-600 w-4 h-4" />
                <div className="mobile: font-bold text-xs text-gray-700">
                  {address}
                </div>
              </div>
              <div className="mobile: flex justify-end gap-6 py-2 px-6">
                <Link to="admin/restaurant/details">
                  <RiEyeFill
                    className="mobile: text-primary-600 w-4 h-4"
                    onClick={() => {
                      hdl_view_pending_detail();
                    }}
                  />
                </Link>

                <RiCloseCircleFill
                  className="mobile: text-primary-600 w-4 h-4 cursor-pointer"
                  onClick={() => {
                    hdl_reject_application();
                    handleRejectModalOpen();
                  }}
                ></RiCloseCircleFill>

                <RiCheckboxCircleFill
                  className="mobile: text-primary-600 w-4 h-4 cursor-pointer"
                  onClick={() => {
                    hdl_approved_submit();
                    handleApproveModalOpen();
                  }}
                ></RiCheckboxCircleFill>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isRejectModalOpen && <RejectModal onClose={handleRejectModalClose} />}
      {isApproveModalOpen && (
        <ApprovedModal onClose={handleApproveModalClose} />
      )}
    </>
  );
}
