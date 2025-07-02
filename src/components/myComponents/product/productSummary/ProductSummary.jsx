import React from "react";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import SelectVariant from "./SelectVariant";
import DeliverySeller from "./DeliverySeller";
import { useSelector } from "react-redux";
import QuantitySelector from "./QuantitySelector";

const ProductSummary = () => {
  const { selectedProduct } = useSelector((state) => state.product);

  // const { cartItems } = useSelector((state) => state.cart);

  //console.log(cartItems);

  // console.log("===>", selectedProduct);
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start lg:justify-items-center ">
      <ProductImages />

      <div className="flex flex-col gap-5">
        <ProductInfo />
        {selectedProduct?.is_variant && <SelectVariant />}
        <QuantitySelector />
      </div>

      <DeliverySeller />
    </div>
  );
};

export default ProductSummary;
