import { useAuth } from "../../hook/useAuthContext";
import Input from "../../component/input";
import iconline from "../../public/illus/iconline.svg";
import icongoogle from "../../public/illus/icongoogle.svg";
import { useState } from "react";
// import { toast } from "react-toastify";

export default function UserLogin() {
  // const [input, setInput] = useState({
  //   emailOrMobile: '',
  //   password: ''
  // });

  const { hdl_input, hdl_user_login_submit } = useAuth();

  return (
    <form
      key="1"
      className=" flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        hdl_user_login_submit();
      }}
    >
      <div className="mobile">
        <header className="mobile">
          <div className="mobile:  justify-center items-center h-screen flex">
            <form className="mobile" onSubmit={hdl_user_login_submit}>
              <h1 className="mobile: mb-[25px]">
                <b className="mobile: text-[25px]">Saved</b>
              </h1>
              <div className="mobile: border-[#BDBDBD] flex flex-col gap-2 items-start">
                <label className="mobile" htmlFor="emailOrMobile">
                  emailOrMobile
                </label>
                <input
                  onChange={hdl_input}
                  className={`mobile: w-[367px] mobile: border-solid border-2 mb-2 border-[#BDBDBD]`}
                  placeholder="emailOrMobile:"
                  type="text"
                  id="emailOrMobile"
                  name="emailOrMobile"
                />
              </div>
              <div className="mobile: border-[#BDBDBD] flex flex-col gap-2 items-start ">
                <label className="mobile" htmlFor="password">
                  password
                </label>
                <input
                  onChange={hdl_input}
                  className={`mobile: w-[367px] mobile: border-solid border-2 mb-2 border-[#BDBDBD]`}
                  type="password"
                  placeholder="password:"
                  name="password"
                  required
                />
                {/* mobile:mt-[25px] w-[350px] flex justify-center items-center */}
              </div>
              <button
                onClick={hdl_user_login_submit}
                type="button"
                className="mobile: mt-[25px] ml-[9px] w-[350px] flex justify-center items-center focus:outline-none text-white bg-[#56CA76] hover:bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
              >
                Continue
              </button>
              <div className="mobile: inline-flex items-center justify-center w-full">
                <hr className="mobile: w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
                <span className="mobile: absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                  or
                </span>
              </div>

              <div className="mobile: pl-[10px]">
                <button
                  type="button"
                  className="mobile: w-[350px]  py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <div className="mobile:  pr-[90px] flex justify-center items-center">
                    <img
                      className="mobile: inline mr-[50px]"
                      src={iconline}
                      alt=""
                    />
                    <div>Continue with Line</div>
                  </div>
                </button>
                <br className="mobile" />
                <br className="mobile" />
              </div>

              <div className="mobile: pl-[10px]">
                <button
                  type="button"
                  className="mobile: w-[350px]  py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <div className="mobile: pr-[73px] flex justify-center items-center">
                    <img
                      className="mobile: inline w-[45px] h-[45px] mr-[50px]"
                      src={icongoogle}
                      alt=""
                    />
                    <div>Continue with Google </div>
                  </div>
                </button>
                <br className="mobile" />
                <br className="mobile" />
              </div>
              <div className="mobile: text-center">
                <span className="mobile">Don't have an account?</span>
                <span className="mobile: ml-4">
                  <u className="mobile">Sign up</u>
                </span>
              </div>
            </form>
          </div>
        </header>
      </div>
    </form>
  );
}
