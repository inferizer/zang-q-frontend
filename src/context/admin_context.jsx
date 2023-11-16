import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "../config/axios";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [pendingVendor, setPendingVendor] = useState([]);
  const [singlePendingVendor, setSinglePendingVendor] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [input, setInput] = useState({});
  const [selectCategory, setSelectCategory] = useState(0);
  const [singleApprovedVendor, setSingleApprovedVendor] = useState([]);
  const [approvedVendorsList, setApprovedVendorList] = useState([]);
  const [vendorAlreadyApproved, setVendorAlreadyApproved] = useState([]);

  useEffect(() => {
    axios.get("/admin/pending").then((res) => {
      setPendingVendor(res.data.result);
    });
    axios.get("admin/category").then((res) => {
      setAllCategory(res.data.result);
    });
    axios.get("/admin/approved").then((res) => {
      setApprovedVendorList(res.data.result);
    });
    axios.get("/admin/approved/list").then((res) => {
      setVendorAlreadyApproved(res.data.result);
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

  //main page is using it
  const hdl_approved_submit = (id) => {
    axios.post("/admin/approved", { id }).then((res) => {
      setApprovedVendorList(res.data.result);
      window.location.reload();
    });
  };

  const hdl_already_approved = (id) => {
    axios.get("/admin/approved/list").then((res) => {
      setVendorAlreadyApproved(res.data.result);
    });
  };

  const hdl_view_approved_detail = (input) => {
    const singleApprovedApplication = approvedVendorsList.filter(
      (el) => el.shopAccountId == input
    );
    setSingleApprovedVendor(singleApprovedApplication);
  };

  const hdl_reject_application = (id) => {
    axios.delete(`/admin/pending/${id}`).then((res) => {
      setPendingVendor(res.data.result);
    });
  };

  const hdl_approve_application = (id) => {
    axios.post(`/admin/pending/${id}`).then((res) => {
      setPendingVendor(res.data.result);
    });
  };

  const hdl_new_category = () => {
    axios.post("/admin/category", input).then((res) => {
      setAllCategory(res.data.result);
      setInput({});
    });
  };

  const hdl_update_category = () => {
    input.id = selectCategory;
    axios.patch("/admin/category", input).then((res) => {
      setAllCategory(res.data.result);
      setInput({});
    });
  };

  const hdl_delete_category = (id) => {
    console.log(id);
    axios.delete(`/admin/category/${id}`).then((res) => {
      setAllCategory(res.data.result);
      setInput({});
    });
  };

  const value = {
    pendingVendor,
    approvedVendorsList,
    hdl_view_pending_detail,
    hdl_view_approved_detail,
    hdl_approve_application,
    hdl_approved_submit,
    hdl_already_approved,
    singlePendingVendor,
    singleApprovedVendor,
    hdl_approved_submit,
    hdl_reject_application,
    allCategory,
    hdl_input,
    setSelectCategory,
    hdl_new_category,
    hdl_update_category,
    hdl_delete_category,
    vendorAlreadyApproved,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}
