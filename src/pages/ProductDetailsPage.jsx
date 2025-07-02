import React, { useEffect } from "react";
import ProductDetails from "../components/myComponents/product/ProductDetails";
import useProduct from "@/hooks/useProduct";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { fetchSelectedProduct } = useProduct();

  const { slug } = useParams();

  useEffect(() => {
    fetchSelectedProduct(slug);
  }, [slug]);
  return (
    <>
      <ProductDetails />
    </>
  );
};

export default ProductDetailsPage;
