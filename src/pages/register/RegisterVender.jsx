import React from "react";

export default function RegisterVender() {
  return (
    <>
      <div className="mobile">
        <header className="mobile">
          <div className="mobile:flex justify-center items-center h-screen flex">
            <form className="mobile">
              <h1 className="mobile:mb-[25px]">
                <b className="mobile">register form</b>
              </h1>
              <div className="mobile:border-solid border-2 mb-4 border-[#BDBDBD]">
                <label className="mobile" for="login"></label>
                <input
                  className="mobile:w-[367px]"
                  placeholder="teenoi_chulapark@gmail.com"
                  type="text"
                  id="login"
                  name="login"
                />
              </div>
              <div className="mobile: border-solid border-2 border-[#BDBDBD] ">
                <label className="mobile" for="psw"></label>
                <input
                  className="mobile: w-[367px]"
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />
              </div>
              <button
                type="button"
                className="mobile: mt-[300px] ml-[9px] w-[350px] flex justify-center items-center focus:outline-none text-white bg-[#56CAAE] hover:bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
              >
                Continue
              </button>
            </form>
          </div>
        </header>
      </div>
    </>
  );
}
