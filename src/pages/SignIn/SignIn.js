import signPhoto from "../..//assets/signPhoto.png";
import signLogo from "../..//assets/Logo.png";
import googleLogo from "../..//assets/googleFrame.svg";
import appleLogo from "../..//assets/appleFrame.svg";
import facebookLogo from "../..//assets/facebookFrame.svg";
import eye from "../..//assets/01 align center.svg";
import { Link } from "react-router-dom";
import style from "./SignIn.module.css";
export default function SignIn() {
  return (
    <div className={style.signMain}>
      <div className={style.signPage}>
        <img src={signPhoto} alt="" className={style.leftSignPhoto} />
        <div className={style.rightSignSection}>
          <div className={style.signLogo}>
            <Link to="/">
              <img src={signLogo} alt="" />
            </Link>
          </div>
          <div className={style.signFormSection}>
            <h2>Sign in for your exciting journey</h2>
            <form action="#" className={style.signFormContainer}>
              <label htmlFor="mail">Email</label>

              <input
                type="text"
                id="mail"
                placeholder="someone@example.com"
                className={style.mail}
              />

              <label htmlFor="password">Password</label>
              <div className={style.passwordDiv}>
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="password"
                />
                <img src={eye} alt="" />
              </div>
              <Link className={style.forgotPassword} to="/ForgotPassword">
                Forgot password?
              </Link>
              <button>Sign in</button>
            </form>
          </div>
          <div className={`${style.goLoginSection} ${style.topLoginSection}`}>
            <p>
              Don`t have an account?{" "}
              <Link to="/TripPlanning">Create one for new adventure!</Link>
            </p>
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
          <div
            className={`${style.goLoginSection} ${style.bottomLoginSection}`}
          >
            <p>
              Don`t have an account?{" "}
              <Link to="/TripPlanning">Create one for new adventure!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
