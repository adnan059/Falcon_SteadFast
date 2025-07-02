import React from "react";
import { useDispatch } from "react-redux";
import { ChevronRight, Trash2 } from "lucide-react";
import { updateQuantity, removeItem } from "@/redux/cartSlice";
import { formatAttributes } from "@/lib/utils";
import gift from "@/assets/images/gift.png";

const CartItem = ({ cartItem, selectedItems, setSelectedItems }) => {
  const dispatch = useDispatch();

  const isSelected = selectedItems.some(
    (i) =>
      i.productId === cartItem.productId && i.variantId === cartItem.variantId
  );

  const toggleSelect = () => {
    if (isSelected) {
      setSelectedItems((prev) =>
        prev.filter(
          (i) =>
            i.productId !== cartItem.productId ||
            i.variantId !== cartItem.variantId
        )
      );
    } else {
      setSelectedItems((prev) => [
        ...prev,
        {
          productId: cartItem.productId,
          variantId: cartItem.variantId,
        },
      ]);
    }
  };

  const handleQtyChange = (delta) => {
    const newQty = cartItem.quantity + delta;
    if (newQty >= 1 && newQty <= cartItem.total_stock_qty) {
      dispatch(
        updateQuantity({
          productId: cartItem.productId,
          variantId: cartItem.variantId,
          quantity: newQty,
        })
      );
    }
  };

  const handleDelete = () => {
    dispatch(
      removeItem({
        productId: cartItem.productId,
        variantId: cartItem.variantId,
      })
    );
    setSelectedItems((prev) =>
      prev.filter(
        (i) =>
          i.productId !== cartItem.productId ||
          i.variantId !== cartItem.variantId
      )
    );
  };

  return (
    <div>
      {/* Merchant Info */}
      <div className="flex items-center gap-4 p-2 bg-[var(--main-bg)] text-[#334155]">
        <img src={gift} alt="shop" className="ml-3" />
        <span style={{ fontSize: "var(--fs-c)" }}>
          {cartItem?.merchant?.shop_name}
        </span>
        <ChevronRight size={14} />
      </div>

      {/* Item Details */}
      <div className="px-2 py-4 flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-4">
        <div className="flex gap-4 items-start">
          <input type="checkbox" checked={isSelected} onChange={toggleSelect} />

          <img
            src={cartItem?.product_pic}
            alt={cartItem?.product_name}
            className="max-w-[100px] aspect-square object-cover"
          />

          <div className="space-y-3">
            <p className="font-semibold">{cartItem?.product_name}</p>
            <p className="text-[#475569]">
              {formatAttributes(cartItem?.variation_attributes)}
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4">
              <div className="qtySelect flex items-center justify-between py-1 px-1 max-w-[160px] w-full  gap-4 rounded-4xl border-2">
                <button
                  onClick={() => handleQtyChange(-1)}
                  className="bg-gray-300 px-3 rounded-full"
                >
                  −
                </button>
                <span>{cartItem.quantity}</span>
                <button
                  onClick={() => handleQtyChange(1)}
                  className="bg-gray-300 px-3 rounded-full"
                  disabled={cartItem.quantity >= cartItem.total_stock_qty}
                >
                  +
                </button>
              </div>
              <button onClick={handleDelete}>
                <Trash2 className="text-red-500 hover:scale-105" />
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="flex items-start gap-3">
          <p style={{ fontSize: "var(--fs-f)" }} className="font-bold">
            ৳{cartItem.totalPrice}
          </p>
          <p className="text-[#475569] line-through">
            ৳{cartItem.regular_total_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
