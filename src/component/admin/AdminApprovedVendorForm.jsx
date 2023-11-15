import { RiMapPinFill, RiEyeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Loading from "../loading";
import { useAdmin } from "../../hook/useAdmin";

export default function AdminApprovedVendorForm() {
  const { hdl_view_pending_detail, approvedVendorsList } = useAdmin();
  return (
    <section className="w-screen bg-gray-50 px-4">
      <div className="max-w-[800px] m-auto desktop:max-w-[1024px]">
        <div className="mobile:justify-center items-center h-screen flex">
          <div className="mobile: px-7 py-2 mx-auto top-20 float-none text-white flex flex-col fixed bg-primary-300 text-center rounded-2xl">
            <p className="text-lg">ร้านรอการตรวจสอบ</p>
            <div>
              {approvedVendorsList.map((el) => (
                <div
                  key={el.id}
                  className="mobile: col-start-2 col-span-4 bg-primaryWhite shadow-lg shadow-gray20 rounded-lg py-2 px-6"
                >
                  <div className="mobile: text-gray-700 font-semibold py-2">
                    {el.shopName}
                  </div>
                  <div className="mobile: gap-2 flex justify-start">
                    <Link to={`admin/restaurant/details/${el.id}`}>
                      <RiEyeFill
                        className="mobile: text-primary-500 w-4 h-4 cursor-pointer"
                        onClick={() => {
                          hdl_view_pending_detail(el.id);
                        }}
                      />
                    </Link>
                    <RiMapPinFill className=" mobile:  w-4 h-4 text-primary-500 cursor-pointer" />
                    <div className="mobile: font-bold text-xs text-gray-700 ">
                      {el.address}
                    </div>
                  </div>
                  <div className="mobile: flex justify-end gap-6 py-2 px-6">
                    <Link to={`/admin/restaurant/details/${el.id}`}>
                      <RiEyeFill className="mobile: text-primary-500 w-4 h-4 cursor-pointer" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
