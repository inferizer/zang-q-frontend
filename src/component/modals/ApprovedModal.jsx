import { RiDeleteBin5Fill } from "react-icons/ri";
import { useAdmin } from "../../hook/useAdmin";
import { useState } from "react";

export default function ApprovedModal({ onClose }) {
  const { hdl_approve_application } = useAdmin();
  const [isApproved, setIsApproved] = useState(false);

  const handleApprove = async () => {
    try {
      await hdl_approve_application();
      setIsApproved(true);
    } catch (error) {
      console.error("Error approving application:", error);
    }
  };
  return (
    <div className=" mobile:mx-auto backdrop-opacity-30 max-h-screen">
      <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-blueLight">
        <div className="">
          <div>
            <RiDeleteBin5Fill className="text-primary500 items-center" />
          </div>
          <div className="text-center p-5 flex-auto justify-center">
            <h2 className="text-xl font-bold py-4">Are you sure?</h2>
            <p className="text-sm text-gray60 px-8">
              Do you want to approve this shop's application?
            </p>
          </div>
          <div className="p-3 text-center space-x-4 md:block">
            <button
              onClick={onClose}
              className="mb-2 md:mb-0 bg-primaryWhite px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray60 rounded-full hover:shadow-lg hover:bg-gray10"
            >
              Cancel
            </button>
            <button
              onClick={handleApprove}
              disabled={isApproved}
              className={`mb-2 md:mb-0 bg-blueSum px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-primaryWhite rounded-full hover:shadow-lg hover:bg-blueLight ${
                isApproved ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isApproved ? "Approved" : "Approve"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
