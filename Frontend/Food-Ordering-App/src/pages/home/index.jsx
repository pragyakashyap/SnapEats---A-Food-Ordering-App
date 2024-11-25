import Header from "../header";
import AppDownloadBanner from "./appDownloadBanner";
import Categories from "./categories";
import DealsSection from "./deals";
import Hero from "./hero";
import Footer from "../footer";
import "./home.css";
import Faq from "./faq";
import Data from "./data";
import {useNavigate} from "react-router-dom"
import Navbar from "../navbar";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <>
    <div className="home-page">
      <Navbar/>
      <Header />
      <Hero/>
      <DealsSection />
      <Categories/>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
