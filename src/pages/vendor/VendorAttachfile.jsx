import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import VendorAttach from '../../assets/logo/VendorAttach.png'
import VendorLanding from "./VendorLanding";

export default function   VendorAttachfile() {
  const navigate = useNavigate()
  return (
    <>
      <div className="mobile:flex justify-center items-center h-screen bg-back">
        <div className="mobile">
          <img src={VendorAttach} className=" w-[300px] h-[300px]"/>
          <h5 className="mobile:text-center mt-[44px]">กรุณากรอกข้อมูล</h5>  
          <div className="mobile:flex flex-col items-center gap-[16px]">
            <button className="mobile" >
              <div className="mobile:bg-black w-[200px] h-[30px] text-white rounded-[40px] mt-[16px] hover:text-white border border-gray-800 hover:bg-gray-500 ">
                document
                <LiaGreaterThanSolid className="mobile: inline ml-[10px]" />
              </div>
            </button>
            <VendorLanding/>
          </div>
        </div>
      </div>
    </>
  );
}
