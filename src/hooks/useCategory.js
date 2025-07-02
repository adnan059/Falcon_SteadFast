import { category_api_url } from "@/lib/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(category_api_url);
        setCategories(data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Failed to Fetch Categories", {
          duration: 2000,
          closeButton: true,
          style: { backgroundColor: "red", color: "white" },
        });
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return {
    categories,
    loading,
  };
};

export default useCategory;
