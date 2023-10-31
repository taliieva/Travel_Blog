import "./Header.css";
import a from "../../assets/selector.svg";
import logo from '../../assets/Logo.png';

export default function Header(){
    return(

        <div className="header">
            <div className="topSection">
                <div>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                </div>
                <div className="rightSide">
                    <p>US$</p>
                    <img src={a} alt="" />
                </div>
            </div>
            <div className="bottomSection">
                <div className="bottomLeft">
                    <a href="#">Destination</a>
                    <a href="#">Private trips</a>
                </div>
                <div className="bottomCenter">
                    <img src={logo} alt="" />
                </div>
                <div className="bottomRight">
                    <button>I`m Feeling Lucky</button>
                    <button>Login</button>
                </div>
            </div>
            
           
        </div>
    )
} 