import { RiDeleteBin5Fill } from "react-icons/ri";
import { useAdmin } from "../../hook/useAdmin";
import { toast } from "react-toastify";
import { useState } from "react";

export default function RejectModal({ children, open, onClose }) {
  const { hdl_reject_application } = useAdmin() || {};
  const [isRejected, setIsRejected] = useState(false);

  const handleReject = async () => {
    try {
      if (hdl_reject_application) {
        await hdl_reject_application();
        setIsRejected(true);
      } else {
        toast.info("rejected successfully");
      }
    } catch (error) {
      toast.error("Error rejecting application:", error);
    }
  };
  return (
    <>
      {open && (
        <>
          <div className=" mobile: mx-auto fixed inset-0 backdrop-opacity-30 max-h-screen">
            <div className=" mobile: w-full fixed inset-0 max-w-lg p-5 mx-auto my-auto rounded-xl shadow-lg bg-white">
              <div className="">
                <div className=" mobile: flex items-center justify-center">
                  <RiDeleteBin5Fill className=" mobile: flex text-primary500 " />
                </div>
                <div className="mobile: text-center p-5 flex-auto justify-center">
                  <h2 className="mobile: text-xl font-bold py-4">
                    Are you sure?
                  </h2>
                  <p className="mobile: text-sm text-gray60 px-8">
                    Do you really want to reject this shop's application? This
                    process cannot be undone.
                  </p>
                </div>
                <div className=" mobile: p-3 mt-2 text-center space-x-4 md:block">
                  <button
                    onClick={onClose}
                    className="mobile: mb-2 md:mb-0 bg-primary-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover: bg-primary-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleReject}
                    disabled={isRejected}
                    className={`mobile: mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-primary-600 rounded-full hover:shadow-lg hover: bg-primary-200 ${
                      isRejected && "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    {" "}
                    {isRejected ? "Rejected" : "Reject"}
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
