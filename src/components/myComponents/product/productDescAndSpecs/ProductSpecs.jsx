import React from "react";
import { useSelector } from "react-redux";
import ExpandableText from "../../expendableText/ExpendableText";
import { dummytext } from "@/lib/constants";

const groupAttributes = (variations) => {
  const grouped = {};

  for (const variant of variations) {
    for (const attr of variant.variation_attributes || []) {
      const key = attr?.attribute?.name || attr?.attribute_name || "Unknown";
      const value =
        attr?.attribute_option?.attribute_value ||
        attr?.attribute_value ||
        "N/A";

      if (!grouped[key]) {
        grouped[key] = new Set();
      }

      grouped[key].add(value);
    }
  }

  return grouped;
};

// -----------------------------------
const renderGroupedAttributes = (grouped) => {
  return Object.entries(grouped).map(([key, valueSet]) => (
    <div key={key} className="mb-3">
      <h2 className="text-md font-bold uppercase">{key}</h2>
      <p className="text-md text-gray-600 ml-2">{[...valueSet].join(", ")}</p>
    </div>
  ));
};

const ProductSpecs = () => {
  const { selectedProduct } = useSelector((state) => state.product);
  const showVariants =
    selectedProduct?.is_variant && selectedProduct?.variations?.length > 0;

  const grouped = showVariants
    ? groupAttributes(selectedProduct.variations)
    : {};

  return (
    <div className="p-4 bg-white mb-16">
      <h2 className="font-medium mb-4" style={{ fontSize: "var(--fs-g)" }}>
        Specifications
      </h2>

      {showVariants ? (
        <ExpandableText text={renderGroupedAttributes(grouped)} />
      ) : (
        <ExpandableText text={dummytext} />
      )}
    </div>
  );
};

export default ProductSpecs;
