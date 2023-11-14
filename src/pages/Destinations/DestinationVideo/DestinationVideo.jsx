import destinationVideo from "../../../assets/Destinations.gif";
import style from "./DestinationVideo.module.css";
export default function DestinationVideo() {
  return (
    <div className={style.destinationVideoContainer}>
      <img src={destinationVideo} alt="" />
      <div className={style.destinationVideoAbsoluteContainer}>
        <h1>Explore places on Tourista</h1>
        <p>Destinations</p>
      </div>
    </div>
  );
}
