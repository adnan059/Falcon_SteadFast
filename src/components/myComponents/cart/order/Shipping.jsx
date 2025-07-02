import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const Shipping = ({ deliveryType, setDeliveryType }) => {
  const options = [
    { id: "inside_dhaka", label: "Inside Dhaka" },
    { id: "outside_dhaka", label: "Outside Dhaka" },
    { id: "express", label: "Express Delivery" },
  ];

  return (
    <div className="mb-7">
      <p className="text-[#475569] font-medium mb-5">Shipping Fee</p>
      <Select value={deliveryType} onValueChange={setDeliveryType}>
        <SelectTrigger className="border rounded-md px-4 py-2 w-full text-[1.4rem]">
          <SelectValue placeholder="Select Delivery Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              className={`text-[1.4rem]`}
              key={option.id}
              value={option.id}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Shipping;
