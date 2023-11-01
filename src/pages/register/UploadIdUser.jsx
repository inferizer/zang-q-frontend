import React from "react";

export default function UploadIdUser() {
  return (
    <>
      <div className="mobile: justify-center items-center h-screen flex">
        <div className="mobile: w-[390px] h-[662px] py-8 flex-col justify-start items-center gap-11 inline-flex">
          <div className="mobile: w-[280px] justify-center items-center gap-8 inline-flex">
            <div className="mobile: grow shrink basis-0 p-4 rounded-2xl border border-red-500 flex-col justify-center items-center gap-3 inline-flex">
              <div className="mobile: w-14 h-14 relative">
                <svg
                  className="mobile"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.0002 9.33337C30.4755 9.33337 32.8495 10.3167 34.5998 12.067C36.3502 13.8174 37.3335 16.1914 37.3335 18.6667C37.3335 21.1421 36.3502 23.516 34.5998 25.2664C32.8495 27.0167 30.4755 28 28.0002 28C25.5248 28 23.1508 27.0167 21.4005 25.2664C19.6502 23.516 18.6668 21.1421 18.6668 18.6667C18.6668 16.1914 19.6502 13.8174 21.4005 12.067C23.1508 10.3167 25.5248 9.33337 28.0002 9.33337ZM28.0002 32.6667C38.3135 32.6667 46.6668 36.8434 46.6668 42V46.6667H9.3335V42C9.3335 36.8434 17.6868 32.6667 28.0002 32.6667Z"
                    fill="#EB544D"
                  />
                </svg>
              </div>
              <div className="mobile: text-red-500 text-base font-medium">
                บุคคล
              </div>
            </div>
            <div className="mobile: grow shrink basis-0 p-4 rounded-2xl border border-neutral-400 flex-col justify-center items-center gap-3 inline-flex">
              <div className="mobile: w-14 h-14 relative">
                <svg
                  className="mobile"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 12.8334C30.1659 12.8334 32.2432 13.6938 33.7747 15.2253C35.3063 16.7569 36.1667 18.8341 36.1667 21C36.1667 23.166 35.3063 25.2432 33.7747 26.7747C32.2432 28.3063 30.1659 29.1667 28 29.1667C25.8341 29.1667 23.7568 28.3063 22.2253 26.7747C20.6937 25.2432 19.8333 23.166 19.8333 21C19.8333 18.8341 20.6937 16.7569 22.2253 15.2253C23.7568 13.6938 25.8341 12.8334 28 12.8334ZM11.6667 18.6667C12.9733 18.6667 14.1867 19.0167 15.2367 19.6467C14.8867 22.9834 15.8667 26.2967 17.8733 28.8867C16.7067 31.1267 14.3733 32.6667 11.6667 32.6667C9.81015 32.6667 8.02967 31.9292 6.71692 30.6165C5.40416 29.3037 4.66667 27.5232 4.66667 25.6667C4.66667 23.8102 5.40416 22.0297 6.71692 20.717C8.02967 19.4042 9.81015 18.6667 11.6667 18.6667ZM44.3333 18.6667C46.1898 18.6667 47.9703 19.4042 49.2831 20.717C50.5958 22.0297 51.3333 23.8102 51.3333 25.6667C51.3333 27.5232 50.5958 29.3037 49.2831 30.6165C47.9703 31.9292 46.1898 32.6667 44.3333 32.6667C41.6267 32.6667 39.2933 31.1267 38.1267 28.8867C40.161 26.2604 41.1053 22.9512 40.7633 19.6467C41.8133 19.0167 43.0267 18.6667 44.3333 18.6667ZM12.8333 42.5834C12.8333 37.7534 19.6233 33.8334 28 33.8334C36.3767 33.8334 43.1667 37.7534 43.1667 42.5834V46.6667H12.8333V42.5834ZM0 46.6667V43.1667C0 39.9234 4.41 37.1934 10.3833 36.4C9.00667 37.9867 8.16667 40.18 8.16667 42.5834V46.6667H0ZM56 46.6667H47.8333V42.5834C47.8333 40.18 46.9933 37.9867 45.6167 36.4C51.59 37.1934 56 39.9234 56 43.1667V46.6667Z"
                    fill="#AAAAAA"
                  />
                </svg>
              </div>
              <div className="mobile: text-neutral-400 text-base font-medium">
                นิติบุคคล
              </div>
            </div>
          </div>
          <div className="mobile: flex flex-col gap-4">
            <form className="mobile">
              <label className="mobile" for="fname"></label>
              <input
                className="mobile: w-[358px] h-[42px] p-2.5 rounded-lg border border-neutral-400 justify-center items-center gap-2.5 inline-flex"
                placeholder="ชื่อจริง"
                type="text"
                id="loginUser"
                name="loginUser"
              />
              <br className="mobile" />

              <label className="mobile" for="lname"></label>
              <br className="mobile" />
              <input
                className="mobile: w-[358px] h-[42px] p-2.5 rounded-lg border border-neutral-400 justify-center items-center gap-2.5 inline-flex"
                placeholder="นามสกุล"
                type="text"
                id="passwordUser"
                name="passwordUser"
              />
              <br className="mobile" />

              <label className="mobile" for="fname"></label>
              <br className="mobile" />
              <input
                className="mobile: w-[358px] h-[42px] p-2.5 rounded-lg border border-neutral-400 justify-center items-center gap-2.5 inline-flex"
                placeholder="เลขบัตรประชาชน"
                type="text"
                id="passwordidUser"
                name="passwordidUser"
              />
            </form>
            <div className="mobile:self-stretch p-2.5 w-[350px] mx-auto my-auto bg-zinc-500 rounded-lg justify-center items-center gap-2.5 inline-flex hover:text-white  hover:bg-zinc-600">
              <div className="mobile">
                <svg
                  className="mobile"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="mobile">
                <button className="mobile:text-white text-sm font-normal ">
                  อัปโหลดสำเนาบัตรประชาชน
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="mobile: mt-[20px] ml-[9px] w-[350px] flex justify-center items-center focus:outline-none text-white bg-[#56CAAE] hover:bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
