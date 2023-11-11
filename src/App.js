import Routers from './Routers/Routers';
import BigCardItem from './components/BigCardItem/BigCardItem';
import Header from './components/Header/Header';
import HelpComponent, { WhyUs } from './components/HelpComponent/HelpComponent';
import LocalExpert from './components/LocalExpert/Local';
import HomePageVideo from './components/Videos/Video';
import mainPhoto from "./assets/bigPhoto.png";
import Footer, { OurDestination, Revolution } from './components/Footer/Footer';
import HomeCardListTrend from './components/HomeCardList/HomeCardList';
import DestinationVideo from './components/DestinationVideo/DestinationVideo';
import DestinationCardList from './components/DestinationCardList/DestinationCardList';

function App() {
  return (
    <div className="App">
    <Routers/>
    </div>
  );
}

export default App;
