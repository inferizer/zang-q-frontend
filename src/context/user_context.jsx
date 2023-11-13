import axios from "../config/axios";
import { useEffect, useState, createContext } from "react";
export const UserContext = createContext();
export default function UserContextProvider({ children }) {
  const [allShop, setAllShop] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [filter, setFilter] = useState(null);
  const [filterResult, setFilterResult] = useState(null);
  const [searchBarResult, setSearchBarResult] = useState(null);
  useEffect(() => {
    axios.get("/user/shop").then((res) => {
      setAllShop(res.data.result);
    });
    axios.get("/user/category").then((res) => {
      setAllCategory(res.data.result);
    });
  }, []);
  const hdl_filter_search = (id) => {
    const [ShopCategories] = allCategory.filter((el) => el.id == id);
    setFilterResult(ShopCategories);
  };

  const hdl_searchBar = (e) => {
    setFilter(null)
    let result = [];
    for (let i of allShop) {
      let input = e.target.value.trim().toUpperCase();
      let allShop = i.shopName.trim().toUpperCase();
      if (allShop.includes(input)) {
        result.push(i);
      }
    }
    setSearchBarResult(result);
  };
  return (
    <UserContext.Provider
      value={{
        allShop,
        allCategory,
        setFilter,
        filter,
        hdl_filter_search,
        filterResult,
        hdl_searchBar,
        searchBarResult,
        setSearchBarResult,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
