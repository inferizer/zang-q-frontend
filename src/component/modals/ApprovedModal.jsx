import { RiDeleteBin5Fill } from "react-icons/ri";
import { useAdmin } from "../../hook/useAdmin";
import { toast } from "react-toastify";
import { useState } from "react";

export default function ApprovedModal({ children, open, onClose }) {
  const { hdl_approve_application } = useAdmin();
  const [isApproved, setIsApproved] = useState(false);

  const handleApprove = async () => {
    try {
      await hdl_approve_application();
      setIsApproved(true);
    } catch (error) {
      toast.error("Error approving application:", error);
    }
  };

  return (
    <>
      {open && (
        <>
          <div className=" mobile: fixed inset-0 mx-auto backdrop-opacity-30 max-h-screen">
            <div className=" mobile: fixed inset-0 w-full max-w-lg p-5 mx-auto my-auto rounded-xl shadow-lg bg-white">
              <div className="">
                <div>
                  <RiDeleteBin5Fill className=" text-primary-600 items-center" />
                </div>
                <div className=" mobile: text-center p-5 flex-auto justify-center">
                  <h2 className=" mobile: text-xl text-gray-600 font-bold py-4">
                    Are you sure?
                  </h2>
                  <p className=" mobile: text-sm text-gray-700 px-8">
                    Do you want to approve this shop's application?
                  </p>
                </div>
                <div className=" mobile: p-3 mt-2 text-center space-x-4 md:block">
                  <button
                    onClick={onClose}
                    className=" mobile: mb-2 md:mb-0 bg-primary-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover: bg-primary-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleApprove}
                    disabled={isApproved}
                    className={` mobile: mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-primary-600 rounded-full hover:shadow-lg hover: bg-primary-200 ${
                      isApproved ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isApproved ? "Approved" : "Approve"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
