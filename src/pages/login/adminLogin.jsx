import React , {useState} from "react";
import { useAuth } from "../../hook/useAuthContext";
import Input from "../../component/input";
export default function AdminLogin() {
  const { hdl_input, hdl_admin_login_submit,input } = useAuth();
  const hdl_submit = async (e) => {
    e.preventDefault();
    await hdl_admin_login_submit()

    .catch((err) => {
      console.log(err)
  })
  } 
    return (
            <div className="mobile">
              <header className="mobile">
                <div className="mobile:justify-center items-center h-screen flex">
                  <form className="mobile" onSubmit={()=>{hdl_submit}}>
                    <h1 className="mobile:mb-[25px]">
                      <b className="mobile:text-[25px]">Admin</b>
                    </h1>
                    <div className="mobile:border-[#BDBDBD] flex flex-col gap-2 items-start">
                      <label className="mobile" for="email">
                        username
                      </label>
                      <Input
                        onChange={hdl_input}
                        className={`mobile: w-[367px] mobile: border-solid border-2 mb-1 border-[#BDBDBD]
                        `}
                        placeholder="username"
                        type="text"
                        id="username"
                        name="username"
                      />
                  
                    </div>
                    <div className="mobile: border-[#BDBDBD] flex flex-col gap-2 items-start ">
                      <label className="mobile" for="password">
                        Enter Password
                      </label>
                      <Input
                        onChange={hdl_input}
                        className={`mobile: w-[367px] mobile: border-solid border-2 mb-1 border-[#BDBDBD]`}
                        type="password"
                        placeholder="Enter Password:"
                        name="password"
                        required
                      />
                  
                    </div>
                    <button
                      type="button"
                      className="mobile: mt-[25px] ml-[9px] w-[350px] flex justify-center items-center focus:outline-none text-white bg-[#56CAAE] hover:bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                      onClick={hdl_admin_login_submit}
                    >
                      Continue
                    </button>
                    <div className="mobile: inline-flex items-center justify-center w-full">
                      <hr className="mobile: w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
                      <span className="mobile: absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                      </span>
                    </div>
                  </form>
                </div>
              </header>
            </div>
          );

}
