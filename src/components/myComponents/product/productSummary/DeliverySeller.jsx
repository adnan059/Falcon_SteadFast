import React from "react";
import { useSelector } from "react-redux";
import merchantLogo from "@/assets/images/merchantLogo.png";
import merchantLevel from "@/assets/images/merchantLevel.png";
import { BadgeCheck, Box, MessageCircleMore } from "lucide-react";
const DeliverySeller = () => {
  const { selectedProduct, selectedVariant } = useSelector(
    (state) => state.product
  );
  const { cartItems } = useSelector((state) => state.cart);

  console.log("selectedProduct ==>", selectedProduct);
  console.log("selectedVariant ==>", selectedVariant);
  console.log("cartItems ==>", cartItems);

  console.log();
  return (
    <div className="flex flex-col gap-8 mt-10 lg:mt-0">
      <div className="delivery p-6 rounded-xl border-2  max-w-[313px]">
        <h2
          style={{ fontSize: "var(--fs-e)" }}
          className={`text-[var(--text-color2)] mb-6`}
        >
          Delivery Options
        </h2>

        <div className="regular mb-6 ">
          <p className="flex items-center gap-2">
            <Box className="text-[var(--sec-theme)]" /> <span>Regular</span>
          </p>
          <p style={{ fontSize: "var(--fs-b)" }} className="mt-1">
            Delivery within 2-3 days
          </p>
        </div>

        <div className="express">
          <p className="flex items-center gap-1">
            <Box className="text-[var(--sec-theme)]" />{" "}
            <span className="text-[#CBD5E1]">Express</span>{" "}
            <span className="text-red-500 text-sm ml-3">Not Available</span>
          </p>
          <p
            style={{ fontSize: "var(--fs-b)" }}
            className="text-[#CBD5E1] mt-1"
          >
            Delivery within 24 hours
          </p>
        </div>
      </div>

      <div className="seller max-w-[313px] rounded-xl border-2 p-6 ">
        <p
          className={`text-[var(--text-color2)] capitalize mb-6`}
          style={{ fontSize: "var(--fs-b)" }}
        >
          sold by
        </p>

        <div className={`flex justify-start my-2 items-center gap-3 mb-6 `}>
          <img src={merchantLogo} alt="" />
          <div>
            <p className="flex items-center gap-2 mb-2">
              <span
                className="uppercase text-[var(--text-color2)]"
                style={{ fontSize: "var(--fs-c)" }}
              >
                {selectedProduct?.merchant?.shop_name}
              </span>{" "}
              <BadgeCheck className=" text-white fill-blue-700" />
            </p>
            <img src={merchantLevel} alt="" />
          </div>
        </div>

        <div className="flex items-center gap-6 border-b-2 pb-5">
          <button className="flex items-center py-1 px-6  rounded-lg text-[var(--sec-theme)] bg-green-100">
            <MessageCircleMore />{" "}
            <span className="font-bold" style={{ fontSize: "var( --fs-c)" }}>
              Chat Now
            </span>
          </button>
          <button
            style={{ fontSize: "var( --fs-c)" }}
            className="font-bold py-1 px-6  rounded-lg text-[var(--text-color2)] bg-gray-100"
          >
            View Shop
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-5">
          <div className="flex justify-center items-center flex-col">
            <p
              style={{ fontSize: "var(--fs-b)" }}
              className="text-[var(--text-color2)]"
            >
              Ship On Time
            </p>
            <p
              style={{ fontSize: "var(--fs-h)" }}
              className="text-[var(--text-color2)]"
            >
              100%
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <p
              style={{ fontSize: "var(--fs-b)" }}
              className="text-[var(--text-color2)]"
            >
              Chat Response
            </p>
            <p
              style={{ fontSize: "var(--fs-h)" }}
              className="text-[var(--text-color2)]"
            >
              90%
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <p
              style={{ fontSize: "var(--fs-b)" }}
              className="text-[var(--text-color2)]"
            >
              Shop Rating
            </p>
            <p
              style={{ fontSize: "var(--fs-h)" }}
              className="text-[var(--text-color2)]"
            >
              99.8%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySeller;
