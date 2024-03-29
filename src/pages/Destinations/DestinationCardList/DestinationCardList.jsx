import CardItem from "../../../components/CardItem/CardItem";
import italyTrip from "../../../../public/assets/destinationImg1.png";
import portugalTrip from "../../../../public/assets/destinationImg2.png";
import turkeyTrip from "../../../../public/assets/destinationImg3.png";
import icelandTrip from "../../../../public/assets/destinationImg4.png";
import costaTrip from "../../../../public/assets/destinationImg5.png";
import argentinaTrip from "../../../../public/assets/destinationImg6.png";
import style from "./DestinationCardList.module.css";

export default function DestinationCardList() {
  return (
    <div className={style.destinationContainer}>
      <h2>Top Destinations</h2>
      <div className={style.destinationCardItem}>
        <CardItem
          photoUrl={italyTrip}
          trip="ITALY TRIP"
          name="International Italy"
          days="34 available trip plans"
          from="Starts from"
          price="$199.00"
          showBookMark={false}
        />
        <CardItem
          photoUrl={portugalTrip}
          trip="PORTUGAL TRIP"
          name="International Portugal"
          days="54 available trip plans"
          from="Starts from"
          price="$250.00"
          showBookMark={false}
        />
        <CardItem
          photoUrl={turkeyTrip}
          trip="TURKEY TRIP"
          name="International Turkey"
          days="19 available trip plans"
          from="Starts from"
          price="$400.00"
          showBookMark={false}
        />
        <CardItem
          photoUrl={icelandTrip}
          trip="ICELAND TRIP"
          name="International Iceland"
          days="105 available trip plans"
          from="Starts from"
          price="$299.00"
          showBookMark={false}
        />
        <CardItem
          photoUrl={costaTrip}
          trip="COSTA RICA TRIP"
          name="International Costa Rica"
          days="23 available trip plans"
          from="Starts from"
          price="$250.00"
          showBookMark={false}
        />
        <CardItem
          photoUrl={argentinaTrip}
          trip="ARGENTINA TRIP"
          name="International Argentina"
          days="87 available trip plans"
          from="Starts from"
          price="$400.00"
          showBookMark={false}
        />
      </div>
    </div>
  );
}
