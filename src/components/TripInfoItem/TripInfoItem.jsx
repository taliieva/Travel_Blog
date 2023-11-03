import "../../components/TripInfoItem/TripInfoItem.css";
export default function TripInfoItem(props){
    return(
        <div className="tripInfoContainer">
            <img src={props.src} alt="" />
            <div className="tripInfoText">
                <h3>{props.tripName}</h3> 
                <p>{props.info}</p>
            </div>
        </div>
    )
}