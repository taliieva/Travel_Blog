import signPhoto from "../../assets/signPhoto.png";
import signLogo from "../../assets/Logo.png";
import leftChevron from "../../assets/Chevron_Left.svg";
import { Link } from "react-router-dom";
import "../ForgotPassword/ForgotPassword.css";
export default function ForgotPassword(){
    return(
        <div className="forgotPasswordMain">
            <div className="forgotPasswordPage">
            <img src={signPhoto} alt=""className="leftPhoto"/>
            <div className="rightForgotSection">
                <div className="forgotLogo">
                <Link to="/Sign"> <img src={leftChevron} alt="" className="arrow"/></Link>
                    <img src={signLogo} alt="" />
                    <div></div>
                </div>
                <div className="forgotFormSection">
                    <h2>Looking to change your password?</h2>
                    <p>Enter your email below and we'll send you instructions on how to reset your password.</p>
                    <form action="#" className="forgotFormContainer">
                        <div>
                        <label htmlFor="mail">Email</label>
                        
                        <input type="text" id="mail" placeholder="someone@example.com" className="mail"/>
                       </div>
                       
                        <button>Reset my password</button>
                    </form>
                </div>
                
            </div>
        </div>
        </div>
        
    )
}