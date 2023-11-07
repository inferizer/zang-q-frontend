import { useAuth } from "../../hook/useAuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../../component/input";
export default function VendorRegistor() {
  const { hdl_vendor_register_submit, hdl_input } = useAuth();
  const navigate = useNavigate();

  const inputTag = [
    { name: "email" },
    { name: "password" },
    { name: "confirmPassword" },
  ];

  const hdl_submit = async (e) => {
    e.preventDefault();
    await hdl_vendor_register_submit()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <div className="mobile">
        <header className="mobile">
          <div className="mobile:flex justify-center items-center h-screen flex">
            <form className="mobile" onSubmit={hdl_submit}>
              <h1 className="mobile:mb-[25px]">
                <b className="mobile: text-[25px]">Register form</b>
              </h1>
              <div className="mobile: border-[#BDBDBD] flex flex-col gap-2 items-start">
                <label className="mobile" for="email">
                  email
                </label>
                <input
                  onChange={hdl_input}
                  className={`mobile: w-[367px] mobile: border-solid border-2 mb-2 border-[#BDBDBD]`}
                  placeholder="email@gmail.com:"
                  type="text"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mobile: border-[#BDBDBD] flex flex-col gap-2 items-start">
                <label className="mobile" for="password">
                  password
                </label>
                <input
                  onChange={hdl_input}
                  className={`mobile: w-[367px] mobile: border-solid border-2 mb-2 border-[#BDBDBD]`}
                  type="password"
                  placeholder="EnterPassword:"
                  name="password"
                  required
                />
              </div>

              <div className="mobile: border-[#BDBDBD] flex flex-col gap-2 items-start">
                <label className="mobile" for="email">
                  confirmPassword
                </label>
                <input
                  onChange={hdl_input}
                  className={`mobile: w-[367px] mobile: border-solid border-2 mb-2 border-[#BDBDBD]`}
                  type="password"
                  placeholder="confirmPassword:"
                  name="confirmPassword"
                  required
                />
              </div>
              <button
                onClick={hdl_submit}
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
