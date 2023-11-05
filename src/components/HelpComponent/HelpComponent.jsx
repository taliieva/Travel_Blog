import "../../components/HelpComponent/HelpComponent.css";
import HelpCardItem from "../HelpCardItem/HelpCardItem";
import info1 from "../../assets/info1.svg";
import info2 from "../../assets/info2.svg";
import info3 from "../../assets/info3.svg";
import info4 from "../../assets/info4.svg";
import info5 from "../../assets/info5.svg";
import info6 from "../../assets/info6.svg";
import why1 from "../../assets/why1.png";
import why2 from "../../assets/why2.png";
import why3 from "../../assets/why3.png";

export default function HelpComponent() {
  return (
    <div className="infoContainer">
      <h2>Expert guidance to help you plan your trip</h2>
      <div className="infoContainerItem">
        <HelpCardItem
          frameUrl={info1}
          header="Best Things to Do"
          text="Italy has so many delights to offer its visitors, it's hard to know where to start. Here's our pick of the best experiences Italy has to offer you."
        />
        <HelpCardItem
          frameUrl={info2}
          header="Things to Know"
          text="With so many attractions, it's hard to know where to begin with a trip to Italy. Here's some local insight into the essential things to know before you go."
        />
        <HelpCardItem
          frameUrl={info3}
          header="Transportation"
          text="Your guide to traveling independently across Italy, from the Alps to the islands."
        />
        <HelpCardItem
          frameUrl={info4}
          header="Visa Requirements"
          text="Italy is one of the most visited countries in Europe and its many attractions are hard to resist. Find out if you need a visa before you go."
        />
        <HelpCardItem
          frameUrl={info5}
          header="Money and Costs"
          text="These top budget tips can help you save money while exploring Italy."
        />
        <HelpCardItem
          frameUrl={info6}
          header="Traveling with Kids"
          text="Experience the best of Italy as a family with this guide to the top things to do there with kids."
        />
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <div className="infoContainer">
      <h2>Why Us?</h2>
      <div className="infoContainerItem center">
        <HelpCardItem
          frameUrl={why1}
          header="More than 149 travel titles currently in print"
        />
        <HelpCardItem
          frameUrl={why2}
          header="Supporting millions of travellers since 1982"
        />
        <HelpCardItem
          frameUrl={why3}
          header="Our utstanding customer satisfaction"
        />
      </div>
    </div>
  );
}
