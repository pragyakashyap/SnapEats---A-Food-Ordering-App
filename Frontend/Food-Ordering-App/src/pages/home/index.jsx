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
    <div className="home-page">
      <Navbar/>
      <Header />
      <Hero />
      <DealsSection />
      <main>
        <Categories />
        <section className="restaurants">
          <h2>Popular Restaurants</h2>

          <div className="restaurant-container">
            <div className="restaurant-list" onClick={()=>navigate('/product')}>
              <img
                src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732387081/Group_16_abeo7q.png"
                alt="McDonald’s London "
                className="restaurant-image"
              />
              
            </div>
            <div className="restaurant-list">
              <img
                src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732387081/Group_17_u4glfm.png"
                alt="Papa Johns"
                className="restaurant-image"
              />
              
            </div>
            <div className="restaurant-list">
              <img
                src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732387081/Group_18_zlx4hr.png"
                alt="KFC West London"
                className="restaurant-image"
              />
              
            </div>
            <div className="restaurant-list">
              <img
                src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732387081/Group_19_dtk9go.png"
                alt="Texas Chicken"
                className="restaurant-image"
              />
              
            </div>
            <div className="restaurant-list">
              <img
                src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732387082/Group_20_xdbh1r.png"
                alt="Burger King"
                className="restaurant-image"
              />
              
            </div>
            <div className="restaurant-list">
              <img
                src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732387081/Group_21_fb8uwk.png"
                alt="Shaurma 1"
                className="restaurant-image"
              />
              
            </div>
          </div>
        </section>
        <AppDownloadBanner/>
        <div className="ads">
          <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732390021/Group_10_mlehid.png"/>
          <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732390019/Group_16_1_fpitff.png"/>
          
        </div>
      </main>
      <Faq/>
      {/* <Footer /> */}
      <Data/>
      <Footer/>
    </div>
  );
};

export default Home;
