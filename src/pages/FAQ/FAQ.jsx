import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavCardItem from "../../components/NavCardItem/NavCardItem";
import faqPhoto from "../../../public/assets/FAQ.png";
import "../../pages/FAQ/FAQ.css";
import FAQText from "./FAQText/FAQText";
import Layout from "../Layouts/Layouts";
export default function FAQ() {
  return (
    <Layout>
      <NavCardItem
        url={faqPhoto}
        header="FAQ"
        text="Unlocking the Mysteries of Travel: Your Questions, Our Journey."
      />
      <FAQText />
    </Layout>
  );
}
