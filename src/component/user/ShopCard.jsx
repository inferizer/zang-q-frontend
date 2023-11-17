import {MdLocationOn, MdOutlineAccessTime} from "react-icons/md" 
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hook/useUser";
export default function ShopCard({ storeName, location, q, img, id }) {
  const {hdl_shopList_navigation} = useUser()
  const navigate = useNavigate()

  console.log(id)
    return (
      
        <div className="mobile:justify-center items-center flex" onClick={()=> {
          
          navigate(`/user/book`)
          hdl_shopList_navigation(id)
          }}>
          <div className="mobile: bg-white flex-col justify-start items-start inline-flex">
            <div className="mobile:self-stretch  px-4 flex-col justify-start items-start inline-flex">
              <div className="mobile:self-stretch py-2.5 flex-col justify-start items-center gap-2.5 flex">
                <div className="mobile:self-stretch  px-16 py-3  bg-white rounded-xl shadow justify-start items-center gap-[30px] inline-flex">
                  <div className="mobile:w-[89px] h-[89px] bg-white rounded-xl border-2 border-zinc-100 justify-start items-start gap-2.5 flex">
                    {" "}
                    <img
                      className=" mobile:grow shrink  basis-0 self-stretch
                      "
                      src={img}
                    />
                  </div>
                  <div className="mobile:grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="mobile:self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="mobile:grow shrink basis-0 text-black text-base font-bold font-['Nunito Sans']">
                        {storeName}
                      </div>
                    </div>
                    <div className="mobile:self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="mobile:w-[21px] h-5 px-[5px] py-0.5 justify-start items-start gap-2.5 flex">
                        <MdLocationOn className="w-[30px] h-[15px] text-[#AAAAAA]" />
                      </div>
                      <div className="mobile:grow shrink basis-0 text-neutral-400 text-xs font-bold font-['Nunito Sans']">
                        {location}
                      </div>
                    </div>
                    <div className="mobile:self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="mobile:w-5 h-5 p-0.5 justify-start items-start gap-2.5 flex">
                        <MdOutlineAccessTime className="w-[30px] h-[15px] text-[#FF20B1]" />
                      </div>
                      <div className="mobile:grow shrink basis-0 text-[#FF20B1] text-xs font-bold font-['Nunito Sans']">
                        {q}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
}