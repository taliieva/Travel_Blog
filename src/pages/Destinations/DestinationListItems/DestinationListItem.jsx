import { useState } from "react";
import style from "./DestinationListItem.module.css";

import { Link } from "react-router-dom";
export function ListItem(props) {
  const [openList, setOpenList] = useState(true);

  const openItem = () => {
    setOpenList(!openList);
  };
  return (
    <div className={style.ListItemContainer}>
      <p onClick={openItem}>{props.header}</p>
      <ul>
        {props.list.map((item, index) => (
          <li key={index} className={`${openList ? style.open : style.close}`}>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DestinationlistItem() {
  return (
    <div className={style.destinationLists}>
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
