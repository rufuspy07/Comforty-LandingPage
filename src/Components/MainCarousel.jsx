import React from "react";
import Slider from "react-slick";
import chair from "../../public/assests/Product Image.png";
import greenLeft from "../../public/assests/greenLeft.svg";
import greenRight from "../../public/assests/greenRight.svg";
import whteCheck from "../../public/assests/whiteCheck.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MainCarousel = () => {
  const slider = React.useRef(null);

  let product = [{ img: chair }, { img: chair }, { img: chair }];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="bg-[#F0F2F3] relative h-[25rem] mx-28 border rounded-b-2xl mt-[7rem]">
      <Slider ref={slider} {...settings}>
        {product.map((data, i) => {
          return (
            <div className="w-full">
              <div className="flex items-center justify-around" key={i}>
                <div>
                  <div className="text-sm">Welcome to chairy</div>
                  <div className="flex-col font-extrabold text-4xl">
                    Best Furniture <div>Collection for your</div> interior.
                  </div>
                  <button className="bg-[#029FAE] flex text-white justify-center items-center">
                    Shop Now
                    <img src={whteCheck} alt="" className="ml-2" />
                  </button>
                </div>
                <img
                  src={data.img}
                  alt=""
                  className="w-[16.5rem] flex justify-center h-[22rem] mt-9 object-contain"
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <div
        onClick={() => {
          slider?.current?.slickPrev();
        }}
        className="bg-white absolute left-3 top-[10rem] items-center cursor-pointer w-8 h-8 flex justify-center border-0 rounded-full"
      >
        <img src={greenLeft} alt="" className="w-6 h-6" />
      </div>
      <div
        onClick={() => {
          slider?.current?.slickNext();
        }}
        className="bg-white absolute cursor-pointer right-3 top-[10rem] w-8 h-8 items-center flex justify-center border-0 rounded-full"
      >
        <img src={greenRight} alt="" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default MainCarousel;
