import signPhoto from "../../assets/signPhoto.png";
import signLogo from "../../assets/Logo.png";
import googleLogo from "../../assets/googleFrame.svg";
import appleLogo from "../../assets/appleFrame.svg";
import facebookLogo from "../../assets/facebookFrame.svg";
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
                        <br />
                        <input type="text" id="mail" placeholder="someone@example.com"/>
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password" name="" id="password" placeholder="password"/>
                        <br />
                        <a>Forgot password</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="socialSection">
                    <span>or use one of this</span>
                    <div>
                        <img src={googleLogo} alt="" />
                        <img src={appleLogo} alt="" />
                        <img src={facebookLogo} alt="" />
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