import style from "./NavCardItem.module.css";
export default function NavCardItem(props) {
  return (
    <div className={style.navCardContainer}>
      <img src={props.url} alt="" />
      <div className={style.navCardText}>
        <h2>{props.header}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
