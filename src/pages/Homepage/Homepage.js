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
import WhyUs from "../../components/WhyUs/WhyUs.jsx";
import HomePageVideo from "../../components/Videos/Video.jsx";
import LocalExpert from "../../components/LocalExpert/Local.jsx";
import BigCardItem from "../../components/BigCardItem/BigCardItem.jsx";
import mainPhoto from "../../assets/bigPhoto.png";
import "../../pages/Homepage/Homepage.css";
function HomePage() {
  return (
    <div className="home">
      <Header />
      <HomePageVideo />
      <HomeCardListTrend />
      <HomeCardListBrand />
      <WhyUs />
      <LocalExpert />
      <BigCardItem
        url={mainPhoto}
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
      <Footer />
    </div>
  );
}

export default HomePage;
