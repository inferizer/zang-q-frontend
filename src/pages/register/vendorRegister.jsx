import { useAuth } from "../../hook/useAuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../../component/input";
export default function VendorRegistor() {
  const { hdl_vendor_register_submit, hdl_input } = useAuth();
  const navigate = useNavigate();

  const inputTag = [
    { name: "email" },
    { name: "password" },
    { name: "confirmPassword" },
  ];

  const hdl_submit = async (e) => {
    e.preventDefault();
    await hdl_vendor_register_submit()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <section className="section h-screen flex">
      <form
        className="m-auto w-[600px] min-w-[240px] bg-white shadow-md rounded p-8 flex flex-col gap-4"
        onSubmit={hdl_submit}
      >
        <h6 className="text-lg font-semibold">สำหรับร้านค้า</h6>
        <h6 className="text-lg font-semibold">Register</h6>

        <div className="flex flex-col gap-2 max-w-[600px]">
          {inputTag.map((el, id) => {
            return (
              <Input
                id={id}
                name={el.name}
                type="text"
                placeholder={el.name}
                onChange={hdl_input}
              />
            );
          })}
        </div>

        <button className="mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Continue
        </button>
      </form>
    </section>
  );
}
