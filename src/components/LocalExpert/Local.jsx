import local1 from "../../../public/assets/local1.png";
import local2 from "../../../public/assets/local2.png";
import vector1 from "../../../public/assets/Vector (1).png";
import vector2 from "../../../public/assets/Vector (2).png";
import responslocal1 from "../../../public/assets/responsivelocal1.png";
import responslocal2 from "../../../public/assets/responsivelocal2.png";
import style from "./Local.module.css";
export default function LocalExpert() {
  return (
    <div className={style.localExpert}>
      <h1>Our Local Experts</h1>
      <div className={style.localContainer}>
        <div className={style.topPhoto}>
          <img src={local1} alt="" />
          <div className={style.topVectorContaier}>
            <img src={vector1} alt="" />
            <p>Why trust Gary in Florida to plan your trip to South Africa?</p>
          </div>
        </div>
        <div className={style.bottomPhoto}>
          <img src={local2} alt="" />
          <div className={style.bottomVectorContainer}>
            <img src={vector2} alt="" />
            <p>When Angela in Johannesburg knows best.</p>
          </div>
        </div>
      </div>

      <div className={style.responsiveContainer}>
        <div className={style.responsiveTopPhoto}>
          <img src={responslocal1} alt="" />
          <div className={style.topResponsVectorContaier}>
            <img src={vector1} alt="" />
            <p>Why trust Gary in Florida to plan your trip to South Africa?</p>
          </div>
        </div>
        <div className={style.responsiveBottomPhoto}>
          <img src={responslocal2} alt="" />
          <div className={style.bottomResponsVectorContaier}>
            <img src={vector2} alt="" />
            <p>When Angela in Johannesburg knows best.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
