import Input from "../../component/input";
import { useAuth } from "../../hook/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function VendorLogin() {
  const { hdl_input, hdl_vendor_login_submit } = useAuth();

  const inputTag = [
    { id: 4, name: "email", type: "text" },
    { id: 2, name: "password", type: "Password" },
  ];

  const navigate = useNavigate();
  
  return (
    <section className="section h-screen flex">
      <form
        key="1"
        className="m-auto w-[600px] min-w-[240px] bg-white shadow-md rounded p-8 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          hdl_vendor_login_submit();
        }}
      >
        <h6 className="text-lg font-semibold">สำหรับร้านค้า</h6>
        <h6 className="text-lg font-semibold">Login</h6>

        {inputTag.map((el) => {
          return (
            <>
              <Input
                key={el.id}
                name={el.name}
                type={el.type}
                placeholder={el.name}
                onChange={hdl_input}
              />
            </>
          );
        })}

        <button className="mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Continue</button>

        <div className="text-center mt-4 ">
          <span className="text-gray-500">Don’t have an account?</span>
          <span className="cursor-pointer underline text-primary-500 ml-2"
            onClick={() => { navigate('/register/vendor') }}
          >
            Register
          </span>
        </div>
      </form>
    </section>
  );
}
