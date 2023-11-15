import BigCardItem from "../../components/BigCardItem/BigCardItem";
import Footer, {
  OurDestination,
  Revolution,
} from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import italyPhoto from "../../../public/assets/italyPagePhoto.png";
import icon1 from "../../../public/assets/starIcon.svg";
import icon2 from "../../../public/assets/starIcon2.svg";
import "../../pages/ItalyPage/ItalyPage.css";
import HelpComponent from "./HelpComponent/HelpComponent";
import ItalyCardList from "./ItalyCardList/ItalyCardList";
import ItalyMainPhoto from "./ItalyMainPhoto/ItalyMainPhoto";
import ItalyTripInfoList from "./ItalyTripInfoList/ItalyTripInfoList";
import Map from "./Map/Map";
import Layout from "../Layouts/Layouts";

export default function ItalyPage() {
  return (
    <Layout>
      <ItalyMainPhoto />
      <ItalyCardList />
      <Map />
      <ItalyTripInfoList />
      <BigCardItem
        backgroundImage={italyPhoto}
        quoteText="We have a very good time all the way. The Capri boat ride is excellent and so much fun with the crew! They are awesome."
        text2="Vivian Lim"
        text3="18 June 2024"
        showIcon={true}
        icon1={icon1}
        icon2={icon2}
      />
      <HelpComponent />
      <OurDestination />
      <Revolution />
    </Layout>
  );
}
