import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logoImg.png";
//import "../../../assets/styles/header.css";

import { Search, ShoppingCart, User, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <header className="text-white fixed top-0 left-0 right-0 z-30 px-8 min-[1290px]:px-0 py-7 bg-[var(--main-theme)]">
      <div className="headerContainer relative max-w-[1280px] mx-auto flex justify-between items-center gap-16 ">
        {/* logo */}
        <Link to={"/"} className="headerLogo">
          <div className="headerLogoContent  flex items-center justify-center gap-[2px]">
            <img
              src={logoImg}
              alt="logo"
              className="headerLogoImg  h-10 w-10"
            />
            <span
              style={{ fontSize: "var(--fs-g)" }}
              className="headerLogoText  font-bold leading-6 tracking-[0%]"
            >
              FALCON
            </span>
          </div>
        </Link>

        {/* searchbar */}
        <div
          className={`search ${
            showSearch
              ? "flex absolute bottom-[-60px] border border-[var(--main-theme)]"
              : "hidden"
          } sm:flex max-w-[763px] w-full items-center justify-center rounded-[4px] transition-all duration-1000 bg-white`}
        >
          <input
            className="searchInput  w-full bg-white px-4 py-[14px] rounded-l-[4px] font-normal text-[var(--fs-d)] leading-6 tracking-[0%] focus:outline-none"
            style={{ color: "var(--text-color2)" }}
            type="text"
            placeholder="Search for anything..."
          />
          <button className="searchBtn bg-[var(--sec-theme)] p-[10px] rounded-r-[4px]">
            <Search size={32} />
          </button>
        </div>

        {/* header actions */}
        <div className="headerActions   flex items-center justify-center gap-[20px]">
          <button
            className="searchIcon  block sm:hidden cursor-pointer"
            onClick={toggleSearch}
          >
            {showSearch ? <X size={32} /> : <Search size={32} />}
          </button>

          <Link className="relative" to={"/cart"}>
            <ShoppingCart size={32} />
            <Badge
              className={
                "absolute top-[-15px] right-[-20px] bg-red-600 rounded-full py-2 px-4 shopping-badge text-3xl "
              }
            >
              {cartItems?.length || 0}
            </Badge>
          </Link>

          <a href="#">
            <User size={32} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
