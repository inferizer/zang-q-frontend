import { useState } from "react";
import { useAdmin } from "../../hook/useAdmin";
import Modal from "../../component/modal";

export default function ApproveVendor() {
  const {
    pendingVendor,
    hdl_view_pending_detail,
    singlePendingVendor,
    hdl_approved_submit,
    hdl_reject_application,
  } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen)
    return (
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div>
          {singlePendingVendor ? (
            singlePendingVendor.map((el) => {
              return (
                <div key={el.id}>
                  {el.registrationNumber ? (
                    <h1>นิติบุคคล</h1>
                  ) : (
                    <h1>บุคคลทั่วไป</h1>
                  )}
                  <img src={el.idCard} />
                  <img src={el.shopPicture} />
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
              );
            })
          ) : (
            <h1>nothing selected</h1>
          )}
        </div>
      </Modal>
    );
  return (
    <div>
      {pendingVendor ? (
        pendingVendor.map((el) => {
          return (
            <div
              key={el.id}
              className="flex gap-32 bg-green-200 justify-center py-8 mt-20"
            >
              <div>
                {el.shopName}
                <h4>Shop location</h4>
              </div>
              <div className=" flex gap-4">
                <button
                  onClick={() => {
                    setIsOpen(true);
                    hdl_view_pending_detail(el.shopAccountId);
                  }}
                >
                  see info
                </button>
                <button
                  onClick={() => {
                    hdl_reject_application(el.id);
                  }}
                >
                  reject
                </button>
                <button
                  onClick={() => {
                    hdl_approved_submit(el.id);
                  }}
                >
                  approved
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h1> No pending request</h1>
      )}
    </div>
  );
}
