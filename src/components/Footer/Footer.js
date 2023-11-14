import b from "../../assets/Logo.png";
import angleRight from "../../assets/angleRight.png";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={style.footerSection}>
      <div className={style.leftSide}>
        <img src={b} alt="" className={style.logo} />
        <div>
          <p>
            Discover the world's wonders and let us be
            <br />
            your trusted guide to extraordinary destinations.
          </p>
        </div>
        <p className={`${style.clean} ${style.top}`}>
          © Copyright 2023 Tourista Ltd. All Rights Reserved.
        </p>
      </div>
      <div className={style.rightSide}>
        <div className={style.menu}>
          <ul>
            <p>Menu</p>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Private trips</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div className={style.support}>
          <ul>
            <p>Support</p>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
        <div className={style.follow}>
          <ul>
            <p>Follow us</p>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Tiktok</a>
            </li>
          </ul>
        </div>
        <p className={`${style.clean} ${style.bottom}`}>
          © Copyright 2023 Tourista Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export function Revolution() {
  return (
    <div className={style.revolution}>
      <p className={style.join}>Join our travel revolution</p>
      <div className={style.text}>
        <p>
          Sign up to stay in the know - hot new travel spots,
          <br />
          how we strive to make the world a better place, and all sorts of
          surprises.
        </p>
      </div>

      <div className={style.emailInput}>
        <input type="text" className={style.mail} placeholder="Email" />
        <button className={style.signup}>Sign up</button>
      </div>
    </div>
  );
}

export function OurDestination() {
  return (
    <div className={style.ourdestination}>
      <p>Looking to go elsewhere?</p>
      <button>
        Our destinations <img src={angleRight} alt="" />
      </button>
    </div>
  );
}
