import { useAuth } from "../../hook/useAuthContext";
import { GoogleLogin } from "react-google-login"
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
  const navigate = useNavigate();

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
    <section className="section h-screen flex gap-4">
      <form
        className="m-auto w-[600px] min-w-[240px] bg-white shadow-md rounded p-8 flex flex-col gap-4"
        onSubmit={hdl_login_submit}
      >
        <h6 className="text-lg font-semibold">Login</h6>
        <div className="flex flex-col gap-2 max-w-[600px]">
          <Input
            onChange={hdl_input}
            placeholder='Email or Mobile:'
            type='text'
            id='emailOrMobile'
            name='emailOrMobile'
            value={input.emailOrMobile}
            error={error.emailOrMobile}
          />
          {error.emailOrMobile && (
            <InputErrorMessage message={error.emailOrMobile} />
          )}

          <Input
            onChange={hdl_input}
            type='password'
            placeholder='password:'
            name='password'
            required
            value={input.password}
            error={error.password}
          />
          {error.password && (
            <InputErrorMessage message={error.password} />
          )}
        </div>

        <button className="mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Continue
        </button>

        <div className="flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>

        <LineLoginButton />
        <GoogleLogin
          clientId={clientId}
          buttonText='Continue with Google'
          onSuccess={SuccessGoogle}
          onFailure={failGoogle}
          cookiePolicy='single_host_origin'
          isSignedIn={false}
          type='button'
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="flex justify-center items-center gap-4 py-2 px-6 text-sm font-medium text-gray-900 rounded border-2 border-gray-200 hover:text-primary-500 hover:border-primary-500 focus:outline-none focus:bg-gray-100"
            >
              <img
                className="w-9 h-9"
                src={icongoogle}
                alt=''
              />
              Continue with Google
            </button>
          )}
        />

        <div className="text-center mt-4 ">
          <span className="text-gray-500">Don’t have an account?</span>
          <span className="cursor-pointer underline text-primary-500 ml-2"
            onClick={() => { navigate('/register/user') }}
          >
            Register
          </span>
        </div>
      </form>
    </section >
  );
}
