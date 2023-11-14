import React from "react";
const option = [
  { id: "1", name: "buffet", value: "buffet" },
  { id: "2", name: "thai", value: "thai" },
  { id: "3", name: "japan", value: "japan" },
  { id: "4", name: "chinese", value: "chinese" },
  { id: "5", name: "india", value: "india" },
];
export default function MapStore() {
  return (
    <div>
      <div className="mobile: flex justify-center items-center h-screen mt-[500px]">
        <form className="mobile">
          <div className="mobile: w-[390px] py-8 flex-col justify-start items-center gap-11 inline-flex">
            <div className="mobile: px-4 py-3 flex-col justify-start items-start gap-6 flex">
              <div className="mobile: w-[280px] justify-center items-center gap-8 inline-flex mx-auto my-auto">
                <div className="mobile: grow shrink basis-0 p-4 rounded-2xl border border-neutral-400 flex-col justify-center items-center gap-3 inline-flex">
                  <div className="mobile: w-14 h-14 relative ">
                    <svg
                      className="mobile"
                      width="57"
                      height="56"
                      viewBox="0 0 57 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7926 9.33337C31.268 9.33337 33.642 10.3167 35.3923 12.067C37.1426 13.8174 38.126 16.1914 38.126 18.6667C38.126 21.1421 37.1426 23.516 35.3923 25.2664C33.642 27.0167 31.268 28 28.7926 28C26.3173 28 23.9433 27.0167 22.193 25.2664C20.4426 23.516 19.4593 21.1421 19.4593 18.6667C19.4593 16.1914 20.4426 13.8174 22.193 12.067C23.9433 10.3167 26.3173 9.33337 28.7926 9.33337ZM28.7926 32.6667C39.106 32.6667 47.4593 36.8434 47.4593 42V46.6667H10.126V42C10.126 36.8434 18.4793 32.6667 28.7926 32.6667Z"
                        fill="#AAAAAA"
                      />
                    </svg>
                  </div>
                  <div className="mobile: text-neutral-400 text-base font-medium">
                    บุคคล
                  </div>
                </div>
                <div className="mobile: grow shrink basis-0 p-4 rounded-2xl border border-red-500 flex-col justify-center items-center gap-3 inline-flex">
                  <div className="mobile: w-14 h-14 relative">
                    <svg
                      className="mobile"
                      width="57"
                      height="56"
                      viewBox="0 0 57 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_122_18007)">
                        <path
                          d="M28.793 12.8334C30.9589 12.8334 33.0361 13.6938 34.5677 15.2253C36.0992 16.7569 36.9596 18.8341 36.9596 21C36.9596 23.166 36.0992 25.2432 34.5677 26.7747C33.0361 28.3063 30.9589 29.1667 28.793 29.1667C26.627 29.1667 24.5498 28.3063 23.0183 26.7747C21.4867 25.2432 20.6263 23.166 20.6263 21C20.6263 18.8341 21.4867 16.7569 23.0183 15.2253C24.5498 13.6938 26.627 12.8334 28.793 12.8334ZM12.4596 18.6667C13.7663 18.6667 14.9796 19.0167 16.0296 19.6467C15.6796 22.9834 16.6596 26.2967 18.6663 28.8867C17.4996 31.1267 15.1663 32.6667 12.4596 32.6667C10.6031 32.6667 8.82264 31.9292 7.50989 30.6165C6.19713 29.3037 5.45964 27.5232 5.45964 25.6667C5.45964 23.8102 6.19713 22.0297 7.50989 20.717C8.82264 19.4042 10.6031 18.6667 12.4596 18.6667ZM45.1263 18.6667C46.9828 18.6667 48.7633 19.4042 50.076 20.717C51.3888 22.0297 52.1263 23.8102 52.1263 25.6667C52.1263 27.5232 51.3888 29.3037 50.076 30.6165C48.7633 31.9292 46.9828 32.6667 45.1263 32.6667C42.4196 32.6667 40.0863 31.1267 38.9196 28.8867C40.954 26.2604 41.8983 22.9512 41.5563 19.6467C42.6063 19.0167 43.8196 18.6667 45.1263 18.6667ZM13.6263 42.5834C13.6263 37.7534 20.4163 33.8334 28.793 33.8334C37.1696 33.8334 43.9596 37.7534 43.9596 42.5834V46.6667H13.6263V42.5834ZM0.792969 46.6667V43.1667C0.792969 39.9234 5.20297 37.1934 11.1763 36.4C9.79963 37.9867 8.95963 40.18 8.95963 42.5834V46.6667H0.792969ZM56.793 46.6667H48.6263V42.5834C48.6263 40.18 47.7863 37.9867 46.4096 36.4C52.383 37.1934 56.793 39.9234 56.793 43.1667V46.6667Z"
                          fill="#EB544D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_122_18007">
                          <rect
                            width="56"
                            height="56"
                            fill="white"
                            transform="translate(0.792969)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="mobile: text-red-500 text-base font-medium">
                    นิติบุคคล
                  </div>
                </div>
              </div>
              <form className="mobile">
                <label className="mobile" for="fname" />
                <br className="mobile" />
                <input
                  className="mobile: w-[358px] h-[42px] p-2.5 rounded-lg border border-neutral-400 justify-center items-center gap-2.5 inline-flex"
                  placeholder="ชื่อจริง"
                  type="text"
                  id="name"
                  name="name"
                />
                <br className="mobile" />
                <label className="mobile" for="lname"></label>
                <br className="mobile" />
                <input
                  className="mobile: w-[358px] h-[42px] p-2.5 rounded-lg border border-neutral-400 justify-center items-center gap-2.5 inline-flex"
                  placeholder="นามสกุล"
                  type="text"
                  id="lastName"
                  name="lastName"
                />
                <br className="mobile" />
                <label className="mobile" for="fname"></label>
                <br className="mobile" />
                <input
                  className="mobile: w-[358px] h-[42px] p-2.5 rounded-lg border border-neutral-400 justify-center items-center gap-2.5 inline-flex"
                  placeholder="เลขที่บัตรประชาชน"
                  type="text"
                  id="passport"
                  name="passport"
                />
              </form>
              <div className="mobile: w-[100px] h-[100px] bg-zinc-300"></div>
              <div className="mobile: self-stretch p-2.5 bg-zinc-500 rounded-lg justify-center items-center gap-2.5 inline-flex hover:text-white  hover:bg-zinc-600">
                <div className="mobile: w-6 h-6 relative">
                  <svg
                    className="mobile"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.793 16V7.85L9.19297 10.45L7.79297 9L12.793 4L17.793 9L16.393 10.45L13.793 7.85V16H11.793ZM6.79297 20C6.24297 20 5.77197 19.804 5.37997 19.412C4.98797 19.02 4.7923 18.5493 4.79297 18V15H6.79297V18H18.793V15H20.793V18C20.793 18.55 20.597 19.021 20.205 19.413C19.813 19.805 19.3423 20.0007 18.793 20H6.79297Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <button className="mobile: text-white text-sm font-normal">
                  อัปโหลดสำเนาบัตรประชาชน
                </button>
              </div>

              <form className="mobile">
                <label className="mobile" for="fname"></label>
                <br className="mobile" />
                <input
                  className="mobile: w-[358px] h-[42px] p-2.5 rounded-lg border border-neutral-400 justify-center items-center gap-2.5 inline-flex"
                  placeholder="เลขที่จดทะเบียนนิติบุคคล"
                  type="text"
                  id="numberPasswordPeople"
                  name="numberPasswordPeople"
                />
              </form>
              <div className="mobile: w-[100px] h-[100px] bg-zinc-300"></div>
              <div className="mobile: self-stretch p-2.5 bg-zinc-500 rounded-lg justify-center items-center gap-2.5 inline-flex hover:text-white  hover:bg-zinc-600">
                <div className="mobile: w-6 h-6 relative">
                  <svg
                    className="mobile"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.793 16V7.85L9.19297 10.45L7.79297 9L12.793 4L17.793 9L16.393 10.45L13.793 7.85V16H11.793ZM6.79297 20C6.24297 20 5.77197 19.804 5.37997 19.412C4.98797 19.02 4.7923 18.5493 4.79297 18V15H6.79297V18H18.793V15H20.793V18C20.793 18.55 20.597 19.021 20.205 19.413C19.813 19.805 19.3423 20.0007 18.793 20H6.79297Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <button className="mobile: text-white text-sm font-normal">
                  อัปโหลดสำเนาทะเบียนนิติบุคคล
                </button>
              </div>
            </div>
          </div>
          <br className="mobile" />
          <div className="mobile: flex flex-col ml-[16px]">
            <label className="mobile" for="fname"></label>
            <input
              className="mobile: w-[358px] h-[42px] p-2.5 rounded-lg border border-neutral-400 justify-center items-center gap-2.5 inline-flex"
              placeholder="ชื่อร้าน"
              type="text"
              id="nameStore"
              name="nameStore"
            />

            <label className="mobile" for="lname"></label>
            <br className="mobile" />
            <input
              className="mobile: w-[358px] h-[42px] p-2.5 rounded-lg border border-neutral-400 justify-center items-center gap-2.5 inline-flex"
              placeholder="เบอร์โทรร้าน"
              type="text"
              id="telephoneStore"
              name="telephoneStore"
            />

            <label className="mobile" for="fname"></label>
            <br className="mobile" />
            <select className="mobile: w-[358px] h-[42px] p-2.5 rounded-lg border border-neutral-400 justify-center items-center gap-2.5 inline-flex">
              {option.map((el, id) => {
                return (
                  <option key={el.id} value={el.value}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </div>
          <br className="mobile" />
          <br className="mobile" />
          <div className="mobile">
            <h1 class="mobile: text-center text-red-500 text-2xl font-bold mb-[25px]">
              เรากำลังตรวจสอบข้อมูลของคุณ
            </h1>

            <img
              className="mobile: mx-auto my-auto w-[279px] h-[254px]"
              src="https://via.placeholder.com/279x254"
            />
          </div>

          <br className="mobile" />
          <br className="mobile" />
          <div className="mobile: ml-[16px]">
            <label className="mobile" for="appt">
              เวลาปิดร้าน
            </label>
            <br className="mobile" />
            <input
              className="mobile"
              type="time"
              id="openstore"
              name="openstore"
            />
            <br className="mobile" />
            <br className="mobile" />
            <label className="mobile" for="appt">
              เวลาเปิดร้าน
            </label>
            <br className="mobile" />
            <input
              className="mobile"
              type="time"
              id="openstore"
              name="openstore"
            />
            <br className="mobile" />
            <br className="mobile" />
            <br className="mobile" />
          </div>
          <button
            type="button"
            className="mobile: mx-auto my-auto ml-[85px] w-[217px] flex justify-center items-center focus:outline-none text-white bg-[#56CAAE] hover:bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
