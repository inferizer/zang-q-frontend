import axios from "../config/axios";
import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/localStorage";
import { gapi } from "gapi-script";
export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const clientId =
    "25769644481-it9q9s3alpf30c274qlqgepm7tppqr07.apps.googleusercontent.com";

  useEffect(() => {
    const token = getAccessToken();
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);

    if (token) {
      axios
        .get("/auth")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .catch(console.log)
        .finally(() => {
          setInitLoading(false);
        });
    } else setInitLoading(false);
  }, []);

  const [isShowMap, setIsShowMap] = useState(false)
  const [initLoading, setInitLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null);
  const [input, SetInput] = useState({});
  const [userDetailOpen, setUserDetailOpen] = useState(false);
  const [userEditOpen, setUserEditOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const hdl_google_login = (profileObj) => {
    const data = {};
    data.username = profileObj.givenName;
    data.email = profileObj.email;
    data.googleId = profileObj.googleId;
    data.profileImage = profileObj.imageUrl;
    return data;
  };

  const SuccessGoogle = (res) => {
    let data = hdl_google_login(res.profileObj);
    axios.post("/auth/login/google", data).then((res) => {
      setAuthUser(res.data.user);
      addAccessToken(res.data.accessToken);
    });
  };

  const failGoogle = (res) => {
    console.log("google login fail", alert(res));
  };

  const hdl_user_register_submit = async () => {
    await axios
      .post("/auth/register", input)
      .then((res) => {
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        setInitLoading(false);
      });
  };

  const hdl_user_login_submit = () => {
    axios
      .post("/auth/login", input)
      .then((res) => {
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
        SetInput({});
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(
          "username or password was wrong!",
          error.response.data.message
        );
        throw error;
      });
  };

  const hdl_vendor_login_submit = () => {
    axios.post("/vendor/login", input).then((res) => {
      setAuthUser(res.data.user);
      addAccessToken(res.data.accessToken);
      SetInput({});
    });
  };
  const hdl_vendor_register_submit = async () => {
    await axios
      .post("/vendor/register", input)
      .then((res) => {
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
        SetInput({});
      })
      .catch((error) => {
        console.log(error.response.data.message);
        throw error;
      });
  };
  const hdl_input = (e) => {
    SetInput({ ...input, [e.target.name]: e.target.value });
  };

  // dont forget set NGROCK
  const hdl_logout = () => {
    if (authUser == null) {
      window.location.replace("http://localhost:5173");
    }
    removeAccessToken();
    setUserDetailOpen(false);
  };

  const hdl_admin_login_submit = () => {
    axios
      .post("/admin/login", input)
      .then((res) => {
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
        SetInput({});
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const hdl_formData = () => {
    const formData = new FormData();
    for (let k in input) {
      formData.append(k, input[k]);
    }
    return formData;
  };

  const hdl_user_edit = (id) => {
    const formData = hdl_formdata(input);
    if (profileImage) formData.append("profileImage", profileImage);
    setInitLoading(true);
    axios
      .put(`/auth/edit/${id}`, formData)
      .then((res) => {
        setAuthUser(res.data.result);
        setUserEditOpen(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      })
      .finally(setInitLoading(false));
  };

  const hdl_user_edit_picture = (e) => {
    if (e.target.files[[0]]) setProfileImage(e.target.files[[0]]);
  };

  const handleShowMap = () => {
    setIsShowMap(!isShowMap)
  }

  return (<AuthContext.Provider value={{

    hdl_user_register_submit,
    hdl_user_login_submit,
    hdl_vendor_register_submit,
    initLoading,
    setInitLoading,
    hdl_input,
    input,
    authUser,
    hdl_logout,
    hdl_vendor_register_submit,
    hdl_vendor_login_submit,
    SuccessGoogle,
    failGoogle,
    setAuthUser,
    hdl_admin_login_submit,
    hdl_user_edit,
    userDetailOpen,
    setUserDetailOpen,
    userEditOpen,
    setUserEditOpen,
    hdl_user_edit_picture,
    profileImage,
    SetInput,
    setProfileImage,
    isShowMap, setIsShowMap, handleShowMap
  }}
  >
    {children}
  </AuthContext.Provider>
  );
}
