import BigCardItem from "../../components/BigCardItem/BigCardItem";
import Footer, { Revolution } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import mainImg from "../../../public/assets/destinationBigImg.png";
import "../../pages/Destinations/Destination.css";
import DestinationlistItem from "./DestinationListItems/DestinationListItem";
import DestinationCardList from "./DestinationCardList/DestinationCardList";
import DestinationVideo from "./DestinationVideo/DestinationVideo";
import Layout from "../Layouts/Layouts";

export default function Destinations() {
  return (
    <Layout>
      <DestinationVideo />
      <DestinationlistItem />
      <DestinationCardList />
      <BigCardItem
        backgroundImage={mainImg}
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
        showIcon={false}
      />
      <Revolution />
    </Layout>
  );
}
