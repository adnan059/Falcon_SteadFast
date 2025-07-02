import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Shipping from "./Shipping";

const OrderSummary = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [deliveryType, setDeliveryType] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [termsChecked, setTermsChecked] = useState(false);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  }, [cartItems]);

  const deliveryFee = useMemo(() => {
    if (!deliveryType) return 0;
    return cartItems.reduce((sum, item) => {
      return sum + (item.delivery_fee?.[deliveryType] || 0);
    }, 0);
  }, [cartItems, deliveryType]);

  const subtotal = cartTotal + deliveryFee - couponDiscount;

  const applyCoupon = () => {
    const normalized = couponCode.trim().toLowerCase();
    if (normalized === "save50") {
      setCouponDiscount(50);
    } else if (normalized === "free100") {
      setCouponDiscount(100);
    } else {
      setCouponDiscount(0);
    }
  };

  const canProceed = termsChecked && deliveryType;

  return (
    <div className="bg-white rounded-xl flex-1 p-6 max-w-[420px] ">
      <h2
        className="text-[#475569] font-medium mb-8"
        style={{ fontSize: "var(--fs-g)" }}
      >
        Order Summary
      </h2>

      <div className="flex justify-between items-center mb-7">
        <p className="text-[#475569] font-medium">
          Price ({cartItems.length} items)
        </p>
        <p className="font-semibold">৳{cartTotal}</p>
      </div>

      <Shipping deliveryType={deliveryType} setDeliveryType={setDeliveryType} />

      {deliveryType && (
        <div className="flex justify-between mb-7 text-gray-600">
          <p className="text-[#475569] font-medium">
            Selected Delivery Charge:
          </p>
          <p className="font-semibold text-gray-800">৳{deliveryFee}</p>
        </div>
      )}

      <div className="space-y-2 mb-7">
        <div className="flex items-center">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Store / Falcon coupon"
            className="w-full border py-1.5 px-2 rounded-tl-md rounded-bl-md"
          />
          <button
            onClick={applyCoupon}
            className="py-2 px-4 bg-[var(--sec-theme)] text-white rounded-tr-md rounded-br-md"
          >
            Apply
          </button>
        </div>

        {couponDiscount > 0 && (
          <p className="text-green-500 text-[1.2rem] font-medium">
            Coupon applied: −৳{couponDiscount}
          </p>
        )}

        <p className="text-[1.2rem] text-gray-500">
          Try: <span className="text-green-600">save50</span>,{" "}
          <span className="text-green-600">free100</span>
        </p>
      </div>

      <div className="flex justify-between items-center border-t border-dotted pt-4 mb-7">
        <p className="font-medium">Sub Total</p>
        <p className="font-semibold" style={{ fontSize: "var(--fs-f)" }}>
          ৳{subtotal}
        </p>
      </div>

      <button
        disabled={!canProceed}
        className={`w-full py-3 rounded-md font-semibold text-white mb-7 ${
          canProceed
            ? "bg-[var(--sec-theme)] hover:bg-green-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Proceed to Checkout
      </button>

      <div>
        <input
          type="checkbox"
          id="tc"
          checked={termsChecked}
          onChange={() => setTermsChecked((prev) => !prev)}
          className={`accent-[#00a788] rounded-sm ${
            termsChecked ? "bg-[#00a788]" : ""
          }`}
        />
        <label htmlFor="tc" className="text-[#475569] ml-3">
          I agree to the Terms and Conditions, Privacy Policy and Return Policy.
        </label>
      </div>
    </div>
  );
};

export default OrderSummary;
