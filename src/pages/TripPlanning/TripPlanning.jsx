import signPhoto from "../../../public/assets/signPhoto.png";
import signLogo from "../../../public/assets/Logo.png";
import googleLogo from "../../../public/assets/googleFrame.svg";
import appleLogo from "../../../public/assets/appleFrame.svg";
import facebookLogo from "../../../public/assets/facebookFrame.svg";
import leftChevron from "../../../public/assets/Chevron_Left.svg";
import { Link } from "react-router-dom";
import style from "./TripPlanning.module.css";
export default function TripPlanning() {
  return (
    <div className={style.tripPlanMain}>
      <div className={style.tripPlanPage}>
        <img src={signPhoto} alt="" className={style.tripLeftPhoto} />
        <div className={style.rightTripSection}>
          <div className={style.signLogo}>
            <Link to="/Sign">
              {" "}
              <img src={leftChevron} alt="" className={style.arrow} />
            </Link>

            <Link to="/">
              <img src={signLogo} alt="" />
            </Link>
            <div></div>
          </div>
          <div className={style.tripFormSection}>
            <h2>Create an account to start trip planning</h2>
            <form action="#" className={style.tripFormContainer}>
              <label htmlFor="mail">Email</label>

              <input
                type="text"
                id="mail"
                placeholder="someone@example.com"
                className={style.mail}
              />
              <button>Start trip planning</button>
            </form>
          </div>
          <div className={style.socialSection}>
            <span>or use one of this</span>
            <div className={style.logoContainer}>
              <button className={style.logoDiv}>
                <img src={googleLogo} alt="" />
              </button>
              <button className={style.logoDiv}>
                <img src={appleLogo} alt="" />
              </button>
              <button className={style.logoDiv}>
                <img src={facebookLogo} alt="" />
              </button>
            </div>
          </div>
          <div className={style.privacySection}>
            <p>
              By creating an account, you agree to elsewhere's <br />
              <a href="#">Terms of Use</a> or <a href="#"> Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
