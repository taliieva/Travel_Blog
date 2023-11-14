import Footer, {
  OurDestination,
  Revolution,
} from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LocalExpert from "../../components/LocalExpert/Local";
import NavCardItem from "../../components/NavCardItem/NavCardItem";
import { WhyUs } from "../ItalyPage/HelpComponent/HelpComponent.jsx";
import aboutPhoto from "../..//assets/about.png";
import style from "./AboutUs.module.css";
import AboutText from "./AboutText/AboutText.jsx";
import Layout from "../Layouts/Layouts.jsx";
export default function AboutUs() {
  return (
    <Layout>
      <NavCardItem
        url={aboutPhoto}
        header="About Us"
        text="Discover Our Passion for Travel and Adventure."
      />
      <AboutText />
      <WhyUs />
      <LocalExpert />
      <OurDestination />
      <Revolution />
    </Layout>
  );
}
