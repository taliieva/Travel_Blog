import "./Header.css";
import a from "../../assets/selector.svg";
import logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";

export default function Header(){
    return(

        <div className="header">
            <div className="topSection">
                <div>
                <ul>
                    <li><Link to="/About">About us</Link></li>
                    <li><Link to="/FAQ">FAQ</Link></li>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                </ul>
                </div>
                <div className="rightSide">
                    <p>US$</p>
                    <img src={a} alt="" />
                </div>
            </div>
            <div className="bottomSection">
                <div className="bottomLeft">
                    <Link to="/Destinations">Destination</Link>
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
    )
} 