import { useAuth } from "../../hook/useAuthContext";
import { getAccessToken } from "../../utils/localStorage";
import { ADMIN, USER, VENDOR } from "../../constant/role";
import UserDetail from "../user/userDetail";
import VendorDetail from "../vendor/vendorDetail";
import UserEditForm from "./userEditForm";
import { RxExit } from "react-icons/rx";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
export default function UserDetailModal() {

  const navigate = useNavigate()
  if (getAccessToken()) {
    const {
      authUser: { role },
      authUser,
      userEditOpen,
      setUserDetailOpen,
      hdl_logout,
    } = useAuth();
    if (role == "admin" || role == "user") {
      return (
        <>
          <div className="z-40 fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60 flex justify-center items-center">
              {userEditOpen ? (
                <UserEditForm />
              ) : (
                <UserDetail
                  name={authUser.username}
                  picture={authUser.profileImage}
                />
              )}
            </div>
        </>
      );
    }
    if (!authUser.Shops) {
      return (
        <>
          <div className=" px-4 absolute inset-0 h-screen  bg-black opacity-50 "></div>
          <div className=" bg-white  h-fit p-4   absolute inset-0 mt-20 desktop:mt-4 desktop:h-[15rem] desktop:top-16 w-fit m-auto border border-solid desktop:max-w-[1024px]">
            <h1>Your first step starts here!</h1>

            <div className=" flex flex-col items-center gap-4">

              <button className="mobile" onClick={() => {
                setUserDetailOpen(false)
                navigate('/vendor/application')
              }}>
                <div className="mobile: bg-black w-[160px] h-[30px] text-white rounded-[40px]  hover:text-white border border-gray-800 hover:bg-gray-700 pt-1 flex justify-center gap-2 ">
                  apply now
                  <LiaGreaterThanSolid className=" mt-[2.5px]" />
                </div>
              </button>
              <div className="px-6 py-3 bg-white border border-solid-black rounded-xl justify-center items-center gap-8 inline-flex hover:cursor-pointer " onClick={() => hdl_logout()}>
                <div className="mobile:w-8 h-8 relative">
                  <RxExit className="mobile:w-[35px] h-[35px]" />


                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex " >
                  <div className="  text-black text-base font-bold font-['Nunito Sans']">
                    Log out
                  </div>
                </div>
              </div>

            </div>
          </div>
        </>
      )

    }
    if (authUser.Shops.length > 0) {
      return (
        <>
          <div className=" px-4 absolute inset-0 h-screen  bg-black opacity-50 "></div>

          {userEditOpen ? (
            <UserEditForm />
          ) : (
            <VendorDetail
              name={authUser.Shops[0].shopName}
              picture={authUser.Shops[0].shopPicture}
            />
          )}

        </>
      );
    }
    return (
      <>
        <div className="z-40 fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className=" bg-white rounded-xl p-14 pt-20 flex flex-col gap-10 relative justify-center">

            <div className=" flex flex-col items-center gap-4">
              <button className="mobile" onClick={() => {
                setUserDetailOpen(false)
                navigate('/vendor/application')
              }}>
                <div className="mobile: bg-black w-[160px] h-[30px] text-white rounded-[40px]  hover:text-white border border-gray-800 hover:bg-gray-700 pt-1 flex justify-center gap-2 ">
                  apply now
                  <LiaGreaterThanSolid className=" mt-[2.5px]" />
                </div>
              </button>
              <div className="px-6 py-3 bg-white border border-solid-black rounded-xl justify-center items-center gap-8 inline-flex hover:cursor-pointer " onClick={() => hdl_logout()}>
                <div className="mobile:w-8 h-8 relative">
                  <RxExit className="mobile:w-[35px] h-[35px]" />


                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex " >
                  <div className="  text-black text-base font-bold font-['Nunito Sans']">
                    Log out
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}
