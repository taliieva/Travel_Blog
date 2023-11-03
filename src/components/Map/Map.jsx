import "../../components/Map/Map.css";
import mapPhoto from "../../assets/MapItaly.png";
import left from "../../assets/chevron-leftt.svg";
import right from "../../assets/chevron-right.svg";
import italy from "../../assets/mapPhoto.png";
export default function Map(){
    return(
        <div className="mapContainer">
            <img src={mapPhoto} alt="" />
            <div className="map_top_section">
                <h3>Tops things to do</h3>
                <div className="buttonSection">
                    <div><img src={left} alt="" /></div>
                    <div><img src={right} alt="" /></div>
                </div>
                
            </div>
            <div className="cardSection">
                <img src={italy} alt="" />
                <p>Have the drive of your life on the cliff roads of the AAmalfi Coast</p>
            </div>
        </div>
    )
}