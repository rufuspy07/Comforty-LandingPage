import React, { useEffect, useState } from "react";
import Product from "./Product";
import Image3 from "../../public/assests/Image (3).png";
import Image4 from "../../public/assests/Image (4).png";
import Image5 from "../../public/assests/Image (5).png";
import Image6 from "../../public/assests/Image (6).png";
import Image7 from "../../public/assests/Image (7).png";
import Image8 from "../../public/assests/Image (8).png";
import Image9 from "../../public/assests/Image (9).png";
import Image10 from "../../public/assests/Image (10).png";

const OurProducts = () => {
  const [highlight, setHightLight] = useState(null);
  let productList = [
    { image_url: Image3 },
    { image_url: Image4 },
    { image_url: Image5 },
    { image_url: Image6 },
    { image_url: Image7 },
    { image_url: Image8 },
    { image_url: Image9 },
    { image_url: Image10 },
  ];

  let menus = ["ALL", "NEWEST", "TRENDING", "BEST SELLERS", "FEATURED"];
  return (
    <div className="">
      <div className="flex justify-center font-bold text-2xl m-4">
        Our Products
      </div>
      <div className="flex justify-center items-center m-4 cursor-pointer">
        {menus.map((data, i) => {
          return (
            <div
              className=""
              key={i}
              onClick={() => {
                setHightLight(i);
              }}
            >
              <div
                className={`m-2  ${
                  highlight === i
                    ? "border-[#01AD5A] border-b-2 font-semibold text-black"
                    : ""
                } text-[#9A9CAA]`}
              >
                {data}
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid-cols-4 gap-4 grid mx-28">
        {productList.map((data, i) => (
          <div key={i}>
            <Product product={data} index={i} w={10} h={10} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
