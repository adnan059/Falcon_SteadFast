import { product_details_url } from "@/lib/constants";
import { setIsProductLoading, setSelectedProduct } from "@/redux/productSlice";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const useProduct = () => {
  const dispatch = useDispatch();

  const fetchSelectedProduct = async (slug = "iphone-15-plus") => {
    dispatch(setIsProductLoading(true));
    try {
      const { data } = await axios.get(`${product_details_url}/${slug}`);

      dispatch(setSelectedProduct(data.data));

      dispatch(setIsProductLoading(false));
    } catch (error) {
      console.log(error);
      toast.error("Failed to Fetch Product", {
        duration: 1600,
        style: { backgroundColor: "red", color: "white" },
      });
      dispatch(setIsProductLoading(false));
    }
  };

  return {
    fetchSelectedProduct,
  };
};

export default useProduct;
