import "../../components/ListItems/ListItem.css";
import { Link } from "react-router-dom";
export default function ListItem(props){
    return(
        <div className="ListItemContainer">
            <ul>
                <p>{props.header}</p>
                {props.list.map((item,index)=>(
                    <li key={index}><Link to="/Italy">{item}</Link></li>
                ))}
            </ul>
        </div>
    )
}