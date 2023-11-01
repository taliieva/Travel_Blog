import "../../components/ListItems/ListItem.css";
export default function ListItem(props){
    return(
        <div className="ListItemContainer">
            <ul>
                <p>{props.header}</p>
                {props.list.map((item,index)=>(
                    <li key={index}><a href="#">{item}</a></li>
                ))}
            </ul>
        </div>
    )
}