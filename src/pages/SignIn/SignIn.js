import signPhoto from "../../assets/signPhoto.png";
import signLogo from "../../assets/Logo.png";
import googleLogo from "../../assets/googleFrame.svg";
import appleLogo from "../../assets/appleFrame.svg";
import facebookLogo from "../../assets/facebookFrame.svg";
import eye from "../../assets/01 align center.svg";
import "../SignIn/SignIn.css";
export default function SignIn(){
    return(
        <div className="signMain">
            <div className="signPage">
            <img src={signPhoto} alt="" />
            <div className="rightSignSection">
                <div className="signLogo">
                    <img src={signLogo} alt="" />
                </div>
                <div className="signFormSection">
                    <h2>Sign in for your exciting journey</h2>
                    <form action="#" className="signFormContainer">
                        <label htmlFor="mail">Email</label>
                        
                        <input type="text" id="mail" placeholder="someone@example.com" className="mail"/>
                       
                        <label htmlFor="password">Password</label>
                        <div className="passwordDiv">
                            <input type="password" name="" id="password" placeholder="password"/>
                            <img src={eye} alt="" />
                        </div>
                        <a className="forgotPassword" href="#">Forgot password?</a>
                        <button>Sign in</button>
                    </form>
                </div>
                <div className="socialSection">
                    <span>or use one of this</span>
                    <div className="logoContainer">
                        <div className="logoDiv"><img src={googleLogo} alt="" /></div>
                        <div className="logoDiv"><img src={appleLogo} alt="" /></div>
                        <div className="logoDiv"><img src={facebookLogo} alt="" /></div>
                    </div>
                </div>
                <div className="goLoginSection"> 
                    <p>Don`t have an account? <a href="#">Create one for new adventure!</a></p>
                </div>
            </div>
        </div>
        </div>
        
    )
}