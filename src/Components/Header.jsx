import React, { useEffect, useState } from "react";
import check from "/assests/check.svg";
import Logo from "/assests/Logo Icon.svg";
import search from "/assests/search.svg";
import cart from "/assests/cart.svg";
import heart from "/assests/Heart 1.svg";
import profile from "/assests/Profile.svg";
import menu from "/assests/menu.svg";
import Button from "./Button";

const Header = ({ count }) => {
  const [focusOn, setFocusOn] = useState("");

  useEffect(() => {
    console.log("focusOn==>", focusOn);
  }, [focusOn]);

  const menus = ["Home", "Shop", "Product", "Pages", "About"];
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div
        className="topHeader flex items-center justify-around text-[0.5rem] h-6"
        style={{ backgroundColor: "#272343", color: "#FFFFFF" }}
      >
        {/* <div className="flex items-center justify-center"> */}
        <span className="flex items-center justify-start">
          <img src={check} className="w-[0.6rem] h-[0.8rem]" />
          Free shipping on all orders over $50
        </span>
        <div className="">
          <span style={{ margin: "0.4rem" }}>
            <select
              name=""
              style={{
                backgroundColor: "#272343",
                color: "#FFFFFF",
                border: "none",
              }}
            >
              <option>Eng</option>
              <option>Hin</option>
            </select>
          </span>
          <span style={{ margin: "0.4rem" }}>Faqs</span>
          <span style={{ margin: "0.54rem" }}>Need Help</span>
        </div>
        {/* </div> */}
      </div>

      <div
        className="middleHeader h-[3rem] flex items-center justify-around w-full"
        style={{ background: "#F0F2F3" }}
      >
        <div className="flex items-center justify-around w-full">
          <div className="flex items-center">
            <img src={Logo} alt="Conforty" className="mx-2 h-7 w-7" />
            <span className="font-bold">Comforty</span>
          </div>
          <div className="bg-white flex border w-[20rem] relative text-sm rounded">
            <input
              className="h-7 border rounded p-2 focus:outline-none"
              style={{ borderColor: "white" }}
              type="text"
              placeholder="Search here..."
            />
            <img
              src={search}
              alt="search"
              className="px-1 absolute right-0 top-1"
            />
          </div>
          <div className="flex items-center justify-end">
            {/* <div className="bg-white flex h-8 w-[5rem] border rounded-md justify-center items-center mx-2"> */}

            <Button h={8} w={20} styles={"p-5"}>
              <img src={cart} alt="cart" className="w-3 h-3 mr-1" />
              <span className="text-[0.6rem] mr-1">Cart</span>
              <span
                style={{ backgroundColor: "#007580", color: "white" }}
                className="border text-sm outline-none w-5 h-5 flex items-center text-[0.6rem] justify-center rounded-[200rem]"
              >
                {count}
              </span>
            </Button>
            <Button h={8} w={9}>
              <img src={heart} alt="heart" className="w-4 h-4" />
            </Button>
            <Button h={8} w={9}>
              <div>
                <img src={profile} alt="profile" className="w-4 h-4" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="bottomHeader justify-around flex items-center bg-white border-b h-10">
        <div className="flex items-center">
          <Button h={6} w={24} styles={"border rounded"}>
            <img src={menu} alt="cart" className="w-3 h-3 mr-1" />
            <span className="text-[0.6rem] mr-1 text-nowrap p-1">
              All Categories
            </span>
          </Button>
          <div className="flex">
            {menus.map((menu, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setFocusOn(i);
                  }}
                  className={`${
                    focusOn === i ? "text-[#007580]" : "text-[#636270]"
                  } text-[0.7rem] mx-1 cursor-pointer`}
                >
                  {menu}
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-[0.7rem]" style={{ color: "#636270" }}>
          Contact : <span className="font-semibold">(808) 555-0111</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
