import React from "react";
import Logo from "/assests/Logo Icon.svg";
import yt from "/assests/Yt.svg";
import twitter from "/assests/twitter.svg";
import fb from "/assests/fb.svg";
import pin from "/assests/pin.svg";
import insta from "/assests/insta.svg";
import Fb from "./fb";

const Footer = () => {
  const socialMedia = [
    // { img: <Fb/> },
    { img: twitter },
    { img: insta },
    { img: pin },
    { img: yt },
  ];

  const Category = [
    "Sofa",
    "ArmChair",
    "Wing Chair",
    "Desk Chair",
    "Wooden Chair",
    "Park Bench",
  ];

  const Support = [
    "Help & Support",
    "Tearms & Conditions",
    "Privacy Policy",
    "Help",
  ];
  return (
    <div className="flex justify-center mt-4">
      <div className="flex-col mx-5">
        <div className="flex">
          <img src={Logo} alt="Conforty" className="mx-2 h-7 w-7" />
          <span className="font-bold">Comforty</span>
        </div>
        <div className="flex-col text-[0.9rem]">
          Vivamus tristique odio sit amet velit semper,
          <div>eu posuere turpis interdum.</div>
          <div>Cras egestas purus</div>
        </div>
        <div className="flex">
          <div className="mr-3">
            <Fb />
          </div>
          {socialMedia.map((icon, i) => {
            return <img src={icon.img} alt="" className="mr-3" />;
          })}
        </div>
      </div>
      <div className="mx-5">
        <div className="text-[#9A9CAA] text-[1rem]">Category</div>
        <div className="flex-col mt-2">
          {Category.map((data, i) => {
            return <div className="text-[0.8rem]">{data}</div>;
          })}
        </div>
      </div>
      <div className="mx-5">
        <div className="text-[#9A9CAA] text-[1rem]">Category</div>
        <div className="flex-col mt-2">
          {Support.map((data, i) => {
            return <div className="text-[0.8rem]">{data}</div>;
          })}
        </div>
      </div>
      <div className="mx-5">
        <div className="text-[#9A9CAA] text-[0.9rem]">NEWSLETTER</div>
        <div className="flex">
          <input
            type="text"
            placeholder="Your email"
            className="border-[#E1E3E5] h-[1.8rem] border-2 w-[10rem] rounded mt-2"
          />
          <button className="bg-[#029FAE] flex h-[1.8rem] text-white justify-center mt-2 items-center">
            Subscribe
          </button>
        </div>
        <div className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div>Nullam tincidunt erat enim.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
