import React, { useState } from "react";
import { useAuth } from "../../hook/useAuthContext";
import Input from "../../component/input";
import InputErrorMessage from "../register/InputErrorMessage";
import Joi from "joi";
export default function AdminLogin() {
  const adminLoginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  const validateLogin = (input) => {
    const { error } = adminLoginSchema.validate(input, { abortEarly: false });
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
  const { hdl_input, hdl_admin_login_submit, input } = useAuth();
  const [error, setError] = useState({});
  const hdl_submit = async (e) => {
    e.preventDefault();
    const validationError = validateLogin(input, { abortEarly: false });
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    await hdl_admin_login_submit().catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="mobile">
      <header className="mobile">
        <div className="mobile:justify-center items-center h-screen flex">
          <form className="mobile" onSubmit={hdl_submit}>
            <h1 className="mobile:mb-[25px]">
              <b className="mobile:text-[25px]">Admin</b>
            </h1>
            <div className="mobile:border-[#BDBDBD] flex flex-col gap-2 items-start">
              <div className=" flex flex-col border border-gray-400 rounded-md mx-auto">
                <Input
                  onChange={hdl_input}
                  placeholder="username"
                  type="text"
                  id="username"
                  name="username"
                  value={input.username}
                  error={error.username}
                />
                {error.username && (
                  <InputErrorMessage message={error.username} />
                )}

                <Input
                  onChange={hdl_input}
                  type="password"
                  placeholder="Enter Password:"
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
            <button className="mobile: mt-[25px] ml-[9px] w-[350px] flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
              Continue
            </button>
            <div className="mobile: inline-flex items-center justify-center w-full">
              <hr className="mobile: w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
              <span className="mobile: absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"></span>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}
