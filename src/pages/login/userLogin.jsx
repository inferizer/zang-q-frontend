import { useAuth } from "../../hook/useAuthContext";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import Input from "../../component/input";

// import Input from "../../component/input";

import LineLoginButton from "../../component/LineLoginButton";
import liff from "@line/liff";
import icongoogle from "../../assets/images/icongoogle.svg";
import Joi from "joi";
import { useState } from "react";
import InputErrorMessage from "../../pages/register/InputErrorMessage";

export default function UserLogin() {
  const [error, setError] = useState({});
  const UserLoginSchema = Joi.object({
    emailOrMobile: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { hdl_input, hdl_user_login_submit, SuccessGoogle, failGoogle, input } =
    useAuth();

  // const [inputError,setInputError] = useState({})
  const navaigate = useNavigate();

  const validateLogin = (input) => {
    const { error } = UserLoginSchema.validate(input, { abortEarly: false });
    console.log(error);
    if (error) {
      const result = error.details.reduce((acc, el) => {
        const { message, path } = el;
        acc[path[0]] = message;
        return acc;
      }, {});
      return result;
    }
  };

  liff.init({ liffId: "2001390459-y9GRwgp7" });
  const clientId =
    "25769644481-it9q9s3alpf30c274qlqgepm7tppqr07.apps.googleusercontent.com";

  const hdl_login_submit = async (e) => {
    e.preventDefault();
    const validationError = validateLogin(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    await hdl_user_login_submit().catch((err) => {
      console.log(err);
    });
  };
  return (
    <>
      <section className="w-screen px-4">
        <header className="max-w-[800px] m-auto desktop:max-w-[1024px]">
          <div className="justify-center items-center h-screen flex">
            <form className="mobile:lg" onSubmit={hdl_login_submit}>
              <h1 className="mobile:mb-[25px] text-center">
                <b className="mobile:text-[25px]">Login</b>
              </h1>
              <div>
                <div className="mobile: border-[#BDBDBD] flex flex-col gap-2">
                  <div className="mobile: flex flex-col gap-2 rounded-md mx-auto">
                    <Input
                      onChange={hdl_input}
                      placeholder="Email or Mobile:"
                      type="text"
                      id="emailOrMobile"
                      name="emailOrMobile"
                      value={input.emailOrMobile}
                      error={error.emailOrMobile}
                    />
                    {error.emailOrMobile && (
                      <InputErrorMessage message={error.emailOrMobile} />
                    )}

                    <Input
                      onChange={hdl_input}
                      type="password"
                      placeholder="password:"
                      name="password"
                      required
                      value={input.password}
                      error={error.password}
                    />
                    {error.password && (
                      <InputErrorMessage message={error.password} />
                    )}
                  </div>
                </div>
              </div>
              <button
                className="mobile:mt-[25px] ml-[9px] w-[358px] flex justify-center 
                items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500
                font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Continue
              </button>
              <div className="mobile:inline-flex items-center justify-center w-full">
                <hr className="mobile:w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-600" />
                <span className="mobile:absolute px-3 font-medium text-gray-600-translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-500">
                  or
                </span>
              </div>

              <div>
                <LineLoginButton />
              </div>

              <div className="mobile: pl-[10px]">
                <div>
                  <GoogleLogin
                    clientId={clientId}
                    buttonText="Continue with Google"
                    onSuccess={SuccessGoogle}
                    onFailure={failGoogle}
                    cookiePolicy="single_host_origin"
                    isSignedIn={false}
                    type="button"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="mobile:w-[350px]  py-2.5 px-5  text-sm font-medium  text-gray60 focus:outline-none bg-primaryWhite rounded-lg border border-gray20 hover:bg-gray10 hover:text-blue60 focus:z-10 focus:ring-4 focus:ring-gray20 dark:focus:ring-gray60 dark:bg-gray60 dark:text-gray40 dark:border-gray50 dark:hover:text-primaryWhite dark:hover:bg-gray60"
                      >
                        <div className="mobile: pr-[73px]">
                          <img
                            className="mobile: inline w-[45px] h-[45px] mr-[50px]"
                            src={icongoogle}
                            alt=""
                          />
                          Continue with Google
                        </div>
                      </button>
                    )}
                  />
                </div>

                <br className="mobile" />
                <br className="mobile" />
              </div>
              <div className="mobile:text-center">
                <span className="mobile">Don't have an account?</span>
                <span className="mobile:ml-4">
                  <button
                    className="mobile"
                    onClick={() => {
                      navaigate("/register/user");
                    }}
                  >
                    Sign up
                  </button>
                </span>
              </div>
            </form>
          </div>
        </header>
      </section>
    </>
  );
}
