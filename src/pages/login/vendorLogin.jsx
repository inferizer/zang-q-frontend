import Input from "../../component/input";
import { useAuth } from "../../hook/useAuthContext";
export default function VendorLogin() {
  const { hdl_input, hdl_vendor_login_submit } = useAuth();

  const inputTag = [
    { id: 4, name: "email" },
    { id: 2, name: "password" },
  ];
  return (
    <>
      <form
        key="1"
        className=" flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          hdl_vendor_login_submit();
        }}
      >
        {inputTag.map((el) => {
          return (
            <>
              <div className="mobile">
                <header className="mobile">
                  <div className="mobile:  justify-center items-center h-screen flex">
                    <form className="mobile">
                      <h1 className="mobile: mb-[25px]">
                        <b className="mobile: text-[25px]">Saved</b>
                      </h1>
                      <div className="mobile: border-[#BDBDBD] flex flex-col gap-2 items-start">
                        <label className="mobile" for="email">
                          email
                        </label>
                        <input
                          onChange={hdl_input}
                          className={`mobile: w-[367px] mobile: border-solid border-2 mb-2 border-[#BDBDBD]`}
                          placeholder="email"
                          type="text"
                          id="email"
                          name="email"
                        />
                      </div>
                      <div className="mobile: border-[#BDBDBD] flex flex-col gap-2 items-start ">
                        <label className="mobile" for="password">
                          Enter Password
                        </label>
                        <input
                          onChange={hdl_input}
                          className={`mobile: w-[367px] mobile: border-solid border-2 mb-2 border-[#BDBDBD]`}
                          type="password"
                          placeholder="Enter Password:"
                          name="password"
                          required
                        />
                        {/* mobile:mt-[25px] w-[350px] flex justify-center items-center */}
                      </div>
                      <button
                        onClick={hdl_vendor_login_submit}
                        type="button"
                        className="mobile: mt-[25px] ml-[9px] w-[350px] flex justify-center items-center focus:outline-none text-white bg-[#56CAAE] hover:bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                      >
                        Continue
                      </button>
                      <div className="mobile: inline-flex items-center justify-center w-full">
                        <hr className="mobile: w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
                        <span className="mobile: absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                          or
                        </span>
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
            </>
          );
        })}
      </form>
    </>
  );
}
