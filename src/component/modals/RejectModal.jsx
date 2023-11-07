import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
const RejectModal = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-blueLight">
      <div className="">
        <div>
          <RiDeleteBin5Fill className="text-primaryRed" />
        </div>
        <div className="text-center p-5 flex-auto justify-center">
          <h2 className="text-xl font-bold py-4">Are you sure?</h2>
          <p className="text-sm text-gray60 px-8">
            Do you really want to delete this shop? This process cannot be
            undone.
          </p>
        </div>
        <div className="p-3 mt-2 text-center space-x-4 md:block">
          <button className="mb-2 md:mb-0 bg-primaryWhite px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray60 rounded-full hover:shadow-lg hover:bg-gray10">
            Cancel
          </button>
          <button className="mb-2 md:mb-0 bg-blueSum px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-primaryWhite rounded-full hover:shadow-lg hover:bg-blueLight">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectModal;
