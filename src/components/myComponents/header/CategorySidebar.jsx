import React from "react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Loader from "../loader/Loader";

const CategorySidebar = ({ categories, loading }) => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center space-x-2  border-r-1 border-[#b3b3b3] pr-4 sm:pr-11 cursor-pointer">
        <Menu className="text-[var(--sec-theme)]" size={20} />
        <span className={`text-[var(--main-theme)]`}>Categories</span>
      </SheetTrigger>
      <SheetContent
        className={
          "z-100 bg-[var(--main-theme)] [&>button>svg]:w-10 [&>button>svg]:h-10 text-white w-[260px]"
        }
        side="left"
      >
        <SheetHeader>
          <SheetTitle className={`text-[3rem] text-white`}>FALCON</SheetTitle>
        </SheetHeader>

        <SheetDescription
          className={"px-4 text-[var(--sec-theme)] font-bold mt-15"}
        >
          <span style={{ fontSize: "var(--fs-f)" }}>Product Categories</span>
        </SheetDescription>

        <ul className="mt-4 space-y-2">
          {loading ? (
            <Loader />
          ) : (
            categories.map((cat) => (
              <li
                key={cat.id}
                className="px-4 text-white"
                style={{ fontSize: "var(--fs-d)" }}
              >
                {cat.name}
              </li>
            ))
          )}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default CategorySidebar;
