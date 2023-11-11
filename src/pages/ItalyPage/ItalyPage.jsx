import BigCardItem from "../../components/BigCardItem/BigCardItem";
import Footer, {
  OurDestination,
  Revolution,
} from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import italyPhoto from "../../assets/italyPagePhoto.png";
import icon1 from "../../assets/starIcon.svg";
import icon2 from '../../assets/starIcon2.svg';
import ItalyCardList from "../../components/ItalyCardList/ItalyCardList";
import "../../pages/ItalyPage/ItalyPage.css";
import ItalyTripInfoList from "../../components/ItalyTripInfoList/ItalyTripInfoList";
import ItalyMainPhoto from "../../components/ItalyMainPhoto/ItalyMainPhoto";
import HelpComponent from "../../components/HelpComponent/HelpComponent";
import Map from "../../components/Map/Map";

export default function ItalyPage() {
  return (
    <div>
      <Header />
      <ItalyMainPhoto/>
      <ItalyCardList/>
      <Map/>
      <ItalyTripInfoList/>
      <BigCardItem
        backgroundImage={italyPhoto}
        quoteText="We have a very good time all the way. The Capri boat ride is excellent and so much fun with the crew! They are awesome."
        text2 = "Vivian Lim"
        text3 = "18 June 2024" 
        showIcon={true}
        icon1 = {icon1}
        icon2 = {icon2}
      />
      <HelpComponent/>
      <OurDestination />
      <Revolution />
      <Footer />
    </div>
  );
}
