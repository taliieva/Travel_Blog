import style from "./HelpCardItem.module.css";
export default function HelpCardItem(props) {
  return (
    <div className={style.helpCardContainer}>
      <div className={style.infoImg}>
        <img src={props.frameUrl} alt="" />
      </div>
      <div className={props.text ? style.helpText : style.centerText}>
        <div>
          <h4>{props.header}</h4>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
