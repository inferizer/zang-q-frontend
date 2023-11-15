import React, { useState } from "react";
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiEyeFill,
  RiMapPinFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAdmin } from "../../hook/useAdmin";
import ApprovedModal from "../modals/ApprovedModal";
import RejectModal from "../modals/RejectModal";
import Modal from "../../component/modal";

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
      <div className="bg-white flex justify-center items-start h-screen">
        <div className=" mobile:max-w-[800px] desktop:max-w-[1024px] flex flex-col  items-center p-4 rounded-lg gap-4 mt-20 bg-white w-[500px] border shadow-xl">
          <h1>Pendding</h1>
          <div>
            {pendingVendor.map((el) => (
              <div
                key={el.id}
                className=" flex items-center justify-between w-[400px] gap-12 py-4"
              >
                <div className="flex flex-col gap-2 ">
                  <div className="text-gray-900">{el.shopName}</div>
                  <div className="gap-2 flex justify-start">
                    <div className="flex gap-2">
                      <RiMapPinFill className="mobile:text-primary-600 text-xl cursor-pointer" />
                      <div className="font-bold text-xs text-gray-700">
                        {el.address}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-end gap-6 py-2 px-6">
                    <Link
                      to={`admin/restaurant/details/${el.id}`}
                      onClick={() => hdl_view_pending_detail()}
                    >
                      <RiEyeFill className="text-primary-600 text-xl cursor-pointer" />
                    </Link>

                    <RiCloseCircleFill
                      className="text-primary-600 text-xl cursor-pointer"
                      onClick={() => {
                        hdl_reject_application();
                        handleRejectModalOpen();
                      }}
                    />

                    <RiCheckboxCircleFill
                      className="text-primary-600 text-xl cursor-pointer"
                      onClick={() => {
                        hdl_approved_submit();
                        handleApproveModalOpen();
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import {
//   RiCheckboxCircleFill,
//   RiCloseCircleFill,
//   RiEyeFill,
//   RiMapPinFill,
// } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import { useAdmin } from "../../hook/useAdmin";
// import Modal from "../../component/modal";

// export default function AdminManagementMain() {
//   const {
//     hdl_approved_submit,
//     hdl_view_pending_detail,
//     hdl_reject_application,
//     pendingVendor,
//     singlePendingVendor
//   } = useAdmin();
//   const [isOpen, setIsOpen] = useState(false);

//   if(isOpen) return < Modal onClose={()=>{
//     setIsOpen(false)
// }}>
//         <div>

//         </div>

// </Modal>

// {pendingVendor.map((el) => (
//   <div key={el.id} className="py-4 px-6">
//     <div className="text-gray-900 items-start justify-start flex">
//       {el.shopName}
//     </div>
//     <div className="gap-2 flex justify-start">
//       <RiMapPinFill className="mobile:text-primary-600 w-4 h-4 cursor-pointer" />
//       <div className="font-bold text-xs text-gray-700">
//         {el.address}
//       </div>
//     </div>
//     <div className="flex justify-end gap-6 py-2 px-6">
//       <Link
//         to={`admin/restaurant/details/${el.id}`}
//         onClick={() => hdl_view_pending_detail()}
//       >
//         <RiEyeFill className="text-primary-600 w-4 h-4 cursor-pointer" />
//       </Link>

//       <RiCloseCircleFill
//         className="text-primary-600 w-4 h-4 cursor-pointer"
//         onClick={() => {
//           hdl_reject_application();
//           handleRejectModalOpen();
//         }}
//       />

//       <RiCheckboxCircleFill
//         className="text-primary-600 w-4 h-4 cursor-pointer"
//         onClick={() => {
//           hdl_approved_submit();
//           handleApproveModalOpen();
//         }}
//       />
//     </div>
//   </div>
// ))}
