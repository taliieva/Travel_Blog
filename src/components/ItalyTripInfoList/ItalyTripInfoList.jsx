import TripInfoItem from "../TripInfoItem/TripInfoItem";
import tripInfo1 from "../../assets/tripInfo1.png";
import tripInfo2 from "../../assets/tripInfo2.png";
import tripInfo3 from "../../assets/tripInfo3.png";
import "../../components/ItalyTripInfoList/ItalyTripInfoList.css";
export default function ItalyTripInfoList() {
  return (
    <div className="tripInfoListContainer">
      <h2>Must-see attractions for your itinerary</h2>
      <div className="tripInfoListItems">
        <TripInfoItem
          src={tripInfo1}
          tripName="Vatican museums"
          info="Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…"
        />
        <TripInfoItem
          src={tripInfo2}
          tripName="Colosseum"
          info="Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More..."
        />
        <TripInfoItem
          src={tripInfo3}
          tripName="St Peter’s basilica"
          info="In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica. Built atop a 4th…"
        />
      </div>
    </div>
  );
}
