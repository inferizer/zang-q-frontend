// import { RiMapPinFill, RiEyeFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import { useAdmin } from "../../hook/useAdmin";

// export default function AdminApprovedVendorForm() {
//   const { hdl_view_pending_detail, approvedVendorsList } = useAdmin();
//   return (
//     <div className="bg-white flex justify-center items-start h-screen">
//       <div className="mobile:w-[800px] desktop:w-[1024px] flex flex-col items-center p-4 rounded-lg gap-4 mt-20 bg-white w-[800px]">
//         <h1 className="w-[350px] text-center bg-primary-400 text-white py-2 rounded-xl font-semibold">
//           Restaurant has been approved
//         </h1>
//         <div>
//           {approvedVendorsList.map((el) => (
//             <div
//               key={el.id}
//               className="flex items-center justify-between w-[900px] gap-12 py-6 px-8 shadow-xl rounded-lg"
//             >
//               <div className="flex flex-col items-start justify-start gap-2">
//                 <div className="text-gray-900 font-semibold text-lg">
//                   {el.shopName}
//                 </div>
//                 <div className="gap-2 flex justify-start">
//                   <div className="flex gap-2">
//                     <RiMapPinFill className="mobile:text-primary-500 text-3xl cursor-pointer" />
//                     <div className="font-bold text-xs text-gray-700">
//                       {el.address}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex justify-end gap-6 py-2 px-6">
//                   <Link
//                     to={`admin/restaurant/details/${el.id}`}
//                     onClick={() => hdl_view_pending_detail()}
//                   >
//                     <RiEyeFill className="text-primary-500 text-3xl cursor-pointer" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Modal from "../../component/modal";
import { useAdmin } from "../../hook/useAdmin";
import { RiEyeFill, RiMapPinFill } from "react-icons/ri";

export default function ApproveVendor() {
  const {
    approvedVendorsList,
    hdl_view_approved_detail,
    singleApprovedVendor,
  } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen)
    return (
      <Modal onClose={() => setIsOpen(false)}>
        <div>
          {singleApprovedVendor ? (
            singleApprovedVendor.map((el) => (
              <div key={el.id}>
                {el.registrationNumber ? (
                  <h1>นิติบุคคล</h1>
                ) : (
                  <h1>บุคคลทั่วไป</h1>
                )}
                <img src={el.idCard} alt="ID Card" />
                <img src={el.shopPicture} alt="Shop Picture" />
                <h1>{el.shopName}</h1>
                <h1>{el.shopLat}</h1>
                <h1>{el.shopLan}</h1>
                <h1>{el.shopMobile}</h1>
                <h1>{el.openingTimes}</h1>
                <h1>{el.closingTimes}</h1>
                <h1>{el.ownerFirstName}</h1>
                <h1>{el.ownerLastName}</h1>
                <h1>{el.idNumber}</h1>
              </div>
            ))
          ) : (
            <h1>nothing selected</h1>
          )}
        </div>
      </Modal>
    );

  return (
    <div className="bg-white flex justify-center items-start h-screen">
      <div className="mobile:w-[800px] desktop:w-[1024px] flex flex-col items-center p-4 rounded-lg gap-4 mt-20 bg-white w-[800px]">
        <h1 className="w-[220px] text-center bg-primary-400 text-white py-2 rounded-xl font-semibold">
          Pending Restaurant
        </h1>
        <div>
          {approvedVendorsList.map((el) => (
            <div
              key={el.id}
              className="flex items-center justify-between w-[900px] gap-12 py-6 px-8 shadow-xl rounded-lg"
            >
              <div className="flex flex-col items-start justify-start gap-2">
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
          ))}
        </div>
      </div>
    </div>
  );
}
