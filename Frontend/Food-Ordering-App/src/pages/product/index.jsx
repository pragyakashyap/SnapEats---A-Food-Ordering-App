import Header from "../header";
import Navbar from "../navbar";
import Information from "./Information";
import McDonaldsHeader from "./McDonaldHeader";
import Burger from "./menus/Burger";
import ColdDrinks from "./menus/ColdDrinks";
import Fries from "./menus/Fries";
import NavSection from "./NavSection";
import OfferCard from "./OfferCard";
import OffersContainer from "./OffersContainer";
import Footer from "../footer";
import "./product.css";
import Reviews from "./reviews";
import Restaurant from "../home/restaurants";
import MapComponent from "./map";
// import { useState } from "react";

const Product = () => {
  // const [isCartOpen, setIsCartOpen] = useState(false);

  // Toggle cart visibility
  // const toggleCart = () => {
  //   setIsCartOpen(!isCartOpen);
  // };
  return (
    <>
    <div className="product-page">
      <Navbar />
      <Header />
      <McDonaldsHeader />
      <OffersContainer />
      <NavSection className="no-margin" />
      <OfferCard/>
      <Burger/>
      <Fries/>
      <ColdDrinks/>
      <Information/>
      <MapComponent/>
      <Reviews/>
      <Restaurant title="Similar Restaurants"/>
    </div>
     <Footer/>
    </>
  );
};

export default Product;
