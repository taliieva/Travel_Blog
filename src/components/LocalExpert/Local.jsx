import local1 from "../../assets/local1.png";
import local2 from "../../assets/local2.png";
import "../LocalExpert/Local.css";
export default function LocalExpert(){
    return(
        <div className="localExpert">
            <h1>Our Local Experts</h1>
            <div className="localContainer">
                <div className="topPhoto">
                    <img src={local1} alt="" />
                    
                </div>
                <div className="bottomPhoto">
                    <img src={local2} alt="" />
                </div>
                
                
            </div>
        </div>
    )
}