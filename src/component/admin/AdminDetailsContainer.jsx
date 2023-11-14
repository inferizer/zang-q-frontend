import axios from "../../config/axios";
import { useParams } from "react-router-dom";
import Loading from "../loading";
import { useEffect, useState } from "react";
import RestaurantDetailsForm from "./RestaurantDetailsForm";
import AdminApprovedVendorFrom from "./AdminApprovedVendorForm";
import AdminManagementMain from "./AdminManagementMain";

export default function AdminDetailsContainer() {
  const { id } = useParams();

  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allCategory, setAllCategory] = useState([]);
  const [pendingVendor, setPendingVendor] = useState(null);

  // useEffect(() => {
  //   async function fetchShops() {
  //     try {
  //       const response = await axios.get("/shop/" + id);
  //       console.log("Response:", response);

  //       if (response.status !== 200) {
  //         throw new Error("Network response was not working");
  //       }

  //       const data = response.data;
  //       console.log("Data:", data);

  //       setLoading(false);
  //       setShop(data.shop);
  //     } catch (error) {
  //       console.error("Error fetching shop details", error);
  //       setLoading(false);
  //     }
  //   }

  //   fetchShops();
  // }, [id]);

  useEffect(() => {
    axios.get("/admin/pending").then((res) => {
      setPendingVendor(res.data.result);
    });
    axios.get("admin/category").then((res) => {
      setAllCategory(res.data.result);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RestaurantDetailsForm shop={shop} />
      <AdminManagementMain shop={shop} />
      <AdminApprovedVendorFrom shop={shop} />
    </>
  );
}
