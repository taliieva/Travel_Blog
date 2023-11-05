import "./Header.css";
import a from "../../assets/selector.svg";
import logo from "../../assets/Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <div className="topSection">
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
        <div className="rightSide">
          <p>US$</p>
          <img src={a} alt="" />
        </div>
      </div>
      <div className="bottomSection">
        <div className="bottomLeft">
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
        <div className="bottomCenter">
          <img src={logo} alt="" />
        </div>
        <div className="bottomRight">
          <button>I`m Feeling Lucky</button>
          <Link to="/Sign">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
