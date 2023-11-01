import CardItem from "../CardItem/CardItem";
import spainTrip from "../../assets/trend1.png";
import italyTrip from "../../assets/trend2.png";
import turkeyTrip from "../../assets/trend3.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import europe1 from "../../assets/europe1.png";
import europe2 from "../../assets/europe2.png";
import europe3 from "../../assets/europe3.png";
import asia1 from "../../assets/asia1.png";
import asia2 from "../../assets/asia2.png";
import asia3 from "../../assets/asia3.png";
import sparkle from "../../assets/sparkles.svg";
import heart from "../../assets/player-heart.svg";
import "../CardItem/CardItem.css";
import "../HomeCardList/HomeCardList.css";
export default function HomeCardListTrend(){
    return(
        <div className="trend">
            <h2>Trending now</h2>
            <div className="trendingNow">
            <CardItem photoUrl ={spainTrip} trip = "SPAIN TRIP" name = "Magical Madrid To Marrakech By Train" 
            days = "12 days" price = "$1299.00" icon = {sparkle} text ="Loved by over 40s" showButton={true} />
            <CardItem photoUrl ={italyTrip} trip = "ITALY TRIP" name = "Spectacular Sicily" 
            days = "5 days" price = "$250.00" icon = {heart} text = "Loved by couples"showButton={true}/>
            <CardItem photoUrl ={turkeyTrip} trip = "TURKEY TRIP" name = "International Istanbul" 
            days = "7 days" price = "$400.00" showButton={false}/>
            </div>
        </div>
    )
}

export function HomeCardListBrand(){
    return(
        <div className="brand">
            <h2>Brand New Trips</h2>
            <div className="brandNewTrips">
            <CardItem photoUrl ={brand1} trip = "SPAIN TRIP" name = "Magical Madrid To Marrakech By Train" 
            days = "12 days" price = "$1299.00"/>
            <CardItem photoUrl ={brand2} trip = "ITALY TRIP" name = "Spectacular Sicily" 
            days = "5 days" price = "$1299.00"/>
            <CardItem photoUrl ={brand3} trip = "TURKEY TRIP" name = "International Istanbul" 
            days = "7 days" price = "$1299.00"/>
            </div>
        </div>
    )
}

export function Europe(){
    return(
        <div className="europe">
            <h2>Europe</h2>
            <div className="europeTrips">
            <CardItem photoUrl ={europe1} trip = "ICELAND TRIP" name = "Volcanic Iceland" 
            days = "7 days" price = "$2299.00"/>
            <CardItem photoUrl ={europe2} trip = "SCOTLAND TRIP" name = "The Scottish Highlands" 
            days = "7 days" price = "$1687.00"/>
            <CardItem photoUrl ={europe3} trip = "PORTUGAL TRIP" name = "Atlantic Azores" 
            days = "6 days" price = "$1220.00"/>
            </div>
        </div>
    )
}

export function Asia(){
    return(
        <div className="asia">
            <h2>Asia</h2>
            <div className="asiaTrips">
            <CardItem photoUrl ={asia1} trip = "CHINA TRIP" name = "Icons Of China" 
            days = "5 days" price = "$1399.00"/>
            <CardItem photoUrl ={asia2} trip = "THAILAND TRIP" name = "Cambodia & Vietnam" 
            days = "7 days" price = "$2350.00"/>
            <CardItem photoUrl ={asia3} trip = "TAIWAN TRIP" name = "A Taste Of Taiwan" 
            days = "7 days" price = "$1900.00"/>
            </div>
        </div>
    )
}