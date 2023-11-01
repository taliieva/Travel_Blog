import destinationVideo from "../../assets/Destinations.gif";
import "../../components/DestinationVideo/DestinationVideo.css";
export default function DestinationVideo(){
    return(
        <div className="destinationVideoContainer">
            <img src={destinationVideo} alt="" />
            <div className="destinationVideoAbsoluteContainer">
                <h1>Explore places on Tourista</h1>
                <p>Destinations</p>
            </div>
        </div>
    )
}