import Footer, { OurDestination, Revolution } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LocalExpert from "../../components/LocalExpert/Local";
import NavCardItem from "../../components/NavCardItem/NavCardItem";
import {WhyUs} from "../../components/HelpComponent/HelpComponent.jsx";
import aboutPhoto from "../../assets/about.png";
import '../../pages/AboutUs/AboutUs.css';
import AboutText from "../../components/AboutText/AboutText";
export default function AboutUs(){
    return(
        <div>
            <Header/>
            <NavCardItem url={aboutPhoto} header="About Us" text="Discover Our Passion for Travel and Adventure."/>
            <AboutText/>
            <WhyUs/>
            <LocalExpert/>
            <OurDestination/>
            <Revolution/>
            <Footer/>
        </div>
    )
}