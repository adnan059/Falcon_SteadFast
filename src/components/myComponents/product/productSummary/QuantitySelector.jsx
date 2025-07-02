import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import fallbackImg from "@/assets/images/fallback.png";
import { toast } from "sonner";

const QuantitySelector = () => {
  const dispatch = useDispatch();
  const { selectedProduct, selectedVariant } = useSelector(
    (state) => state.product
  );

  const isVariant = selectedProduct?.is_variant;
  const priceSource = isVariant
    ? selectedVariant
    : selectedProduct?.product_detail;

  const discountPrice = parseFloat(priceSource?.discount_price) || 0;
  const regularPrice = parseFloat(priceSource?.regular_price) || 0;
  const finalPrice = discountPrice || regularPrice;

  const stockQty = isVariant
    ? selectedVariant?.total_stock_qty
    : selectedProduct?.total_stock_qty;

  const [quantity, setQuantity] = useState(1);

  // 🧾 Unified delivery_fee object from product or variant source
  const deliverySource =
    selectedProduct?.shop_product || selectedVariant || selectedProduct;

  const delivery_fee = {
    inside_dhaka: parseFloat(deliverySource?.id_delivery_fee) || 0,
    outside_dhaka: parseFloat(deliverySource?.od_delivery_fee) || 0,
    express: parseFloat(deliverySource?.ed_delivery_fee) || 0,
  };

  const handleAddToCart = () => {
    if (!finalPrice || quantity > stockQty || quantity < 1) {
      toast.error("Invalid product or quantity.");
      return;
    }

    dispatch(
      addToCart({
        productId: selectedProduct.id,
        variantId: isVariant ? selectedVariant?.id : null,
        quantity,
        unitPrice: finalPrice,
        regular_unit_price: regularPrice,
        product_name: selectedProduct?.name || "",
        product_slug: selectedProduct?.slug || "",
        product_pic:
          selectedVariant?.image || selectedProduct?.thumbnail || fallbackImg,
        variation_attributes: selectedVariant?.variation_attributes,
        merchant: selectedProduct?.merchant,
        total_stock_qty: stockQty,
        delivery_fee, // ✅ Single object for all fee types
      })
    );

    toast.success("Product Added to Cart", {
      duration: 2000,
      style: { backgroundColor: "var(--sec-theme)", color: "white" },
    });
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => {
      if (stockQty && prev < stockQty) {
        return prev + 1;
      }
      return prev;
    });
  };

  const disableAddToCart =
    (isVariant && !selectedVariant) || quantity > stockQty || quantity < 1;

  return (
    <div className="flex justify-center flex-col gap-4 mt-6">
      <h2 className="font-medium">Quantity</h2>

      <div className="flex rounded-2xl justify-between max-w-[195px] border px-3 py-1">
        <button
          onClick={handleDecrease}
          className="text-xl font-bold bg-gray-300 rounded-full px-3"
        >
          −
        </button>
        <span className="px-3 font-medium">{quantity}</span>
        <button
          onClick={handleIncrease}
          disabled={quantity >= stockQty}
          className={`text-xl font-bold bg-gray-300 rounded-full px-3 ${
            quantity >= stockQty ? "text-red-400 cursor-not-allowed" : ""
          }`}
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={disableAddToCart}
        className={`px-5 py-2 rounded-md font-semibold text-white ${
          disableAddToCart
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[var(--sec-theme)] hover:bg-green-700"
        }`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default QuantitySelector;
