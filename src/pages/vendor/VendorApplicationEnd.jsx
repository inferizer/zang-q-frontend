import React from "react";
import VendorApplicationPic from '../../assets/logo/VendorApplicationEnd.png'
export default function VendorApplicationEnd() {
  return (
    <>
      <div className="mobile:justify-center items-center h-screen flex">
        <div className="w-[389px] h-[664px] flex-col justify-center items-center gap-5 inline-flex">
          <div className="text-center text-red-500 text-2xl font-bold font-['IBM Plex Sans Thai']">
            Zang Q! <br className="mobile" />
            ขอบคุณที่ลงทะเบียนกับเรา
          </div>
          <img src={VendorApplicationPic}
          className=" w-[290px] h-[290px]"
          />
          <div className="mobile: text-center text-neutral-700 text-xl font-semibold font-['IBM Plex Sans Thai']">
            เรากำลังตรวจสอบข้อมูลของคุณ
          </div>
        </div>
      </div>
    </>
  );
}
