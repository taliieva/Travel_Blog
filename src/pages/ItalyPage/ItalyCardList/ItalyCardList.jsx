import CardItem from "../../../components/CardItem/CardItem";
import italy1 from "../../../assets/italy1.png";
import italy2 from "../../../assets/italy2.png";
import italy3 from "../../../assets/italy3.png";
import italy4 from "../../../assets/italy4.png";
import italy5 from "../../../assets/italy5.png";
import italy6 from "../../../assets/italy6.png";
import style from "./ItalyCardList.module.css";
export default function ItalyCardList() {
  return (
    <div className={style.italyCardListContainer}>
      <h2>Available trips</h2>
      <div className={style.italyCardListItems}>
        <CardItem
          photoUrl={italy1}
          trip="ITALY TRIP"
          name="Roma"
          days="34 available trip plans"
          from="Starts from"
          price="$199.00"
          showBookMark={false}
        />
        <CardItem
          photoUrl={italy2}
          trip="PORTUGAL TRIP"
          name="Foodie Puglia"
          days="54 available trip plans"
          from="Starts from"
          price="$250.00"
          showBookMark={false}
        />
        <CardItem
          photoUrl={italy3}
          trip="TURKEY TRIP"
          name="Foodie Puglia"
          days="19 available trip plans"
          from="Starts from"
          price="$400.00"
          showBookMark={false}
        />
        <CardItem
          photoUrl={italy4}
          trip="ICELAND TRIP"
          name="Foodie Puglia"
          days="105 available trip plans"
          from="Starts from"
          price="$299.00"
          showBookMark={false}
        />
        <CardItem
          photoUrl={italy5}
          trip="COSTA RICA TRIP"
          name="Foodie Puglia"
          days="23 available trip plans"
          from="Starts from"
          price="$250.00"
          showBookMark={false}
        />
        <CardItem
          photoUrl={italy6}
          trip="ARGENTINA TRIP"
          name="Foodie Puglia"
          days="87 available trip plans"
          from="Starts from"
          price="$400.00"
          showBookMark={false}
        />
      </div>
    </div>
  );
}
