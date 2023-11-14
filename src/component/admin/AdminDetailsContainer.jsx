import axios from "../../config/axios";
import { useParams } from "react-router-dom";
import Loading from "../loading";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import RestaurantDetailsForm from "./RestaurantDetailsForm";

export default function AdminDetailsContainer() {
  const { id } = useParams();

  const [shop, setShop] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShops() {
      try {
        const response = await axios.get("/shop/" + id);
        if (response.status !== 200) {
          throw new Error("Network response was not working");
        }

        const data = response.data;
        setLoading(false);
        setShop(data.shop);
      } catch (error) {
        toast.error("Error fetching shop details");
        setLoading(false);
      }
    }

    fetchShops();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return <RestaurantDetailsForm shop={shop} />;
}
