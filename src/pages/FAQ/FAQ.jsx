import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavCardItem from "../../components/NavCardItem/NavCardItem";
import faqPhoto from "../../assets/FAQ.png";
import FAQText from "../../components/FAQText/FAQText";
import "../../pages/FAQ/FAQ.css";
export default function FAQ(){
    return(
        <div>
            <Header/>
            <NavCardItem url={faqPhoto} header="FAQ" text="Unlocking the Mysteries of Travel: Your Questions, Our Journey."/>
            <FAQText/>
            <Footer/>
        </div>
    )
}