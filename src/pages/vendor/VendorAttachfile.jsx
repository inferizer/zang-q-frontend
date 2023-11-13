import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import VendorAttach from '../../assets/logo/VendorAttach.png'
import VendorLanding from "./VendorLanding";
import { ChevronRightIcon } from "../../assets/icon/Icon";

export default function VendorAttachfile() {
  const navigate = useNavigate()

  return (
    <section className="section h-screen flex items-center">
      <div className="container flex flex-col items-center justify-center gap-4">
        <img src={VendorAttach} className=" max-w-[300px] h-[300px]" />
        <h5 className="text-lg font-semibold">กรุณาแนบเอกสารข้อมูล</h5>
        <button className="mobile" >
          <div
            className="bg-black rounded-3xl text-white px-4 py-2 flex items-center justify-between gap-2 hover:opacity-60"
            onClick={() => navigate('/vendor/application')}
          >
            แนบเอกสาร
            <ChevronRightIcon />
          </div>
        </button>
        <VendorLanding />
      </div>
    </section>
  );
}
