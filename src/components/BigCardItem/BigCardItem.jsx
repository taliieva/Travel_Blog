import frame from "../../assets/bigPageFrame.png";
import bigPhotoHome from "../../assets/bigPhoto.png";
import "../BigCardItem/BigCardItem.css";

export default function BigCardItem(props){
    return(
        <div className="bigCardContainer">
            <img src={props.url} alt="" className="mainPhoto"/>
            <div className="absoluteBigCardDiv">
                <div className="quoteDiv">
                <p className="quoteText">“Tiago put together an epic itinerary for me
and my friends. He showed us some hidden
hiking trails and amazing local food spots.
He even met us for a coffee to make sure we
had everything we needed.</p>
                <h3>Thanks Tiago!”</h3>
                <p className="charlie">Charlie, rappelling down a 370-foot waterfall</p>
                <p className="author">The Azores</p>
            </div>
            <div className="frameDiv">
                <div className="tiagoFrame">
                    <img src={frame} alt="" />
                </div>
                <div className="tiagoDiv">
                    <p>Trip crafted by</p>
                    <div className="tiago">
                        <span className="name">Tiago</span>
                        <span className="divider">|</span>
                        <span>Local expert in Portugal</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}