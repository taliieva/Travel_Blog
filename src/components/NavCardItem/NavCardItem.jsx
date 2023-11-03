import "../../components/NavCardItem/NavCardItem.css";
export default function NavCardItem(props){
    return(
        <div className="navCardContainer">
            <img src={props.url} alt="" />
            <div className="navCardText">
                <h2>{props.header}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}