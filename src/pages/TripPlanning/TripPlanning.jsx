import signPhoto from "../../assets/signPhoto.png";
import signLogo from "../../assets/Logo.png";
import googleLogo from "../../assets/googleFrame.svg";
import appleLogo from "../../assets/appleFrame.svg";
import facebookLogo from "../../assets/facebookFrame.svg";
import leftChevron from "../../assets/Chevron_Left.svg";
import { Link } from "react-router-dom";
import "../TripPlanning/TripPlanning.css";
export default function TripPlanning(){
    return(
        <div className="tripPlanMain">
            <div className="tripPlanPage">
            <img src={signPhoto} alt="" />
            <div className="rightTripSection">
                <div className="signLogo">
                    <Link to="/Sign"> <img src={leftChevron} alt="" className="arrow"/></Link>
               
                    <img src={signLogo} alt="" className="logo"/>
                    <div></div>
                </div>
                <div className="tripFormSection">
                    <h2>Create an account to start trip planning</h2>
                    <form action="#" className="tripFormContainer">
                        <label htmlFor="mail">Email</label>
                        
                        <input type="text" id="mail" placeholder="someone@example.com" className="mail"/>
                        <button>Start trip planning</button>
                    </form>
                </div>
                <div className="socialSection">
                    <span>or use one of this</span>
                    <div className="logoContainer">
                        <button className="logoDiv"><img src={googleLogo} alt="" /></button>
                        <button className="logoDiv"><img src={appleLogo} alt="" /></button>
                        <button className="logoDiv"><img src={facebookLogo} alt="" /></button>
                    </div>
                </div>
                <div className="privacySection"> 
                    <p>By creating an account, you agree to elsewhere's <br />
                         <a href="#">Terms of Use</a> or <a href="#"> Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
        </div>
        
    )
}