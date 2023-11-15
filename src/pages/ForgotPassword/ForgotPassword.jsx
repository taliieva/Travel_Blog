import signPhoto from "../../../public/assets/signPhoto.png";
import signLogo from "../../../public/assets/Logo.png";
import leftChevron from "../../../public/assets/Chevron_Left.svg";
import { Link } from "react-router-dom";
import style from "./ForgotPassword.module.css";

export default function ForgotPassword() {
  return (
    <div className={style.forgotPasswordMain}>
      <div className={style.forgotPasswordPage}>
        <img src={signPhoto} alt="" className={style.leftPhoto} />
        <div className={style.rightForgotSection}>
          <div className={style.forgotLogo}>
            <Link to="/Sign">
              {" "}
              <img src={leftChevron} alt="" className={style.arrow} />
            </Link>
            <Link to="/">
              <img src={signLogo} alt="" />
            </Link>
            <div></div>
          </div>
          <div className={style.forgotFormSection}>
            <h2>Looking to change your password?</h2>
            <p>
              Enter your email below and we'll send you instructions on how to
              reset your password.
            </p>
            <form action="#" className={style.forgotFormContainer}>
              <div>
                <label htmlFor="mail">Email</label>

                <input
                  type="text"
                  id="mail"
                  placeholder="someone@example.com"
                  className={style.mail}
                />
              </div>

              <button>Reset my password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
