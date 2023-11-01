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
            <form className="mobile">
              <h1 className="mobile:mb-[25px]">
                <b className="mobile">register form</b>
              </h1>
              <div className="mobile:border-solid border-2 mb-4 border-[#BDBDBD]">
                <label className="mobile" for="email"></label>
                <input
                  onChange={hdl_input}
                  className="mobile:w-[367px]"
                  placeholder="email@gmail.com"
                  type="text"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mobile: border-solid border-2 border-[#BDBDBD] ">
                <label className="mobile" for="password"></label>
                <input
                  onChange={hdl_input}
                  className="mobile: w-[367px]"
                  type="password"
                  placeholder="EnterPassword"
                  name="password"
                  required
                />
              </div>
              <div className="mobile: mt-[15px]">
                <div className="mobile: border-solid border-2 border-[#BDBDBD] ">
                  <label className="mobile" for="confirmPassword"></label>
                  <input
                    onChange={hdl_input}
                    className="mobile: w-[367px]"
                    type="password"
                    placeholder="ConfirmPassword"
                    name="confirmPassword"
                    required
                  />
                </div>
              </div>
              <button
                onClick={hdl_vendor_register_submit}
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
