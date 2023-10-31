import { useAuth } from "../../hook/useAuthContext";
import Input from "../../component/input";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config/env";

export default function UserLogin() {
  const { hdl_input, input, hdl_user_login_submit } = useAuth();
  const navigate = useNavigate();
  const handleLoginGoogle = () => {
    console.log("Test console....................");

    window.location.replace(`${BACKEND_URL}/auth/google`);

  };

  const inputTag = [
    { id: 4, name: "emailOrMobile" },
    { id: 2, name: "password" },
  ];
  return (
    <>
      <form
        key="1"
        className=" flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          hdl_user_login_submit(input);
        }}
      >
        {inputTag.map((el) => {
          return (
            <>
              <label>{el.name}</label>
              <Input
                key={el.id}
                name={el.name}
                type="text"
                placeholder="enter here"
                onChange={hdl_input}
              />
            </>
          );
        })}

        <button>login</button>
      </form>
      <button onClick={handleLoginGoogle}> Google login </button>
    </>
  );
}
