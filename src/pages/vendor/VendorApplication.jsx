import { useAuth } from "../../hook/useAuthContext";
import Input from "../../component/input";
import { useNavigate } from "react-router-dom";
import { useVendor } from "../../hook/useVendor";
import Map from "../map/Map";
import { useEffect } from "react";

export default function VendorApplication() {
  const {
    hdl_input,
    hdl_application_submit,
    setShopPictureFile,
    setIdCardFile,
    idCardFile,
    shopPictureFile,
    appInput,
    hdl_checkBox,
    allCategory,
  } = useVendor();

  const navigate = useNavigate();
  const { authUser } = useAuth();
  console.log(authUser);

  useEffect(() => {
    console.log("appInput", appInput);
  }, []);

  const data = [
    { lat: 13.7582, lng: 100.54, title: "ตี๋น้อย" },
    { lat: 13.762, lng: 100.5352833, title: "after you" },
    { lat: 13.755, lng: 100.532, title: "ถ้วยถัง" },
    { lat: 13.76, lng: 100.53, title: "อี้จาสุกี้หม่าล่า" },
    { lat: 13.751, lng: 100.538, title: "นักล่าหมูกระทะ" },
    { lat: 13.748, lng: 100.55, title: "bar b gon" },
    { lat: 13.745, lng: 100.55, title: "ไอติมทุนจีน" },

    { lat: 13.802, lng: 100.537, title: "4868.204100256101" },
    { lat: 13.709, lng: 100.532, title: "5499.429088629627" },
    { lat: 13.762, lng: 100.586, title: "5502.696668591629" },
    { lat: 13.758, lng: 100.482, title: "5757.836659596614" },
    { lat: 13.759, lng: 100.493, title: "out of area example" },
    { lat: 13.715, lng: 100.511, title: "out of area example 5" },
    { lat: 13.805, lng: 100.53, title: "out of area example 6" },
    { lat: 13.764, lng: 100.589, title: "out of area example 7" },
  ];

  const inputTag = [
    { id: 1, name: "shopName" },
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
        <h1>select your category</h1>
        {allCategory.map((el) => {
          return (
            <div>
              <label>{el.name}</label>
              <input type="checkbox" value={el.id} onChange={hdl_checkBox} />
            </div>
          );
        })}

        <h1>google map api</h1>
        {/* <Map viewMode={false} /> */}
        {authUser.role === "vendor" ? (
          <Map
            viewMode={true}
            location={{ lat: 13.7462, lng: 100.5347 }}
            data={data}
          />
        ) : (
          <Map viewMode={false} />
        )}

        <button>submit</button>
      </form>
    </>
  );
}
