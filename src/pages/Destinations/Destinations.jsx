import BigCardItem from "../../components/BigCardItem/BigCardItem";
import Footer, { Revolution } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import mainImg from "../../assets/destinationBigImg.png";
import DestinationCardList from "../../components/DestinationCardList/DestinationCardList";
import DestinationlistItem from "../../components/DestinationListItems/DestinationListItem";
import DestinationVideo from "../../components/DestinationVideo/DestinationVideo";

export default function Destinations(){
    return(
        <>
        <Header/>
        <DestinationVideo/>
        <DestinationlistItem/>
        <DestinationCardList/>
        <BigCardItem url={mainImg}/>
        <Revolution/>
        <Footer/>
        </>
    )
}