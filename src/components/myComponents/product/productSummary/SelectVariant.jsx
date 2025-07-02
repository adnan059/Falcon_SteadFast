import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedVariant,
  setSelectedAttributes,
  resetSelections,
} from "@/redux/productSlice.js";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { formatProductVariations } from "@/lib/utils";

const SelectVariant = () => {
  const dispatch = useDispatch();
  const { selectedProduct, selectedAttributes, selectedVariant } = useSelector(
    (state) => state.product
  );

  // Reset selections when product changes
  useEffect(() => {
    if (selectedProduct?.id) {
      dispatch(resetSelections());
    }
  }, [selectedProduct?.id, dispatch]);

  const variations = useMemo(
    () => formatProductVariations(selectedProduct?.variations || []),
    [selectedProduct]
  );

  const attributeNames = useMemo(() => {
    return [
      ...new Set(
        variations.flatMap((v) => Object.keys(v.variation_attributes || {}))
      ),
    ];
  }, [variations]);

  const handleAttributeChange = (attrName, value) => {
    const updated = { ...selectedAttributes, [attrName]: value };
    dispatch(setSelectedAttributes(updated));

    const match = variations.find((v) =>
      attributeNames.every(
        (key) => v.variation_attributes?.[key] === updated[key]
      )
    );

    dispatch(setSelectedVariant(match || null));
  };

  const isImageSelected = (variant) => {
    return selectedVariant?.id === variant.id;
  };

  const renderAttributeSelector = (attrName) => {
    const values = [
      ...new Set(
        variations
          .map((v) => v.variation_attributes?.[attrName])
          .filter(Boolean)
      ),
    ];

    return (
      <div key={attrName}>
        <p className="font-semibold text-gray-600">
          Select {attrName}:
          <span className="text-black ml-3">
            {selectedAttributes?.[attrName] || "None"}
          </span>
        </p>
        <div className="flex gap-2 mt-1 flex-wrap">
          {values.map((val) => (
            <button
              key={val}
              onClick={() => handleAttributeChange(attrName, val)}
              className={`px-3 py-1 rounded border bg-white ${
                selectedAttributes?.[attrName] === val
                  ? "border-3 border-green-600"
                  : "text-gray-800 border-gray-300"
              }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* First Selector (top) */}
      {attributeNames.length > 0 && renderAttributeSelector(attributeNames[0])}

      {/* Variant Images */}
      <div className="flex flex-wrap gap-3">
        {variations.map((variant) => (
          <div key={variant.id} className="w-24">
            <div className="w-24 overflow-hidden">
              <Zoom zoomMargin={20}>
                <img
                  src={variant.image}
                  alt={`Variant ${variant.sku}`}
                  className={`w-full h-24 object-cover rounded border-2 transition-all duration-150 ${
                    isImageSelected(variant)
                      ? "border-green-600 border-3"
                      : "border-gray-300"
                  }`}
                />
              </Zoom>
            </div>

            <p className="text-sm text-center mt-1">
              {Object.values(variant.variation_attributes).join(" / ")}
            </p>
          </div>
        ))}
      </div>

      {/* Remaining Selectors */}
      {attributeNames
        .slice(1)
        .map((attrName) => renderAttributeSelector(attrName))}
    </div>
  );
};

export default SelectVariant;
