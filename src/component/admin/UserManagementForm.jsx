import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiEyeFill,
  RiMapPinFill,
} from "react-icons/ri";

export default function UserManagementForm() {
  return (
    <div className="md:max-sm:flex">
      <div className="">
        <div className="bg-primaryRed container mx-auto py-2 rounded-lg">
          <div className="text-primaryWhite text-sm text-center">
            ร้านรอการตรวจสอบ
          </div>
        </div>
        <div className="">
          <div className="flex-col grid grid-cols-6 gap-8 justify-center py-6 px-6">
            <div className=" col-start-2 col-span-4 bg-primaryWhite shadow-lg shadow-gray20 rounded-lg py-2 px-6">
              <div className=" text-primaryRed font-semibold py-2">
                สุกี้ตี๋น้อย
              </div>
              <div className="gap-2 flex justify-start">
                <RiMapPinFill className="text-gray60 w-4 h-4" />
                <div className="font-bold text-xs text-gray50">MBK center</div>
              </div>
              <div className="flex justify-end gap-6 py-2 px-6">
                <RiEyeFill className="text-gray60 w-4 h-4" />
                <RiCloseCircleFill className="text-gray60 w-4 h-4" />
                <RiCheckboxCircleFill className="text-greenLight w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
