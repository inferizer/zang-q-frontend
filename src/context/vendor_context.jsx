import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
export const VendorContext = createContext();
export default function VendorContextProvider({ children }) {
  const [shopPictureFile, setShopPictureFile] = useState(null)
  const [idCardFile, setIdCardFile] = useState(null)
  const [appInput, setAppInput] = useState({})
  // map
  const [searchLocation, setSearchLocation] = useState(null);
  const [mapClicked, setMapClicked] = useState(null);


  const hdl_formdata = (appInput, mapClicked) => {
    const formData = new FormData
    for (let k in appInput) {
      formData.append(k, appInput[k])
    }

    return formData
  }
  const hdl_input = (e) => {
    setAppInput({ ...appInput, [e.target.name]: e.target.value })
  }

  const hdl_application_submit = () => {

    const formData = hdl_formdata(appInput, searchLocation)


    if (shopPictureFile) formData.append("shopPicture", shopPictureFile)
    if (idCardFile) formData.append("idCard", idCardFile)

    formData.append("shopLat", mapClicked?.lat || searchLocation?.lat)
    formData.append("shopLan", mapClicked?.lng || searchLocation?.lng)

    axios.post("/vendor/application", formData)





  }


  return <VendorContext.Provider value={{ hdl_input, hdl_application_submit, setShopPictureFile, setIdCardFile, shopPictureFile, idCardFile, searchLocation, setSearchLocation, mapClicked, setMapClicked, appInput }}>
    {children}
  </VendorContext.Provider>;
}

// lat: mapClicked?.lat || searchLocation?.lat,
//   lng: mapClicked?.lng || searchLocation?.lng,