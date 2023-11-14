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
  const [fetchApprovedVendors, setFetchApprovedVendors] = useState([]);
  const [approvedVendorsList, setApprovedVendorsList] = useState([]);

  useEffect(() => {
    axios.get("/admin/pending").then((res) => {
      setPendingVendor(res.data.result);
    });
    axios.get("admin/category").then((res) => {
      setAllCategory(res.data.result);
    });
    //Fetch approved vendors after approving or rejecting
    const fetchApprovedVendors = async () => {
      const response = await axios.get("/admin/approved-vendors");
      setApprovedVendorsList(response.data.result);
    };
    fetchApprovedVendors();
  }, []);

  //Function to be called after approving or rejecting
  const handleApprovalActions = (id) => {
    axios.post(`/admin/pending/${id}`).then((res) => {
      setPendingVendor(res.data.result);
      fetchApprovedVendors(); //Fetch approved vendors after approval
    });
  };

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
    handleApprovalActions,
    approvedVendorsList,
    hdl_view_pending_detail,
    hdl_approve_application,
    singlePendingVendor,
    hdl_approved_submit,
    hdl_reject_application,
    allCategory,
    hdl_input,
    setSelectCategory,
    hdl_new_category,
    hdl_update_category,
    hdl_delete_category,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}
