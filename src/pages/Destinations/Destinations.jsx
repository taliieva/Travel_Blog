import BigCardItem from "../../components/BigCardItem/BigCardItem";
import Footer, { Revolution } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import mainImg from "../../assets/destinationBigImg.png";
import DestinationCardList from "../../components/DestinationCardList/DestinationCardList";
import DestinationlistItem from "../../components/DestinationListItems/DestinationListItem";
import DestinationVideo from "../../components/DestinationVideo/DestinationVideo";
import "../../pages/Destinations/Destination.css";
export default function Destinations() {
  return (
    <>
      <Header />
      <DestinationVideo />
      <DestinationlistItem />
      <DestinationCardList />
      <BigCardItem
        url={mainImg}
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
        showIcon = {false}
      />
      <Revolution />
      <Footer />
    </>
  );
}
