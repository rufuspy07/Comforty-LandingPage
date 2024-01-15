import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Right from "./Right";
import Left from "./Left";
import cart from "/assests/cart.svg";
import Avatar1 from "/assests/Avatar1.svg";
import Avatar2 from "/assests/Avatar2.svg";
import Cart from "./Carts";
import Product from "./Product";
import Testimonial from "./Testimonial";
import TopCategories from "./TopCategories";
import image3 from "/assests/Image3.png";
import image1 from "/assests/Image1.png";
import image2 from "/assests/Image2.png";
// import Right from '/assests/Right.svg'
// import Left from '/assests/Left.svg'

const CustomCarousel = ({
  products,
  title,
  slideShow,
  bg,
  p,
  setCartCount,
}) => {
  const slider = React.useRef(null);
  const [RightArrow, setRightArrow] = useState(false);
  const [LeftArrow, setLeftArrow] = useState(false);
  const [productList, setProductList] = useState([]);

  const Topproducts = [
    { img: image1, name: "Wing Chair", number: "3584" },
    { img: image2, name: "Wooden Chair", number: "3584" },
    { img: image3, name: "Desk Chair", number: "3584" },
    { img: image1, name: "Wing Chair", number: "3584" },
  ];

  let comments = [
    {
      comment:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
      name: "Kristin Watson",
      Designation: "Fashion Designer",
      Img: Avatar1,
    },
    {
      comment:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
      name: "Kristin Watson",
      Designation: "Fashion Designer",
      Img: Avatar2,
    },
    {
      comment:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
      name: "Kristin Watson",
      Designation: "Fashion Designer",
      Img: Avatar1,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slideShow || 3,
    slidesToScroll: 1,
    arrows: false,
  };

  let getProductList = async () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    await fetch(
      "https://dev-api.conqt.com/api/product/Get-All-Products",
      requestOptions
    )
      .then(async (response) => await response.json())
      .then((result) => {
        setProductList(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProductList();
  }, []);

  // useEffect(() => {
  //   console.log("products==>", productList);
  // }, [productList]);
  return (
    <div style={{ backgroundColor: bg }} className={`mt-14`}>
      <div
        className={`flex-col justify-center !pt-${p}`}
        style={{ paddingTop: `${p}rem` }}
      >
        <div className="flex items-center justify-around">
          <div className="font-bold text-3xl">{title}</div>
          <div className="flex">
            <div
              onClick={() => {
                slider?.current?.slickPrev();
                if (!RightArrow) {
                  setRightArrow(true);
                  setLeftArrow(false);
                }
              }}
              className={`justify-center items-center flex cursor-pointer mx-2 ${
                RightArrow ? "bg-[#007580]" : "bg-[#F0F2F3]"
              } rounded-full h-9 w-9 bg-blacks border`}
            >
              <Right RightArrow={RightArrow} />
            </div>
            <div
              onClick={() => {
                slider?.current?.slickNext();
                if (!LeftArrow) {
                  setLeftArrow(true);
                  setRightArrow(false);
                }
              }}
              className={`justify-center items-center ${
                LeftArrow ? "bg-[#007580]" : "bg-[#F0F2F3]"
              } flex cursor-pointer rounded-full h-9 w-9 bg-blacks border`}
            >
              <Left LeftArrow={LeftArrow} />
            </div>
          </div>
        </div>
      </div>
      {/* <h2>Custom Arrows</h2> */}
      <div className="flex-col justify-center items-center mx-[18rem] h-[22rem] mt-4">
        <Slider ref={slider} {...settings}>
          {products === "featured" ? (
            productList.map((data, i) => {
              return <Product index={i} product={data} setCartCount={setCartCount}/>;
            })
          ) : products === "comments" ? (
            comments.map((data, i) => {
              return <Testimonial data={data} index={i} />;
            })
          ) : products === "top" ? (
            Topproducts.map((data, i) => {
              return (
                <div className="" key={i}>
                  <TopCategories data={data} index={i} />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default CustomCarousel;
