import Footer, { OurDestination, Revolution } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavCardItem from "../../components/NavCardItem/NavCardItem";
import contactPhoto from "../../assets/contact.png";
import ContactText from "../../components/ContactText/ContactText";
import "../../pages/ContactUs/ContactUs.css";
export default function ContactUs(){
    return(
        <div>
            <Header/>
            <NavCardItem url={contactPhoto} header="Contact us" text="Your Journey Begins with a Conversation - Reach Out to Us Today!"/>
            <ContactText/>
            <OurDestination/>
            <Revolution/>
            <Footer/>
        </div>
    )
}