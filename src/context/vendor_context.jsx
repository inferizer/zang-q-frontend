import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
export const VendorContext = createContext();
export default function VendorContextProvider({ children }) {
  const [shopPictureFile, setShopPictureFile] = useState(null);
  const [idCardFile, setIdCardFile] = useState(null);
  const [juristicFile, setJuristicFile] = useState(null);
  const [appInput, setAppInput] = useState({});
  const [allCategory, setAllCtegory] = useState([]);
  // map
  const [searchLocation, setSearchLocation] = useState(null);
  const [mapClicked, setMapClicked] = useState(null);
  const [checkInput, setCheckInput] = useState([]);
  const [cancek, setCancel] = useState([]);

  useEffect(() => {
    axios.get("/vendor/category").then((res) => {
      setAllCtegory(res.data.result);
    });
  }, []);

  const hdl_formdata = (appInput, mapClicked) => {
    const formData = new FormData();
    for (let k in appInput) {
      formData.append(k, appInput[k]);
    }
    return formData;
  };

  const hdl_input = (e) => {
    setAppInput({ ...appInput, [e.target.name]: e.target.value });
  };

  const hdl_application_submit = () => {
    const formData = hdl_formdata(appInput, searchLocation);
    formData.append("shopPicture", shopPictureFile);
    formData.append("idCard", idCardFile);
    formData.append("shopLat", mapClicked?.lat || searchLocation?.lat);
    formData.append("shopLan", mapClicked?.lng || searchLocation?.lng);

    axios
      .post("/vendor/application", formData)
      .then((res) => {
        axios.post(`/vendor/category/${res.data.result.id}`, checkInput);
        alert(res.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const hdl_checkBox = (e) => {
    let existData = checkInput.findIndex((el) => el.id === e.target.value);
    if (existData < 0) {
      setCheckInput((prev) => {
        let data = { categoriesId: e.target.value };
        let oldArr = [...prev];
        let newArr = [...oldArr, data];
        return newArr;
      });
    }
    if (existData >= 0) {
      setCheckInput((prev) => {
        let oldArr = [...prev];
        let newArr = oldArr.filter((el) => el.categoriesId != e.target.value);
        return newArr;
      });
    }
  };
  const hdl_cancel_queue = () => {
    axios.patch("/vendor/canceled").then((res) => {
      setCancel(res.data.result);
    });
  };

  const hdl_accept_queue = () => {
    axios.patch("/vendor/accept").then((res) => {
      console.log(res.data.result);
      setCancel(res.data.result);
    });
  };

  return (
    <VendorContext.Provider
      value={{
        hdl_input,
        hdl_application_submit,
        setShopPictureFile,
        setIdCardFile,
        shopPictureFile,
        idCardFile,
        juristicFile,
        setJuristicFile,
        searchLocation,
        setSearchLocation,
        mapClicked,
        setMapClicked,
        appInput,
        hdl_checkBox,
        allCategory,
        hdl_cancel_queue,
        hdl_accept_queue,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
}
