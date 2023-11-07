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
  } = useVendor();
  const navigate = useNavigate();

  const { authUser } = useAuth();
  console.log(authUser)

  useEffect(() => {
    console.log('appInput', appInput)
  }, [])

  console.log('appInput', appInput)

  const data = [
    { lat: 13.758200, lng: 100.540000, title: 'ตี๋น้อย' },
    { lat: 13.762000, lng: 100.5352833, title: 'after you' },
    { lat: 13.755000, lng: 100.532000, title: 'ถ้วยถัง' },
    { lat: 13.760000, lng: 100.530000, title: 'อี้จาสุกี้หม่าล่า' },
    { lat: 13.751000, lng: 100.538000, title: 'นักล่าหมูกระทะ' },
    { lat: 13.748000, lng: 100.550000, title: 'bar b gon' },
    { lat: 13.745000, lng: 100.550000, title: 'ไอติมทุนจีน' },

    { lat: 13.802000, lng: 100.537000, title: '4868.204100256101' },
    { lat: 13.709000, lng: 100.532000, title: '5499.429088629627' },
    { lat: 13.762000, lng: 100.586000, title: '5502.696668591629' },
    { lat: 13.758000, lng: 100.482000, title: '5757.836659596614' },
    { lat: 13.759000, lng: 100.493000, title: 'out of area example' },
    { lat: 13.715000, lng: 100.511000, title: 'out of area example 5' },
    { lat: 13.805000, lng: 100.530000, title: 'out of area example 6' },
    { lat: 13.764000, lng: 100.589000, title: 'out of area example 7' },
]

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

        <h1>google map api</h1>
        {/* <Map viewMode={false} /> */}
        {authUser.role === 'vendor' ? <Map viewMode={true} location={{ lat: 13.7462, lng: 100.5347 }} data={data} /> : <Map viewMode={false} />}


        <button>submit</button>
      </form>
    </>
  );
}
