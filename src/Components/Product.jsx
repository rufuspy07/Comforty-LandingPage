import React, { useState } from "react";
import Cart from "./Carts";
import Heart from "./Heart";

const Product = ({ product, index, w, h, setCartCount }) => {
  const [cart, setCart] = useState(false);
  const [heart, setHeart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={index}
      className="!w-[15rem] relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={product.image_url}
        alt="img"
        className={`!w-[${w || 15}rem] !h-[${w || 15}rem] border rounded`}
      />
      <div className="flex justify-between">
        <div>
          <div className={`font-semibold ${isHovered && "text-[#029FAE]"}`}>
            Library Stool Chair
          </div>
          <div className="font-bold">$20</div>
        </div>
        <div
          onClick={() => {
            setCart((prev) => !prev);
            if (!cart) {
              setCartCount((prev) => prev + 1);
            } else {
              setCartCount((prev) => prev - 1);
            }
          }}
          className={`${
            cart ? "bg-[#029FAE]" : "bg-[#F0F2F3]"
          } cursor-pointer w-8 flex justify-center items-center mt-2 h-8 rounded`}
        >
          <Cart cart={cart} />
        </div>
        {isHovered && (
          <div
            onClick={() => {
              setHeart((prev) => !prev);
            }}
            className={`${
              heart ? "bg-[#029FAE]" : "bg-[#F0F2F3]"
            } cursor-pointer w-8 flex justify-center items-center mt-2 h-8 absolute rounded top-0 right-1`}
          >
            <Heart heart={heart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
