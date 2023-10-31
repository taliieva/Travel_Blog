import why1 from "../../assets/why1.png";
import why2 from "../../assets/why2.png";
import why3 from "../../assets/why3.png";
import "../WhyUs/WhyUs.css";
export default function WhyUs(){
    return(
        <div className="whyUs">
            <h1>Why Us?</h1>
            <div className="whySections">
                <div className="whyParts">
                    <div className="whyImg">
                        <img src={why1} alt="" />
                    </div>
                    
                    <p>More than 149 travel titles currently in print</p>
                </div>
                <div className="whyParts">
                    <div className="whyImg">
                        <img src={why2} alt="" />
                    </div>
                    
                    <p>Supporting millions of travellers since 1982</p>
                </div>
                <div className="whyParts">
                    <div className="whyImg">
                        <img src={why3} alt="" />
                    </div>
                    
                    <p>Our utstanding customer <br/> satisfaction</p>
                </div>
            </div>
        </div>
    )
}