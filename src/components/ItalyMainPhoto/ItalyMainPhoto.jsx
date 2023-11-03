import "../../components/ItalyMainPhoto/ItalyMainPhoto.css";
import italy from "../../assets/Italy.png";
import frame1 from "../../assets/fi-rr-calendar.svg";
import frame2 from "../../assets/sun.svg";
import frame3 from "../../assets/earth.svg";
import frame4 from "../../assets/dollar-sign.svg";
import frame5 from "../../assets/Frame.svg"
export default function ItalyMainPhoto(){
    return(
        <div className="italyMainContainer">
            <img src={italy} alt="" />
            <div className="absolute_container"> 
                <div className="top_section">
                <h2>Italy</h2>
                <p>Trips you couldn't plan, even if you wanted to.</p>
                <button>Create a trip</button>
            </div>
            <div className="bottom_section">
                <div className="frame_section">
                    <img src={frame1} alt="" />
                    <div>
                        <h4>BEST TIME TO VISIT</h4>
                        <p>High s/ May-Sept</p>
                    </div>
                </div>
                <div className="frame_section">
                    <img src={frame2} alt="" />
                    <div>
                        <h4>CLIMATE</h4>
                        <p>High 32°C</p>
                        <p>Low 0°C</p>
                    </div>
                </div>
                <div className="frame_section">
                    <img src={frame3} alt="" />
                    <div>
                        <h4>TIMEZONE</h4>
                        <p>Central European</p>
                        <p>Time (UTC +1)</p>
                    </div>
                </div>
                <div className="frame_section">
                    <img src={frame4} alt="" />
                    <div>
                        <h4>CURRENCY</h4>
                        <p>Euro</p>
                        <p>Dollar</p>
                    </div>
                </div>
                <div className="frame_section">
                    <img src={frame5} alt="" />
                    <div>
                        <h4>LOCAL LANGUAGE</h4>
                        <p>Italian</p>
                        <p>English</p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}