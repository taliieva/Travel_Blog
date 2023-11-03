import frame from "../../assets/bigPageFrame.png";
import bigPhotoHome from "../../assets/bigPhoto.png";
import "../BigCardItem/BigCardItem.css";

export default function BigCardItem(props){
    return(
        <div className="bigCardContainer">
            <img src={props.url} alt="" className="mainPhoto"/>
            <div className="absoluteBigCardDiv">
                <div className="quoteDiv">
                <p className="quoteText">{props.quoteText}</p>
                <h3>{props.header}</h3>
                <p className="charlie">{props.text1}</p>
                <p className="author">{props.author}</p>
            </div>
            <div className="frameDiv">
                <div className="tiagoFrame">
                    <img src={frame} alt="" />
                </div>
                <div className="tiagoDiv">
                    <p>{props.text2}</p>
                    <div className="tiago">
                        <span className="name">{props.name}
                        {props.showIcon && <div className="iconDiv">
                        <img src={props.icon1} alt="" />
                        <img src={props.icon1} alt="" />
                        <img src={props.icon1} alt="" />
                        <img src={props.icon1} alt="" />
                        <img src={props.icon2} alt="" />
                        </div>}
                        
                        </span>
                     
                        <span className="divider">|</span>
                        <span>{props.text3}</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}