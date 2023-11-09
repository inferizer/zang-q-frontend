import { RiDeleteBin5Fill } from "react-icons/ri";
import { useAdmin } from "../../hook/useAdmin";
import { useState } from "react";

export default function RejectModal({ onClose }) {
  const { hdl_reject_application } = useAdmin() || {};
  const [isRejected, setIsRejected] = useState(false);

  const handleReject = async () => {
    try {
      if (hdl_reject_application) {
        await hdl_reject_application();
        setIsRejected(true);
      } else {
        console.error("hdl_reject_application is not defined.");
      }
    } catch (error) {
      console.error("Error rejecting application:", error);
    }
  };
  return (
    <div className=" mobile: mx-auto backdrop-opacity-30 max-h-screen">
      <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-blueLight">
        <div className="">
          <div className="flex items-center justify-center">
            <RiDeleteBin5Fill className="flex text-primary500 " />
          </div>
          <div className="text-center p-5 flex-auto justify-center">
            <h2 className="text-xl font-bold py-4">Are you sure?</h2>
            <p className="text-sm text-gray60 px-8">
              Do you really want to reject this shop's application? This process
              cannot be undone.
            </p>
          </div>
          <div className="p-3 mt-2 text-center space-x-4 md:block">
            <button
              onClick={onClose}
              className="mb-2 md:mb-0 bg-primaryWhite px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray60 rounded-full hover:shadow-lg hover:bg-gray10"
            >
              Cancel
            </button>
            <button
              onClick={handleReject}
              disabled={isRejected}
              className={`mb-2 md:mb-0 bg-primary300 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-primaryWhite rounded-full hover:shadow-lg hover:bg-blueLight ${
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
  );
}
