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
  const [error, setError] = useState({})
  const hdl_submit = async (e) => {
    e.preventDefault()
    const validationError = validateLogin(input, { abortEarly: false });
    if (validationError) {
      return setError(validationError);
    }
    setError({})
    await hdl_admin_login_submit()
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <section className="section h-screen flex gap-4">
      <form
        className="m-auto w-[600px] min-w-[240px] bg-white shadow-md rounded p-8 flex flex-col gap-4"
        onSubmit={hdl_submit}
      >
        <h6 className="text-lg font-semibold">Admin Login</h6>
        <div className="flex flex-col gap-2 max-w-[600px]">
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

        <button className="mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Continue
        </button>

      </form>
    </section>
  );

}
