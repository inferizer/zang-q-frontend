import Input from "../../component/input";
import { useAuth } from "../../hook/useAuthContext";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { useState } from "react";
import LineLoginButtton from "../../component/LineLoginButton";
import liff from "@line/liff";
import icongoogle from "../../assets/images/icongoogle.svg";
import InputErrorMessage from "./InputErrorMessage";
import { GoogleLogin } from "react-google-login";

export default function UserRegister() {
  const registerSchema = Joi.object({
    username: Joi.string().trim().required(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{6,30}$/)
      .trim()
      .required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
    emailOrMobile: Joi.alternatives([
      Joi.string().email({ tlds: false }),
      Joi.string().pattern(/^[0-9]{10}$/),
    ]).required(),
  });

  const validateRegister = (input) => {
    const { error } = registerSchema.validate(input, { abortEarly: false });
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

  const [error, setError] = useState({});
  const {
    hdl_input,
    hdl_user_register_submit,
    input,
    SuccessGoogle,
    failGoogle,
  } = useAuth();
  const navigate = useNavigate();

  const hdl_submit = async (e) => {
    e.preventDefault();

    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});

    await hdl_user_register_submit()
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mobile ">
      <header className="mobile">
        <div className="mobile:justify-center items-center h-screen flex">
          <form className="mobile" onSubmit={hdl_submit}>
            <h1 className="mobile:mb-[25px]">
              <b className="mobile:text-[25px]">Signup</b>
            </h1>
            <div className=" flex flex-col border border-gray-400 rounded-md mx-auto">
              <Input
                onChange={hdl_input}
                placeholder="username:"
                type="text"
                id="username"
                name="username"
                error={error.username}
              />
              {error.username && <InputErrorMessage message={error.username} />}
              <Input
                onChange={hdl_input}
                type="password"
                placeholder="password:"
                name="password"
                required
                error={error.password}
              />
              {error.password && <InputErrorMessage message={error.password} />}
              <Input
                onChange={hdl_input}
                type="password"
                placeholder="confirmPassword"
                name="confirmPassword"
                required
                error={error.confirmPassword}
              />
              {error.confirmPassword && (
                <InputErrorMessage message={error.confirmPassword} />
              )}
              <Input
                onChange={hdl_input}
                placeholder="emailOrMobile:"
                type="text"
                id="emailOrMobile"
                name="emailOrMobile"
                error={error.emailOrMobile}
              />
              {error.emailOrMobile && (
                <InputErrorMessage message={error.emailOrMobile} />
              )}
            </div>
            <button
              onClick={hdl_submit}
              type="button"
              className="mobile: mt-[25px] ml-[9px] w-[350px] flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Continue
            </button>
            <div className="mobile: inline-flex items-center justify-center w-full">
              <hr className="mobile: w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
              <span className="mobile: absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                or
              </span>
            </div>

            <div>
              <LineLoginButtton />
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
                      className="mobile: w-[350px]  py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
            <div className="mobile: text-center">
              <span className="mobile">Don't have an account?</span>
              <span className="mobile: ml-4">
                <button
                  className="mobile"
                  onClick={() => {
                    navigate("/login/user");
                  }}
                >
                  Sign in
                </button>
              </span>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}
