import { useAuth } from "../../hook/useAuthContext";
import { getAccessToken } from "../../utils/localStorage";
import { ADMIN, USER, VENDOR } from "../../constant/role";
import UserDetail from "../user/userDetail";
import { useState } from "react";
import UserEditForm from "./userEditForm";
export default function UserDetailModal() {
  if (getAccessToken()) {
    const {
      authUser: { role },
      authUser,
    } = useAuth();

    return (
      <div>

        <div className=" px-4 absolute inset-0 top-24 bg-white opacity-30 "></div>
        <div>
          <div className=" absolute  inset-0 top-24 max-w-[800px] m-auto desktop:max-w-[1024px]">
            {role == ADMIN && <UserDetail name={authUser.username} />}
            {role == USER && <UserDetail name={authUser.username} />}
            {role == VENDOR && <UserDetail />}
          </div>
        </div>
      </div>
    
    );
  }
}
