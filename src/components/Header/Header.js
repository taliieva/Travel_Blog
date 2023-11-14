import a from "../../assets/selector.svg";
import logo from "../../assets/Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../../assets/Hamburger_MD.svg";
import user from "../../assets/User_01.svg";
import style from "./Header.module.css";
export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [openUser, setOpenUser] = useState(true);
  const [openValyuta, setOpenValyuta] = useState(true);

  const toggleValyuta = () => {
    setOpenValyuta(!openValyuta);
  };
  const toggleUser = () => {
    setOpenUser(!openUser);
  };
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className={style.header}>
      <div className={style.topSection}>
        <div>
          <ul>
            <li>
              <NavLink
                to="/About"
                style={{
                  color: location.pathname === "/About" ? "#4A21EF" : "black",
                }}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FAQ"
                style={{
                  color: location.pathname === "/FAQ" ? "#4A21EF" : "black",
                }}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blog"
                style={{
                  color: location.pathname === "/Blog" ? "#4A21EF" : "black",
                }}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                style={{
                  color: location.pathname === "/Contact" ? "#4A21EF" : "black",
                }}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={style.rightSide}>
          <p>US$</p>
          <div
            className={`${openValyuta ? style.valyuta : style.toggleValyuta}`}
          >
            <p>AZN ₼</p>
            <p>Euro €</p>
            <p>Ruble ₽</p>
          </div>
          <img src={a} alt="" onClick={toggleValyuta} />
        </div>
      </div>
      <div className={style.bottomSection}>
        <div className={`${open ? style.bottomLeft : style.toggle}`}>
          <Link
            to="/Destinations"
            style={{
              color:
                location.pathname === "/Destinations" ? "#4A21EF" : "black",
            }}
          >
            Destination
          </Link>
          <a href="#">Private trips</a>
        </div>
        <div className={style.menuIcon} onClick={toggleMenu}>
          <img src={menuIcon} alt="" />
        </div>
        <div className={style.bottomCenter}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={`${openUser ? style.bottomRight : style.toggleUser}`}>
          <button>I`m Feeling Lucky</button>
          <Link to="/Sign">
            <button>Login</button>
          </Link>
        </div>

        <button className={style.user} onClick={toggleUser}>
          <img src={user} alt="" />
        </button>
      </div>
    </div>
  );
}
