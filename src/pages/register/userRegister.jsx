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
    <section className="section h-screen flex gap-4">
      <form
        className="m-auto w-[600px] min-w-[240px] bg-white shadow-md rounded p-8 flex flex-col gap-4"
        onSubmit={hdl_submit}
      >
        <h6 className="text-lg font-semibold">Register</h6>
        <div className="flex flex-col gap-2 max-w-[600px]">
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
          className="mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          Continue
        </button>

        <div className="flex items-center justify-center w-full text-sm">
          <hr className="w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>
      </form>

      <LineLoginButtton />
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={SuccessGoogle}
        onFailure={failGoogle}
        cookiePolicy="single_host_origin"
        isSignedIn={false}
        type="button"
        render={renderProps => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="flex justify-center items-center gap-4 py-2 px-6 text-sm font-medium text-gray-900 rounded border-2 border-gray-200 hover:text-primary-500 hover:border-primary-500 focus:outline-none focus:bg-gray-100"
          >
            <img
              className="w-9 h-9"
              src={icongoogle}
              alt=""
            />
            Continue with Google
          </button>
        )}
      />

      <div className="text-center mt-4 ">
        <span className="text-gray-500">Already have an account?</span>
        <span className="cursor-pointer underline text-primary-500 ml-2"
          onClick={() => { navigate('/login/user') }}
        >
          Login
        </span>
      </div>
    </section>
  );
}
