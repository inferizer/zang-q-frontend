import Input from "../../component/input";
import { useAuth } from "../../hook/useAuthContext";
import { useState } from "react";

export default function AdminLogin() {
  const { hdl_input } = useAuth();
  const [input, setInput] = useState({ email: "", password: "" });

  const inputTag = [
    { id: 4, name: "email" },
    { id: 2, name: "password" },
  ];

  return (
    <div className="container mx-auto bg-white items-center flex">
      <form
        className="mobile flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          hdl_admin_login_submit(input);
        }}
      >
        <h1 className="mobile:mb-[25px]">
          <b className="mobile:text-[20px] ">สำหรับผู้ดูแลระบบ</b>
        </h1>

        {inputTag.map((el) => (
          <div key={el.id}>
            <Input
              name={el.name}
              type="text"
              placeholder="enter here"
              onChange={(e) => {
                hdl_input(e);
                setInput({ ...input, [el.name]: e.target.value });
              }}
            />
          </div>
        ))}
        <button
          type="submit"
          className="mobile:bg-primary-400 text-sm text-white items-center flex justify-center rounded-xl"
        >
          continue
        </button>
      </form>
    </div>
  );
}
