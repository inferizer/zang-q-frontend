import { RiUpload2Fill } from "react-icons/ri";
const UploadButton = ({ children, onClick }) => {
  return (
    <button className="bg-gray40 hover:bg-gray20 text-primaryWhite font-semibold py-2 px-7 rounded inline-flex items-center">
      <RiUpload2Fill />
      <span>{children}</span>
    </button>
  );
};

export default UploadButton;
