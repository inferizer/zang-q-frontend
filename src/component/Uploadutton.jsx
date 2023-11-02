import { LiaArrowUpSolid } from "react-icons/lia";
const UploadButton = ({ children, onClick }) => (
  <button className="bg-gray40 hover:bg-gray20 text-primaryWhite font-semibold py-2 px-7 rounded inline-flex items-center">
    <UploadButton />
    <span>{children}</span>
  </button>
);

export default UploadButton;
