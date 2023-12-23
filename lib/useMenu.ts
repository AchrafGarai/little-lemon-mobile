import { useState, useEffect, useCallback } from "react";
import { Menu, MenuItem } from "../consts/types/Menu";
const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>();
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>();
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      `http://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json`
    );
    const newData = (await response.json()) as Menu;
    if (newData.menu) {
      setMenuItems(newData.menu);
      setFilteredItems(newData.menu);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on searchValue
    if (searchTerm !== "") {
      const filteredResults = filteredItems?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filteredResults);
    } else {
      setFilteredItems(menuItems);
    }
  }, [searchTerm, menuItems]);

  return {
    menuItems: filteredItems,
    categories,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
  };
};
export default useMenuItems;
