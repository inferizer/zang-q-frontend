import { useAuth } from "../../hook/useAuthContext";
import { getAccessToken } from "../../utils/localStorage";
import { ADMIN, USER, VENDOR } from "../../constant/role";
import UserDetail from "../user/userDetail";
import UserEditForm from "./userEditForm";
export default function UserDetailModal() {
  if (getAccessToken()) {
    const {
      authUser: { role },
      authUser,
      userEditOpen,
    } = useAuth();

    if(role == "admin" || role == "user"){
      return(

        <div >
        <div className=" px-4 absolute inset-0 h-screen  bg-black opacity-50 "></div>
        <div className="">
          <div className=" bg-white   absolute inset-0 mt-20 desktop:mt-4 desktop:h-[15rem] desktop:top-20 w-fit m-auto border border-solid desktop:max-w-[1024px]">
          {
            userEditOpen?<UserEditForm/>:
            <UserDetail name={authUser.username} />
            }
          </div>
        </div>
      </div>
            ) 

    }

    return (
      <div >
        <div className=" px-4 absolute inset-0 h-screen bg-black opacity-50 "></div>
        <div className="">
          <div className=" bg-white   absolute inset-0 mt-20 desktop:mt-4 desktop:h-[15rem] desktop:top-20 w-fit m-auto border border-solid desktop:max-w-[1024px]">
          {
            userEditOpen?<UserEditForm/>:
            <UserDetail  />
            }
          </div>
        </div>
      </div>
    
    );
  }
}
