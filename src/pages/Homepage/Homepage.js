import React from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import { Revolution } from "../../components/Footer/Footer.js";
import { OurDestination } from "../../components/Footer/Footer.js";
import HomeCardListTrend, {
  Asia,
  Europe,
  HomeCardListBrand,
} from "../../components/HomeCardList/HomeCardList.jsx";
import {WhyUs} from "../../components/HelpComponent/HelpComponent.jsx";
import HomePageVideo from "../../components/Videos/Video.jsx";
import LocalExpert from "../../components/LocalExpert/Local.jsx";
import BigCardItem from "../../components/BigCardItem/BigCardItem.jsx";
import mainPhoto from "../../assets/bigPhoto.png";
import upArrow from "../../assets/Arrow_Up_SM.svg";
import "../../pages/Homepage/Homepage.css";
function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  
  return (
    <div className="home">
      <Header />
      <HomePageVideo />
      <HomeCardListTrend />
      <HomeCardListBrand />
      <WhyUs/>
      <LocalExpert />
      <BigCardItem
        backgroundImage={mainPhoto}
        quoteText="“Tiago put together an epic itinerary for me
and my friends. He showed us some hidden
hiking trails and amazing local food spots.
He even met us for a coffee to make sure we
had everything we needed."
        header="Thanks Tiago!”"
        text1="Charlie, rappelling down a 370-foot waterfall"
        author="The Azores"
        text2 = "Trip crafted by"
        name="Tiago"
        text3="Local expert in Portugal"
      />
      <Europe />
      <Asia />
      <OurDestination />
      <Revolution />
      <div className="upArrowButton">
        <button onClick={scrollToTop}>
        <img src={upArrow} alt="" />
        </button>
          
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
