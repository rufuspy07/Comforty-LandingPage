import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Components/Header";
import CustomCarousel from "./Components/CustomCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Components/Product";
import OurProducts from "./Components/OurProducts";
import MainCarousel from "./Components/MainCarousel";
import Footer from "./Components/Footer";
// import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div>
      <Header count={cartCount} />
      <MainCarousel />
      <CustomCarousel
        setCartCount={setCartCount}
        products={"featured"}
        title={"Featured Products"}
        slideShow={3}
        p={0}
      />
      <CustomCarousel
        products={"top"}
        title={"Top categories"}
        slideShow={3}
        p={0}
      />
      <OurProducts />
      <CustomCarousel
        products={"comments"}
        title={"What client says about us"}
        p={2}
        slideShow={2}
        bg={"#F0F2F3"}
      />
      <CustomCarousel
        setCartCount={setCartCount}
        products={"featured"}
        title={"Recently Added"}
        slideShow={3}
        p={0}
      />
      <Footer />
    </div>
  );
}

export default App;
