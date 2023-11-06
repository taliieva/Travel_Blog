import "../../components/DestinationListItems/DestinationListItem.css";

import { Link } from "react-router-dom";
export function ListItem(props){
    return(
        <div className="ListItemContainer">
            <ul>
                <p>{props.header}</p>
                {props.list.map((item,index)=>(
                    <li key={index}><Link to={`/${item}`}>{item}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default function DestinationlistItem() {
  return (
    <div className="destinationLists">
      <ListItem
        header="Europe"
        list={[
          "Azores",
          "Croatia",
          "Georgia",
          "Germany",
          "Greece",
          "Iceland",
          "Ireland",
          "Italy",
          "Portugal",
          "Scotland",
          "Spain",
          "United Kingdom",
        ]}
      />
      <ListItem
        header="Asia"
        list={[
          "Cambodia",
          "China",
          "India",
          "Indonesia",
          "Japan",
          "Jordan",
          "South Korea",
          "Sri Lanka",
          "Taiwan",
          "Thailand",
          "Turkey",
          "Vietnam",
        ]}
      />
      <ListItem
        header="Africa"
        list={[
          "Egypt",
          "Ethiopia",
          "Kenya",
          "Ghana",
          "Madagascar",
          "Mauritius",
          "Morocco",
          "Namibia",
          "Rwanda",
          "South Africa",
          "Uganda",
          "Tanzania & Zanzibar",
        ]}
      />
      <ListItem
        header="C/America"
        list={[
          "Belize",
          "Costa Rica",
          "Cuba",
          "Dominican Republic",
          "Guatemala",
          "Honduras",
          "Jamaica",
          "Nicaragua",
          "Mexico",
          "Panama",
          "Puerto Rico",
          "Trinidad and Tobago",
        ]}
      />
      <ListItem
        header="S/America"
        list={[
          "Argentina",
          "Bolivia",
          "Brazil",
          "Chile",
          "Colombia",
          "Ecuador",
          "Peru",
        ]}
      />
    </div>
  );
}
