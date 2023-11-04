import TripInfoItem from "../TripInfoItem/TripInfoItem";
import blog1 from "../../assets/blogPhoto1.png";
import blog2 from "../../assets/blogPhoto2.png";
import blog3 from "../../assets/blogPhoto3.png";
import blog4 from "../../assets/blogPhoto4.png";
import blog5 from "../../assets/blogPhoto5.png";
import "../../components/BlogTripInfo/BlogTripInfo.css";
export default function BlogTripInfo(){
    return(
        <div className="blogTripConntainer">
           
            <TripInfoItem src={blog1} tripName="Food & Drink" info="Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…"/>
            <TripInfoItem src={blog2} tripName="See & Do" info="Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More..."/>
           
            <TripInfoItem src={blog3} tripName="Inspiration" info="Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…"/>
            <TripInfoItem src={blog4} tripName="Travel Tips" info="Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More..."/>
            <TripInfoItem src={blog5} tripName="Food & Drink" info="In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica. Built atop a 4th…"/>
            
            
        </div>
    )
}