import React from "react";
import image3 from "/assests/Image3.png";
import image1 from "/assests/Image1.png";
import image2 from "/assests/Image2.png";

const TopCategories = ({ data, i }) => {
  const Topproducts = [
    { img: image1, name: "Wing Chair", number: "3584" },
    { img: image2, name: "Wooden Chair", number: "3584" },
    { img: image3, name: "Desk Chair", number: "3584" },
  ];
  return (
    <>
      {/* {products.map((product, i) => { */}
      {/* return ( */}
      <div className="m-2 relative" key={i}>
        <img
          src={data.img}
          alt="img"
          className="w-[15rem] h-[15rem] border rounded"
        />
        <div className="flex-col bg-black opacity-[0.7] p-2 border rounded-b-lg absolute top-[11.5rem] w-full">
          <div className="text-white font-medium text-[1rem]">{data.name}</div>
          <div className="text-white text-[0.6rem]">{`${data.number} Products`}</div>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
    </>
  );
};

export default TopCategories;
