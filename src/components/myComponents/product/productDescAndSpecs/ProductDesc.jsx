import React from "react";
import ExpandableText from "../../expendableText/ExpendableText";
//import { text } from "@/lib/constants";
import { useSelector } from "react-redux";

const ProductDesc = () => {
  const { selectedProduct } = useSelector((state) => state.product);
  const text = selectedProduct?.description;
  return (
    <div className="p-4  bg-white my-16">
      <h2 className="font-medium mb-4" style={{ fontSize: "var(--fs-g)" }}>
        Description
      </h2>

      <ExpandableText text={text} />
    </div>
  );
};

export default ProductDesc;
