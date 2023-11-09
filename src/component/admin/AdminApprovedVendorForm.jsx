import { RiMapPinFill, RiEyeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function AdminApprovedVendorFrom() {
  return (
    <div className="mobile: mx-auto container bg-white flex">
      <div className="mobile: container mx-auto flex-col gap-4 rounded-lg ">
        <div className="mobile: py-2 mx-96 items-center bg-primary-400 gap-4 rounded-2xl">
          <div className="mobile: text-white text-sm text-center ">
            ร้านรอการตรวจสอบ
          </div>
        </div>
        <div className="mobile: flex-col grid grid-cols-6 gap-8 justify-center shadow-lg py-6 px-6">
          <div className="mobile: col-start-2 col-span-4 bg-primaryWhite shadow-lg shadow-gray20 rounded-lg py-2 px-6">
            <div className="mobile: text-primaryRed font-semibold py-2">
              สุกี้ตี๋น้อย
            </div>
            <div className="mobile: gap-2 flex justify-start">
              <RiMapPinFill className=" mobile: text-gray60 w-4 h-4" />
              <div className="mobile: font-bold text-xs text-gray50">
                MBK center
              </div>
            </div>
            <div className="mobile: flex justify-end gap-6 py-2 px-6">
              <Link to="/admin/approved">
                <RiEyeFill className="mobile: text-gray60 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
