import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
export default function CardItem(props){
    return(
        <div className="cardItem">
            <div className="cardImg">
                <img src={props.photoUrl} alt="" />
                <div className='bookMarkIcon'>
                    <FontAwesomeIcon icon={faBookmark} className='bookMark'/>
                </div>
                
            </div>
            <div className="itemFirstSection">
                 <p className="trip">{props.trip}</p>
                 <h1 className="tripName">{props.name}</h1>
                 <div className="itemSecondSection">
                    <p className="tripDays">{props.days}</p>
                    <p className="from">{props.from}<span className="tripPrice">{props.price}</span></p>
                 </div>
            </div>
        </div>
    )
}

CardItem.defaultProps = {
    from: "From"
}