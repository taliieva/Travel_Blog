import React from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import { Revolution } from "../../components/Footer/Footer.js";
import {OurDestination} from "../../components/Footer/Footer.js";
import HomeCardListTrend, { Asia, Europe, HomeCardListBrand } from "../../components/HomeCardList/HomeCardList.jsx";
import WhyUs from "../../components/WhyUs/WhyUs.jsx";
import HomePageVideo from "../../components/Videos/Video.jsx";
import LocalExpert from "../../components/LocalExpert/Local.jsx";

function HomePage() {
    return (
      <div className="home">
       <Header />
       <HomePageVideo/>
       <HomeCardListTrend/>
       <HomeCardListBrand/>
       <WhyUs/>
       <LocalExpert/>
       <Europe/>
       <Asia/>
       <OurDestination/>
       <Revolution/>
       <Footer/>
      </div>
    );
  }
  
  export default HomePage;
  
  