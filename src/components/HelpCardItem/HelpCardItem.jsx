import "../../components/HelpCardItem/HelpCardItem.css";

export default function HelpCardItem(props){
    return(
        <div className="helpCardContainer">
            <div className="infoImg">
                <img src={props.frameUrl} alt="" />
            </div>
            <div className="helpText">
                <h4>{props.header}</h4>
                <p>{props.text}</p>
            </div>
            
        </div>
    )
}