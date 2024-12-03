import Header from "../header";
import AppDownloadBanner from "./appDownloadBanner";
import Categories from "./categories";
import DealsSection from "./deals";
import Hero from "./hero";
import Footer from "../footer";
import "./home.css";
import Faq from "./faq";
import Data from "./data";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import Restaurant from "./restaurants";
import Cards from "./card";
import { useRef } from "react";

const Home = () => {
  const navigate = useNavigate();
  const categoriesRef = useRef(null);
  const dealsRef = useRef(null);
  const restaurantsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="home-page">
        <Navbar />
        <Header
          scrollToCategories={() => scrollToSection(categoriesRef)}
          scrollToDeals={() => scrollToSection(dealsRef)}
          scrollToRestaurants={() => scrollToSection(restaurantsRef)}
        />
        <Hero />
        <div ref={dealsRef}>
          <DealsSection />
        </div>
        <div ref={categoriesRef}>
          <Categories />
        </div>
        <div ref={restaurantsRef}>
          <Restaurant title="Popular Restaurants" />
        </div>
        <AppDownloadBanner />
        <Cards />
        <Faq />
        <Data />
      </div>
      <Footer />
    </>
  );
};

export default Home;
