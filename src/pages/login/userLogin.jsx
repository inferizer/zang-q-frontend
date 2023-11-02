import { useAuth } from "../../hook/useAuthContext";
import Input from "../../component/input";
export default function UserLogin() {
  const { hdl_input, hdl_user_login_submit } = useAuth();

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
          hdl_user_login_submit();
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
    </>
  );
}
