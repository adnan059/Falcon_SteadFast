import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { removeSelectedItems } from "@/redux/cartSlice";
import { toast } from "sonner";

const CartDetails = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [selectedItems, setSelectedItems] = useState([]);

  const isAllSelected =
    cartItems.length > 0 && selectedItems.length === cartItems.length;

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      const all = cartItems.map((item) => ({
        productId: item.productId,
        variantId: item.variantId,
      }));
      setSelectedItems(all);
    } else {
      setSelectedItems([]);
    }
  };

  const handleClearSelected = () => {
    if (!confirm("This Action Will Delete All The Items Selected")) return;
    dispatch(removeSelectedItems(selectedItems));
    setSelectedItems([]);
    toast.success("Items Deleted Successfully", {
      duration: 2000,
      style: { backgroundColor: "var(--sec-theme)", color: "white" },
    });
  };

  return (
    <div className="bg-white rounded-xl p-6 flex-1">
      <div className="cartHeader flex justify-between items-center">
        <h2 className="font-semibold" style={{ fontSize: "var(--fs-i)" }}>
          My Cart ({cartItems.length})
        </h2>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="selectAll"
              checked={isAllSelected}
              onChange={toggleSelectAll}
            />
            <label htmlFor="selectAll">Select All</label>
          </div>
          <button
            disabled={selectedItems.length === 0}
            onClick={handleClearSelected}
            className="bg-red-500 text-white px-4 py-2 rounded-lg disabled:opacity-40"
          >
            Clear All
          </button>
        </div>
      </div>

      <div className="cartItems mt-10 space-y-6">
        {cartItems.map((cartItem) => (
          <CartItem
            key={`${cartItem.productId}-${cartItem.variantId || "base"}`}
            cartItem={cartItem}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        ))}
      </div>
    </div>
  );
};

export default CartDetails;
