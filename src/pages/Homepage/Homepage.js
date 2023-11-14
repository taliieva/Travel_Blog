import React from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import { Revolution } from "../../components/Footer/Footer.js";
import { OurDestination } from "../../components/Footer/Footer.js";
import { WhyUs } from "../ItalyPage/HelpComponent/HelpComponent.jsx";
import LocalExpert from "../../components/LocalExpert/Local.jsx";
import BigCardItem from "../../components/BigCardItem/BigCardItem.jsx";
import mainPhoto from "../..//assets/bigPhoto.png";
import upArrow from "../..//assets/Arrow_Up_SM.svg";
import style from "./Homepage.module.css";
import HomeCardListTrend, {
  Asia,
  Europe,
  HomeCardListBrand,
} from "./HomeCardList/HomeCardList.jsx";
import HomePageVideo from "./Videos/Video.jsx";
import Layout from "../Layouts/Layouts.jsx";
function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Layout className={style.home}>
      <HomePageVideo />
      <HomeCardListTrend />
      <HomeCardListBrand />
      <WhyUs />
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
        text2="Trip crafted by"
        name="Tiago"
        text3="Local expert in Portugal"
      />
      <Europe />
      <Asia />
      <OurDestination />
      <Revolution />
      <div className={style.upArrowButton}>
        <button onClick={scrollToTop}>
          <img src={upArrow} alt="" />
        </button>
      </div>
    </Layout>
  );
}

export default HomePage;
