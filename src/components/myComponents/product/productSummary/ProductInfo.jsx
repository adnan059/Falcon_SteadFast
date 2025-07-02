import React from "react";
import { useSelector } from "react-redux";
import promotionImg from "@/assets/images/promotion.png";
import { ChevronDown, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const ProductInfo = () => {
  const { selectedProduct, selectedVariant } = useSelector(
    (state) => state.product
  );

  return (
    <div className="mt-10 md:mt-0">
      <h2 style={{ fontSize: "var(--fs-f)" }} className="mb-4 font-medium">
        {selectedProduct?.name}
      </h2>
      {selectedProduct?.rating_avg ? (
        <div className="flex justify-center items-center gap-2 my-5">
          <p>{selectedProduct?.rating_avg}</p>
          <div className="flex justify-center items-center gap-2">
            <Star /> <Star />
          </div>
          <p className="flex justify-center items-center gap-2">
            {selectedProduct?.rating_count} <ChevronDown />
          </p>
        </div>
      ) : null}

      <div className="price my-5 flex justify-start gap-4 items-start">
        <p
          className="discountPrice text-[var(--sec-theme)]"
          style={{ fontSize: "var(--fs-g)" }}
        >
          ৳{" "}
          {formatPrice(
            selectedVariant?.discount_price ??
              selectedProduct?.product_detail?.discount_price
          )}
        </p>

        <p className="regularPrice line-through text-[#94A3B8] ">
          ৳{" "}
          {selectedVariant?.regular_price ??
            selectedProduct?.product_detail?.regular_price}
        </p>
      </div>

      <div className="promotion">
        <img src={promotionImg} alt="" />
      </div>
    </div>
  );
};

export default ProductInfo;
