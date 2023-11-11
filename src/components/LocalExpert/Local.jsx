import local1 from "../../assets/local1.png";
import local2 from "../../assets/local2.png";
import vector1 from "../../assets/Vector (1).png";
import vector2 from "../../assets/Vector (2).png";
import responslocal1 from "../../assets/responsivelocal1.png";
import responslocal2 from "../../assets/responsivelocal2.png";
import "../LocalExpert/Local.css";
export default function LocalExpert(){
    return(
        <div className="localExpert">
            <h1>Our Local Experts</h1>
            <div className="localContainer">
                <div className="topPhoto">
                    <img src={local1} alt="" />
                    <div className="topVectorContaier">
                        <img src={vector1} alt="" />
                        <p>Why trust Gary in Florida to
                        plan your trip to South  Africa?</p>
                    </div>
                </div>
                <div className="bottomPhoto">
                    <img src={local2} alt="" />
                    <div className="bottomVectorContainer">
                        <img src={vector2} alt="" />
                        <p>When Angela in 
                        Johannesburg knows best.</p>
                    </div>
                </div>
                
                
            </div>


            <div className="responsiveContainer">
                <div  className="responsiveTopPhoto">
                    <img src={responslocal1} alt=""/>
                    <div className="topResponsVectorContaier">
                        <img src={vector1} alt="" />
                        <p>Why trust Gary in Florida to
                        plan your trip to South  Africa?</p>
                    </div>
                </div>
                <div  className="responsiveBottomPhoto">
                    <img src={responslocal2} alt=""/>
                    <div className="bottomResponsVectorContaier">
                        <img src={vector2} alt="" />
                        <p>When Angela in 
                        Johannesburg knows best.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}