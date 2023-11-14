import frame from "../../assets/bigPageFrame.png";
import bigPhotoHome from "../../assets/bigPhoto.png";
//import "../BigCardItem/BigCardItem.css";
import style from "./BigCardItem.module.css";

export default function BigCardItem(props) {
  const { backgroundImage } = props;
  const imageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "700px",
  };
  return (
    <div style={imageStyle} className={style.bigCardContainer}>
      <div className={style.quoteDiv}>
        <p className={style.quoteText}>{props.quoteText}</p>
        <h3>{props.header}</h3>
        <p className={style.charlie}>{props.text1}</p>
        <p className={style.author}>{props.author}</p>
      </div>
      <div className={style.frameDiv}>
        <div className={style.tiagoFrame}>
          <img src={frame} alt="" />
        </div>
        <div className={style.tiagoDiv}>
          <p>{props.text2}</p>
          <div className={style.tiago}>
            <span className={style.name}>
              {props.name}
              {props.showIcon && (
                <div className={style.iconDiv}>
                  <img src={props.icon1} alt="" />
                  <img src={props.icon1} alt="" />
                  <img src={props.icon1} alt="" />
                  <img src={props.icon1} alt="" />
                  <img src={props.icon2} alt="" />
                </div>
              )}
            </span>

            <span className={style.divider}>|</span>
            <span>{props.text3}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
