import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
export const VendorContext = createContext();
export default function VendorContextProvider({ children }) {
  const [shopPictureFile, setShopPictureFile] = useState(null);
  const [idCardFile, setIdCardFile] = useState(null);
  const [appInput, setAppInput] = useState({});
  const [allCategory, setAllCtegory] = useState([]);
  // map
  const [searchLocation, setSearchLocation] = useState(null);
  const [mapClicked, setMapClicked] = useState(null);
  const [checkInput, setCheckInput] = useState([]);

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

    
    axios.post('/vendor/category',checkInput)
    axios
      .post("/vendor/application", formData)
      .then()
      .catch((error) => {
        alert(error.response.data.message);
      });
      
  };

  const hdl_checkBox = (e) => {
    let existData = checkInput.findIndex( el => el.id === e.target.value)
    if(existData < 0){
      setCheckInput( prev=>{
        let data = {typeId:e.target.value}
          let oldArr = [...prev]
          let newArr = [...oldArr,data]
        return newArr
      })
    }
    if(existData >= 0){
      setCheckInput((prev) => {
        let oldArr = [...prev];
        let newArr = oldArr.filter((el) => el.typeId != e.target.value);
        return newArr;
      });
    }
   
  
 
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
        searchLocation,
        setSearchLocation,
        mapClicked,
        setMapClicked,
        appInput,
        hdl_checkBox,
        allCategory,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
}
