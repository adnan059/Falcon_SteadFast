import React from "react";
import CategorySidebar from "./CategorySidebar";
import Categories from "./Categories";
import UtilityLinks from "./UtilityLinks";
import useCategory from "@/hooks/useCategory";
import BreadCrumbHeader from "./BreadCrumbHeader";

const SubHeader = () => {
  const { categories, loading } = useCategory();

  return (
    <section className="subHeader z-30   bg-[#f2f6fa] top-[7.3rem] sm:top-[8.7rem] fixed left-0 right-0 shadow-xl">
      <div className="py-3 px-8 gap-6 bg-white">
        <div className="flex justify-between  items-center  mx-auto max-w-[1280px]">
          <CategorySidebar categories={categories} loading={loading} />
          <Categories categories={categories} loading={loading} />
          <UtilityLinks />
        </div>
      </div>
      <BreadCrumbHeader />
    </section>
  );
};

export default SubHeader;
