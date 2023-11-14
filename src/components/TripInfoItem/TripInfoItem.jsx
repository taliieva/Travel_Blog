import style from "./TripInfoItem.module.css";
export default function TripInfoItem(props) {
  return (
    <div className={style.tripInfoContainer}>
      <img src={props.src} alt="" />
      <div className={style.tripInfoText}>
        <h3>{props.tripName}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  );
}
