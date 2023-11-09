import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "../config/axios";
export const AdminContext = createContext();
export default function AdminContextProvider({ children }) {
  const [pendingVendor, setPendingVendor] = useState(null);
  const [singlePendingVendor, setSinglePendingVendor] = useState([]);
  const [allCategory, setAllcategory] = useState([]);
  const [input, setInput] = useState({});
  const [selectCategory, setSelectCategory] = useState(0);
  useEffect(() => {
    axios.get("/admin/pending").then((res) => {
      setPendingVendor(res.data.result);
    });
    axios.get("admin/category").then((res) => {
      setAllcategory(res.data.result);
    });
  }, []);

  const hdl_input = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdl_view_pending_detail = (input) => {
    const singlePendingApplication = pendingVendor.filter(
      (el) => el.shopAccountId == input
    );
    setSinglePendingVendor(singlePendingApplication);
  };

  const hdl_approved_submit = (id) => {
    axios.post("/admin/pending", { id }).then((res) => {
      setPendingVendor(res.data.result);
    });
  };
  const hdl_reject_application = (id) => {
    axios.delete(`/admin/pending/${id}`).then((res) => {
      setPendingVendor(res.data.result);
    });
  };

  const hdl_new_category = () => {
    axios.post("/admin/category", input).then((res) => {
      setAllcategory(res.data.result)
      setInput({})
    });
  };


  const hdl_update_category = () =>{
    input.id = selectCategory
    axios.patch('/admin/category',input).then(res=>{
        setAllcategory(res.data.result)
        setInput({})
    })

 
  }

  const  hdl_delete_category = (id) =>{
    console.log(id)
    axios.delete(`/admin/category/${id}`).then(
    res=>{
        setAllcategory(res.data.result)
        setInput({})
    }
    )
}
  return (
    <AdminContext.Provider
      value={{
        pendingVendor,
        hdl_view_pending_detail,
        singlePendingVendor,
        hdl_approved_submit,
        hdl_reject_application,
        allCategory,
        hdl_input,
        setSelectCategory,
        hdl_new_category,
        hdl_update_category,
        hdl_delete_category,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
