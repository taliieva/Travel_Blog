import homePageVideo from "../../../../public/assets/Homepage.gif";
import style from "./Video.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function HomePageVideo() {
  return (
    <div className={style.imageContainer}>
      <img src={homePageVideo} alt="" />
      <div className={style.absoluteContainer}>
        <h1>We create trips you love</h1>
        <p>Trips you couldn't plan, even if you wanted to.</p>
        <div className={style.inputOnVideo}>
          <input type="text" placeholder="Where do you want to go?" />
          <div className={style.searchIcon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
    </div>
  );
}
