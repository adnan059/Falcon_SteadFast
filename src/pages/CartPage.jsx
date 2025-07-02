import CartDetails from "@/components/myComponents/cart/cartDetails/CartDetails";
import OrderSummary from "@/components/myComponents/cart/order/OrderSummary";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <section className="max-w-[1440px]   mx-auto pt-72">
      <div className="sectionContainer -mt-10 px-8 py-8  min-[1290px]:px-0  max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-center gap-6 items-center lg:items-start">
        {cartItems?.length > 0 ? (
          <>
            <CartDetails />
            <OrderSummary />
          </>
        ) : (
          <div className="min-h-96 flex justify-center items-center w-full">
            <h1 className="text-red-500 text-5xl font-bold">Empty Cart</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
