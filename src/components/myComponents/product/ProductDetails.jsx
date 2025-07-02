import React from "react";
import ProductSummary from "./productSummary/ProductSummary";
import ProductDesc from "./productDescAndSpecs/ProductDesc";
import ProductSpecs from "./productDescAndSpecs/ProductSpecs";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";

const ProductDetails = () => {
  const { selectedProduct } = useSelector((state) => state.product);

  return (
    <>
      <section className="max-w-[1440px]   mx-auto pt-72">
        <div className="sectionContainer -mt-10 px-8 py-8  min-[1290px]:px-0 bg-white max-w-[1280px] mx-auto">
          {!selectedProduct ? (
            <div className="w-full h-[100vh] flex justify-center items-center ">
              <Loader />
            </div>
          ) : (
            <>
              <ProductSummary />
            </>
          )}
        </div>

        <div className="sectionContainer mt-8  px-8 bg-white  min-[1290px]:px-0 max-w-[1280px] mx-auto">
          <ProductDesc />
        </div>

        <div className="sectionContainer mt-8  px-8 bg-white  min-[1290px]:px-0 max-w-[1280px] mx-auto">
          <ProductSpecs />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
