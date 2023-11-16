import { LiaGreaterThanSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import {useAuth} from "../../hook/useAuthContext"

export default function VendorDetail({name,picture}){
    const {hdl_logout,setUserEditOpen,authUser} = useAuth()
    
    
    return(
        <>
    
        <div className="flex flex-col justify-center items-center">
        <div className="mobile:w-[390px] h-[133px] px-4 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex   ">
          <div className="mobile:w-[363px] px-6 py-3  rounded-xl justify-start items-center gap-[30px] inline-flex">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white  border-2 border-zinc-100 justify-start items-start gap-2.5 flex">
              <img
                className="mobile:grow shrink basis-0 self-stretch"
                src={picture}
                alt="user image"
              />
            </div>
            <div className="mobile:grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="mobile:self-stretch justify-start items-center gap-2.5 inline-flex">
                <div className="mobile: mr-[20px] grow shrink basis-0 text-black text-base font-bold font-['Nunito Sans']">
                  {name}
                </div>
              </div>
              <button className="mobile" onClick={()=>setUserEditOpen(true)}>
                <div className="mobile: bg-black w-[160px] h-[30px] text-white rounded-[40px]  hover:text-white border border-gray-800 hover:bg-gray-700 pt-1 flex justify-center gap-2 ">
                  แก้ไขข้อมูลร้านค้า
                  <LiaGreaterThanSolid className=" mt-[2.5px]"/>
                </div>
              </button>
            </div>
          </div>
          
          </div>

            <div className="px-6 py-3 bg-white border border-solid-black rounded-xl justify-center items-center gap-8 inline-flex hover:cursor-pointer " onClick={()=>hdl_logout()}>
              <div className="mobile:w-8 h-8 relative">
                <RxExit className="mobile:w-[35px] h-[35px]" />
              </div>
              <div className="w-24 flex-col justify-start items-start gap-2 inline-flex " >
                <div className="  text-black text-base font-bold font-['Nunito Sans']">
                  ออกจากระบบ
                </div>
              </div>
            </div>
          
        </div>
      
      </>
    ) 
}