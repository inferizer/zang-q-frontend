import Input from "../../component/input";
import { useAuth } from "../../hook/useAuthContext";
import { useNavigate } from "react-router-dom";
export default function UserRegister() {
  const { hdl_input, hdl_user_register_submit } = useAuth();
  const navigate = useNavigate();

  const inputTag = [
    { id: 1, name: "username" },
    { id: 2, name: "password" },
    { id: 3, name: "confirmPassword" },
    { id: 4, name: "emailOrMobile" },
  ];

  const item = [
    { name: "a", number: 2 },
    { name: "a", number: null },
  ];


  const hdl_submit =  async (e) =>{ 
    e.preventDefault();
    await hdl_user_register_submit()
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <form
        key="1"
        className=" flex flex-col"
        onSubmit={hdl_submit}
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

        <button>submit</button>
      </form>
      {item.map((el) => {
        return (
          <>
            <h1>{el.name}</h1>
            <h1>{el.number ? "นิติบุคคล" : "บุคคล"}</h1>
          </>
        );
      })}
    </>
  );

    }