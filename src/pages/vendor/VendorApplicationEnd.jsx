import React from "react";
import shop from '../../assets/image/shop.svg'
import { ChevronRightIcon } from "../../assets/icon/Icon";

export default function VendorApplicationEnd() {
  return (
    <section className="section h-screen flex items-center">
      <div className="container min-w-[360px flex flex-col items-center gap-4">
        <h6 className="text-xl font-bold text-center text-primary-500">Zang Q!<br /> ขอบคุณที่ลงทะเบียนกับเรา</h6>
        <img src={shop} className="w-80 h-80 object-fit" />
        <h6 className="text-lg font-medium">เรากำลังตรวจสอบข้อมูลของคุณ</h6>
      </div>
    </section>
  );
}
