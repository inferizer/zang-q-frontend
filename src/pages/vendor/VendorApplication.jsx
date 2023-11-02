import { useAuth } from "../../hook/useAuthContext";
import Input from "../../component/input";
import { useNavigate } from "react-router-dom";
import { useVendor } from "../../hook/useVendor";

export default function VendorApplication() {
  const {
    hdl_input,
    hdl_application_submit,
    setShopPictureFile,
    setIdCardFile,
    idCardFile,
    shopPictureFile,
  } = useVendor();
  const navigate = useNavigate();

  const inputTag = [
    { id: 1, name: "shopName" },
    { id: 2, name: "shopLat" },
    { id: 3, name: "shopLan" },
    { id: 4, name: "shopMobile" },
    { id: 5, name: "openingTimes" },
    { id: 6, name: "closingTimes" },
    { id: 7, name: "ownerFirstName" },
    { id: 8, name: "ownerLastName" },
    { id: 9, name: "idNumber" },
  ];

  const hdl_submit = async (e) => {
    e.preventDefault();
    hdl_application_submit();
  };
  return (
    <>
      <form key="1" className=" flex flex-col" onSubmit={hdl_submit}>
        {inputTag.map((el) => {
          return (
            <div key={el.id} className=" flex  gap-4">
              <label>{el.name}</label>
              <Input
                name={el.name}
                type="text"
                placeholder="enter here"
                onChange={hdl_input}
              />
            </div>
          );
        })}

        <div>
          {shopPictureFile ? (
            <img src={URL.createObjectURL(shopPictureFile)} />
          ) : null}
          <label>shop picture file</label>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files[[0]]) {
                setShopPictureFile(e.target.files[[0]]);
              }
            }}
          />
        </div>
        <div>
          {idCardFile ? <img src={URL.createObjectURL(idCardFile)} /> : null}
          <label>shop picture file</label>
          <input
            type="file"
            onChange={(e) => {
              console.log(setIdCardFile);
              if (e.target.files[[0]]) {
                setIdCardFile(e.target.files[[0]]);
              }
            }}
          />
        </div>

        <button>submit</button>
      </form>
    </>
  );
}
