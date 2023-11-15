import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import bookMark from "../../../public/assets/bookmark.svg";
import style from "./CardItem.module.css";
export default function CardItem(props){
    return(
        <div className={style.cardItem}>
            <div className={style.cardImg}>
                <img src={props.photoUrl} alt="" />
                <div className={style.favIconButton}>
                {props.showButton && <button>
                        <img src={props.icon} alt="" className={style.iconImg}/>
                        <p className={style.iconText}>{props.text}</p>
                    </button>}
                </div>

                {props.showBookMark && <div className={style.bookMarkIcon}>
                    <button className={style.saveButton}>
                    <img src={bookMark} alt="" className={style.bookMark}/>
                    </button>
                    
                </div>}
                
            </div>
            <div className={style.itemFirstSection}>
                 <p className={style.trip}>{props.trip}</p>
                 <h1 className={style.tripName}>{props.name}</h1>
                 <div className={style.itemSecondSection}>
                    <p className={style.tripDays}>{props.days}</p>
                    <p className={style.from}>{props.from}<span className={style.tripPrice}>{props.price}</span></p>
                 </div>
            </div>
        </div>
    )
}

CardItem.defaultProps = {
    from: "From",
    showBookMark : true
    
}
