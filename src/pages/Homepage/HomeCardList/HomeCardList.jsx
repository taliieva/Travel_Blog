import CardItem from "../../../components/CardItem/CardItem";
import spainTrip from "../../../../public/assets/trend1.png";
import italyTrip from "../../../../public/assets/trend2.png";
import turkeyTrip from "../../../../public/assets/trend3.png";
import brand1 from "../../../../public/assets/brand1.png";
import brand2 from "../../../../public/assets/brand2.png";
import brand3 from "../../../../public/assets/brand3.png";
import europe1 from "../../../../public/assets/europe1.png";
import europe2 from "../../../../public/assets/europe2.png";
import europe3 from "../../../../public/assets/europe3.png";
import asia1 from "../../../../public/assets/asia1.png";
import asia2 from "../../../../public/assets/asia2.png";
import asia3 from "../../../../public/assets/asia3.png";
import sparkle from "../../../../public/assets/sparkles.svg";
import heart from "../../../../public/assets/player-heart.svg";
import style from "./HomeCardList.module.css";
export default function HomeCardListTrend() {
  return (
    <div className={style.trend}>
      <h2>Trending now</h2>
      <div className={style.trendingNow}>
        <CardItem
          photoUrl={spainTrip}
          trip="SPAIN TRIP"
          name="Magical Madrid To Marrakech By Train"
          days="12 days"
          price="$1299.00"
          icon={sparkle}
          text="Loved by over 40s"
          showButton={true}
        />
        <CardItem
          photoUrl={italyTrip}
          trip="ITALY TRIP"
          name="Spectacular Sicily"
          days="5 days"
          price="$250.00"
          icon={heart}
          text="Loved by couples"
          showButton={true}
        />
        <CardItem
          photoUrl={turkeyTrip}
          trip="TURKEY TRIP"
          name="International Istanbul"
          days="7 days"
          price="$400.00"
          showButton={false}
        />
      </div>
    </div>
  );
}

export function HomeCardListBrand() {
  return (
    <div className={style.brand}>
      <h2>Brand New Trips</h2>
      <div className={style.brandNewTrips}>
        <CardItem
          photoUrl={brand1}
          trip="SPAIN TRIP"
          name="Magical Madrid To Marrakech By Train"
          days="12 days"
          price="$1299.00"
        />
        <CardItem
          photoUrl={brand2}
          trip="ITALY TRIP"
          name="Spectacular Sicily"
          days="5 days"
          price="$250.00"
        />
        <CardItem
          photoUrl={brand3}
          trip="TURKEY TRIP"
          name="International Istanbul"
          days="7 days"
          price="$400.00"
        />
      </div>
    </div>
  );
}

export function Europe() {
  return (
    <div className={style.europe} style={{ marginTop: "120px" }}>
      <h2>Europe</h2>
      <div className={style.europeTrips}>
        <CardItem
          photoUrl={europe1}
          trip="ICELAND TRIP"
          name="Volcanic Iceland"
          days="7 days"
          price="$2299.00"
        />
        <CardItem
          photoUrl={europe2}
          trip="SCOTLAND TRIP"
          name="The Scottish Highlands"
          days="7 days"
          price="$1687.00"
        />
        <CardItem
          photoUrl={europe3}
          trip="PORTUGAL TRIP"
          name="Atlantic Azores"
          days="6 days"
          price="$1220.00"
        />
      </div>
    </div>
  );
}

export function Asia() {
  return (
    <div className={style.asia}>
      <h2>Asia</h2>
      <div className={style.asiaTrips}>
        <CardItem
          photoUrl={asia1}
          trip="CHINA TRIP"
          name="Icons Of China"
          days="5 days"
          price="$1399.00"
        />
        <CardItem
          photoUrl={asia2}
          trip="THAILAND TRIP"
          name="Cambodia & Vietnam"
          days="7 days"
          price="$2350.00"
        />
        <CardItem
          photoUrl={asia3}
          trip="TAIWAN TRIP"
          name="A Taste Of Taiwan"
          days="7 days"
          price="$1900.00"
        />
      </div>
    </div>
  );
}
